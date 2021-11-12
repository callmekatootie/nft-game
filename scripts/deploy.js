const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Pandaren Brewmaster", "Squid", "Pikachu"], // Names
    ["https://i.imgur.com/8u5hAMR.jpeg", // Images
    "https://i.imgur.com/fp1ak0M.png", 
    "https://i.imgur.com/Iqr8lBQ.jpeg"],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Dormamu", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
