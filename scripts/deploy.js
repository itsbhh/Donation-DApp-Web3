
const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); 
  const chai = await Chai.deploy(); 

  await chai.deployed();//deploying smart contract

  console.log("Deployed contract address:",`${chai.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x3C3e473d96bd3A4d1E52Cacd0d0119C274d38997
