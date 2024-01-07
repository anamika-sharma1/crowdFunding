// const hre = require("hardhat");
// // 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
// async function main() {
//   const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
//   const crowdFunding = await CrowdFunding.deploy();

//   await crowdFunding.waitForDeployment();

//   console.log(`CrowdFunding deployed to ${crowdFunding.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const crowdFunding = await hre.ethers.deployContract("CrowdFunding");
  // Deploy the contract.
  await crowdFunding.waitForDeployment();
  console.log("CrowFunding deployed to:", crowdFunding.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const HelloWorld = await ethers.getContractFactory("HelloWorld");
// const helloWorldContract = await HelloWorld.deploy();
// await helloWorldContract.deployed();
