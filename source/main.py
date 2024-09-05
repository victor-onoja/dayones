# import re
# import os
import uuid
import time
# import json
# import asyncio
# from datetime import datetime
from typing import Annotated

from fastapi import FastAPI, Request, Response, Form, HTTPException, Body
# from fastapi.responses import HTMLResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
# from fastapi.staticfiles import StaticFiles
from fastapi.params import Depends

from . import database as db
from . import encoder as enc
# from . import executor as exe
from contextlib import asynccontextmanager


app = FastAPI()
# app.mount("/static", StaticFiles(directory="frontend/static"), name="static")
# app.mount("/dist", StaticFiles(directory="dist"), name="dist")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SIGNATURE_EXPIRY = 300  # 5 minutes in seconds

@asynccontextmanager
async def lifespan(app: FastAPI):
    ...


@app.post("/login_request")
def login_request(
    response: Response,
    address: Annotated[str, Body()],
    signature: Annotated[str, Body()],
    timestamp: Annotated[str, Body()],
    session: db.Session = Depends(get_session),  # type: ignore
):
    message = f"{address} {timestamp}"
    signed_time = int(timestamp)
    current_time = time.time()
    signer = enc.recover_signer(signature, message)
    admin = db.read(
        session=session,
        data=db.models.Admin,
        query=[db.models.Admin.address == signer.lower()],
        limit=1,
    )

    if not admin:
        raise HTTPException(401, "Invalid Signature")
    elif not (signer.lower() == address == admin[0].address.lower()):
        raise HTTPException(401, "Invalid Signature")

    if (current_time - signed_time) > SIGNATURE_EXPIRY:
        raise HTTPException(401, "Expired Signature")

    admin_session_id = str(uuid.uuid4())
    admin_session = db.models.AdminSession(admin=admin[0], session_id=admin_session_id)
    db.create(session, admin_session)
    response.set_cookie(key="session", value=admin_session_id)

    return "Logged In"


@app.post("/logout_request")
def logout_request(request: Request, session: db.Session = Depends(get_session)):  # type: ignore
    admin_session = db.read(
        session=session,
        data=db.models.AdminSession,
        query=[db.models.AdminSession.session_id == request.cookies.get("session", "")],
        limit=1,
    )
    if admin_session:
        db.delete(session, admin_session[0])
        return "Logged Out"
    
@app.get("/cart")
def get_cart():
    ...

@app.post("/cart")
def add_cart():
    ...

@app.get("/advert")
def get_advert():
    ...

@app.post("/signup_request")
def signup_request():
    ...