const { ethers } = require("hardhat");

async function main() {
  const votingContract = await ethers.deployContract("Voting", ["mafaz"]);
  await votingContract.waitForDeployment();
  console.log(`Address: ${votingContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
