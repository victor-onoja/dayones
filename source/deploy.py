import json
import web3

def getABI() -> str:
    ...

def getBytecode() -> str:
    ...

def getPrivateKey() -> str:
    ...

RPCURL = "http://127.0.0.1:8545"
WALLET = ""
w3 = web3.Web3(web3.Web3.HTTPProvider(RPCURL))
nonce = w3.eth.get_transaction_count(WALLET)

OrderManager = w3.eth.contract(abi=getABI(), bytecode=getBytecode())

transaction = OrderManager.constructor().buildTransaction(
    {
        "gasPrice": w3.eth.gas_price,
        "chainId": w3.eth.chain_id,
        "from": WALLET,
        "nonce": nonce
    }
)

signedTx = w3.eth.account.sign_transaction(transaction, private_key=getPrivateKey())

txHash = w3.eth.send_raw_transaction(signedTx.rawTransaction)
txReciept = w3.eth.wait_for_transaction_receipt(txHash)
