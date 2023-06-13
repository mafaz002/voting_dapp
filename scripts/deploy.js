const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("Voting");
  await contract.waitForDeployment();

  await contract.addCandidate("Asia");
  await contract.addCandidate("Africa");
  await contract.addCandidate("Europe");
  await contract.addCandidate("Australia");
  await contract.addCandidate("Antartica");

  console.log(`Address: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
