const web3=require('web3')
const contractKit=require("@celo/contrackit")
const { getAccount } = require('./contracts/ celo_account')
const web3= new web3('https://celo-alfajores--rpc.datahub.figment.io/apikey/<your API key here>/')
data=require('./artifacts/contracts/TinyVillage.sol/TinyVillage.json')
kit=contractKit.newKitFromWeb3(web3)
Account=require('./celo_account');

 function Village(){
     const account=Account.getAccount()
     kit.connection.addAccount(account.privateKey)
     let tx=await kit.connection.sendTransaction({
         from:account.address,
         data:data.bytecode
     })
     return tx.waitReceipt()
 }
 module .exports={
     Village    
 }