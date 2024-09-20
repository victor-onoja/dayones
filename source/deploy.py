import os
import re
import json
import pathlib
from web3 import AsyncWeb3, Web3
from web3.types import TxReceipt

# from web3.middleware import async_geth_poa_middleware
from dotenv import load_dotenv


load_dotenv()


# assumes that it is foundry that is used to compile the contrcts
# if it is not foundry at least it must be a compatible output file
# this sets the build directory
BUILDPATH: pathlib.PurePath = pathlib.PurePath(r"out")


def get_w3(url: str) -> Web3 | AsyncWeb3:
    w3 = Web3(Web3.HTTPProvider(url))

    # w3 = AsyncWeb3(AsyncWeb3.AsyncHTTPProvider(url))
    # w3.middleware_onion.inject(async_geth_poa_middleware, layer=0)
    return w3


def getBuild(contract_name: str) -> dict:
    path = BUILDPATH.joinpath(f"{contract_name}.sol", f"{contract_name}.json")
    with open(path, "r") as file:
        bytecode: dict = json.load(file)
        return bytecode


def getenvVar(alias: str) -> str:
    val = os.environ.get(alias, "")
    return val


def save_transaction(reciept: TxReceipt) -> None: ...


def placeholders(bytecode: str) -> list[str] | None:
    placeholders = re.findall(r"__\$\w+\$__", bytecode)
    if placeholders is not None:
        return list(placeholders)


def resolve_placeholder(
    bytecode: str,
    save: bool,
    url: str,
    alias: str,
    refrence: dict,
    placeholders: list[str],
) -> str:
    for item in placeholders:
        build = getBuild(refrence[item])
        libtx = deploy(alias, build, url, save)
        bytecode.replace(item, str(libtx.contractAddress).lower())

    return bytecode


def hashString(string: str):
    return Web3.keccak(text=string).hex()[:34]


def getContractName(string: str) -> str:
    se = re.search(r"\\([a-zA-Z]+)\.", string)
    if se is None:
        return ""
    return se[0][2:-1]


def get_refrences(build: dict) -> dict[str, str]:
    refrences: dict = build["bytecode"]["linkReferences"]
    for key, value in refrences.items():
        for item in value:
            key_ = f"{key}:{item}"
            refrences[f"__${hashString(key_)}$__"] = getContractName(key)

    return refrences


def deploy(
    alias: str, build: dict, url: str = "http://127.0.0.1:8545/", save: bool = False
):

    bytecode: str = build["bytecode"]["object"][2:]
    placeholders: list[str] | None = placeholders(bytecode)
    refrences = get_refrences(build)

    if placeholders is not None:
        bytecode = resolve_placeholder(bytecode, save, url, alias, refrences, placeholders)

    w3 = get_w3(url)
    private_key = getenvVar(alias)
    user = w3.eth.account.from_key(private_key)
    nonce = w3.eth.get_transaction_count(user.address)
    contract = w3.eth.contract(abi=build["abi"], bytecode=bytecode)

    transaction = contract.constructor().build_transaction(
        {
            "gasPrice": w3.eth.gas_price,
            "chainId": w3.eth.chain_id,
            "from": user.address,
            "nonce": nonce,
        }
    )
    signedTx = w3.eth.account.sign_transaction(transaction, private_key=private_key)

    txHash = w3.eth.send_raw_transaction(signedTx.raw_transaction)
    txReciept = w3.eth.wait_for_transaction_receipt(txHash)  # type: ignore

    if save:
        print("saving")

    return txReciept


# lib_path = r"out\Haversine.sol\Haversine.json"

lib_build = getBuild("Haversine")
librarytx = deploy("Alpha", lib_build)

contract_build = getBuild("OrderManager")
contracttx = deploy("Alpha", contract_build)
