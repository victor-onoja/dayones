"""module handling the database connection and CRUD functionality"""

import pathlib
from typing import Any, TypeVar, Type, Iterable
from sqlmodel import SQLModel, Session, create_engine, select

from . import models


DATA = TypeVar("DATA")
PATH = pathlib.PurePath(__file__).parent.parent
SQLITE_URL = f"sqlite:///{PATH.joinpath('data', 'database.db')}"
CONNECT_ARGS = {"check_same_thread": False}

engine = create_engine(SQLITE_URL, connect_args=CONNECT_ARGS)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create(session: Session, *entries: DATA) -> None:
    for item in entries:
        session.add(item)
    session.commit()


def read(
    session: Session,
    data: Type[DATA],
    query: Iterable[Any] = [],
    order_by: Iterable[Any] = [],
    limit: int = 0,
) -> list[DATA]:
    selection = select(data)  # type: ignore
    if order_by:
        selection = selection.order_by(*order_by)
    if query:
        selection = selection.where(*query)
    if limit:
        selection = selection.limit(limit)
    result = session.exec(selection)
    return result.all()


def delete(session: Session, *data: DATA) -> None:
    for entry in data:
        session.delete(entry)
    session.commit()


def update(session: Session, data: DATA, attribute: str, new_value: Any) -> None:
    setattr(data, attribute, new_value)
    session.commit()


if __name__ == "__main__":
    import json

    engine = create_engine(SQLITE_URL, echo=True, connect_args=CONNECT_ARGS)
    create_db_and_tables()

    def write_default(session: Session):
        objects = [
            # make sure admin address is in lower case
            # models.Admin(address="0x31fa0aea9ea139061388943794c9ad48799de656"),
            models.Admin(address="0x09fcd322a72deea26cbe92200a580050b4d40f4f"),
            models.Admin(address="0x2f44baab38d959af6e1e744fb41de5ab1c98fd26"),
            models.Admin(address="0x3488c059f83184b337c9c07006a0d36098c9b787"),
            models.Admin(address="0x52b88759a2732da1c75b52baec3d895a7529ed7e"),
            models.Namespace(key="treasury", value="treasury"),
            models.Actions(call="500 $GRX AirDrop", call_to_action="claim"),
            models.Actions(call="8 $ETH AirDrop", call_to_action="claim"),
            models.Actions(call="300 $BNB AirDrop", call_to_action="claim"),
            models.Actions(call="500 $TRX AirDrop", call_to_action="claim"),
            # models.Signature()
        ]
        create(session, *objects)

    def write_tokens(session: Session):
        with open(f"{PATH.joinpath('data', 'tokens_edit.json')}") as t:
            raw_tokens = json.load(t)
        tokens = [
            models.Token(
                address=token["address"],
                decimals=token["decimals"],
                domain=token["domain"],
                permit=token["permit"],
                abi=token["abi"],
                chain_id=token["chain_id"],
            )
            for token in raw_tokens
            if token["index"] not in {30, 82, 93}
        ]
        create(session, *(models.chains.values()))
        create(session, *tokens)

    with Session(engine) as session:
        database_initialized = read(
            session=session,
            data=models.Namespace,
            query=[models.Namespace.key == "database_initialized"],
            limit=1,
        )
        if not database_initialized:
            write_default(session)
            write_tokens(session)
            create(
                session,
                models.Namespace(key="database_initialized", value="initialized"),
            )
            print("initialized the database ...")

        # ---------------------------------------------------
        #
        #    Custom database scripts can go below here
        #
        # ---------------------------------------------------
