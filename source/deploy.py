import json
import os
from web3 import AsyncWeb3, Web3
# from web3.middleware import async_geth_poa_middleware
from dotenv import load_dotenv

load_dotenv()

BUILDPATH: str = r"out\OrderManager.sol\OrderManager.json"

def get_w3(url: str = "http://127.0.0.1:8545/") -> Web3 | AsyncWeb3:
    w3 = Web3(Web3.HTTPProvider(url))

    # w3 = AsyncWeb3(AsyncWeb3.AsyncHTTPProvider(url))
    # w3.middleware_onion.inject(async_geth_poa_middleware, layer=0)
    return w3

def getABI(path: str) -> list:
    with open(path, 'r') as file:
        build: list = json.load(file)
        return build["abi"]

def getBytecode(path: str) -> str:
    with open(path, 'r') as file:
        bytecode: list = json.load(file)
        return bytecode["bytecode"]["object"][2:]

def getenvVar(alias: str) -> str:
    val = os.environ.get(alias, "")
    return val


def save_transaction():
    ...


def deploy(alias: str, bytecode: str, abi: list[str], url: str | None = None, save: bool = False):
    w3 = get_w3(url)
    private_key = getenvVar(alias)
    user = w3.eth.account.from_key(private_key)
    nonce = w3.eth.get_transaction_count(user.address)
    contract = w3.eth.contract(abi=abi, bytecode=bytecode)

    transaction = contract.constructor().build_transaction(
        {
            "gasPrice": w3.eth.gas_price,
            "chainId": w3.eth.chain_id,
            "from": user.address,
            "nonce": nonce
        }
    )
    signedTx = w3.eth.account.sign_transaction(transaction, private_key=private_key)

    txHash = w3.eth.send_raw_transaction(signedTx.rawTransaction)
    txReciept = w3.eth.wait_for_transaction_receipt(txHash)

    if save:
        print("saving")

    return txReciept

lib_path = "out\Haversine.sol\Haversine.json"
lib_bytecode = getBytecode()
lib_abi = getABI()

librarytx = deploy("Alpha", lib_bytecode, lib_abi)

