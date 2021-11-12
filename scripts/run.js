const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Pandaren Brewmaster", "Squid", "Pikachu"], // Names
    ["https://i.imgur.com/8u5hAMR.jpeg", // Images
    "https://i.imgur.com/fp1ak0M.png", 
    "https://i.imgur.com/Iqr8lBQ.jpeg"],
    [100, 200, 1], // HP values
    [100, 50, 25], // Attack damage values
    "Dormamu", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    300 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();  

  txn = await gameContract.attackBoss();
  await txn.wait();  
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
