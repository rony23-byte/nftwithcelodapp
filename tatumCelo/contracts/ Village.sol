//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 //importing the ERC1155 LIBRARY
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
  contract TinyVillage is ERC1155{
   uint256 public  constant VILLAGE=0;
   uint256 public  constant MINE=1;
   uint256 public  constant FARM=2;
   uint256 public  constant MILL=3;
   uint256 public  constant CASTLE=4;

}
constructor()ERC1155("https://gateway.pinata.cloud/ipfs/QmTN32qBKYqnyvatqfnU8ra6cYUGNxpYziSddCatEmopLR/metadata/api/item/1.json"){

}
function mintVillage()public {
 require(balanceOf(msg.sender.VILLAGE)==0,"You already have a Village");
 _mint(msg.sender,VILLAGE, 1,"0x000");

};
function mintMine()public{
    require(balanceOf(msg.sender.VILLAGE)>0,"You need to have a village");
    require(balanceOf(msg.sender.MINE)==0,"You already have a mine ");
    _mint(msg.sender,MINE,1"0X000");
};
function mintFarm()public{
    require(balanceOf(msg.sender.VILLAGE)>0,"You need to have a village");
    require(balanceOf(msg.sender.MINE)>0,"You need to have a  mine");
    require(balanceOf(msg.sender.FARM)==0,"You already have a  a farm");
    _mint(msg.sender,FARM,1,"0x000");
};
function mintMill()public{
    
    require(balanceOf(msg.sender.VILLAGE)>0,"You need to have a village");
    require(balanceOf(msg.sender.MINE)>0,"You need to have a  mine");
    require(balanceOf(msg.sender.FARM)>0,"You  need to have   a farm");
    require(balanceOf(msg.sender.MILL)==0,"You  already have a mill");
    _mint(msg.sender,MILL,1,"0X000");
};
function mintCastle() public{
    require(balanceOf(msg.sender.VILLAGE)>0,"You need to have a village");
    require(balanceOf(msg.sender.MINE)>0,"You need to have a  mine");
    require(balanceOf(msg.sender.FARM)>0,"You  need to have   a farm");
    require(balanceOf(msg.sender.MILL)>0,"You  neec to have a mill");
    require(balanceOf(msg.sender.CASTLE)==0,"You already have a castle");
    _mint(msg.sender,MILL,1,"0X000");
}
   
  