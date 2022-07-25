const web3= require('web3');
const fs=require('fs')
const path=require('path')
const web3=new web3()
const privateKeyFile=path.join(__dirname,"./.secret")

//Function get account to return the address of your account
const getAccount=()=>{
    const secret = fs.readFileSync(privateKeyFile);
    const account = web3.eth.accounts.privateKeyToAccount(secret.toString())
    return account;
}
//function setAccount will create  new account
const setAccount=()=>{
    const newAccount=web3.eth.accounts.create()
    fs.writeFileSync(privateKeyFile, newAccount.privateKey,(err)=>{
        if(err){
            console.log(`Address ${newAccount.address}`)

        }
        module.exports={
            getAccount,
            setAccount
        }
    })
}
