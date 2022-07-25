require('@nomiclabs/hardhat-waffle');
const Web3=require('web3');

const fs=require('fs')
const path=require('path')

const privateKeyFile=path.join(__dirname,'./.secret')
const Account=require('./celo_account');
const Deploy=require('./celo_deploy');
const { tasks } = require('hardhat');
//creating tasks in hardhat;One for returning all the accounts we have, one for returning the account address,
tasks("accounts","Prints the list of accounts",async()=>{
    const accounts=await ethers.getSigners();
    for (const account of accounts){
        console.log(account.address);
    }
});
tasks("celo-account","Prints account address or create a new address",async()=>{
    fs.existsSync(privateKeyFile)? console.log(`Address${Account.getAccount().address}`):Account.setAccount();
});
tasks("celo-deploy", "Prints account address or create a new",async()=>{
    const tx=await Deploy.Village();
    console.log(tx);
    console.log(`save the contract address ${tx.contractAddress}`)
});

//exporting the object to create our own config

module.exports={
    solidity:"0.8.4",
};
