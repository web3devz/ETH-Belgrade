async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // // Deploy Crowdfunding
  // const CF = await ethers.getContractFactory("Crowdfunding");
  // const cf = await CF.deploy();
  // await cf.deployed();
  // console.log("Crowdfunding deployed to:", cf.address);

  // // Deploy MultisigWallet (example owners and confirmations)
  // const owners = [deployer.address];
  // const M = await ethers.getContractFactory("MultisigWallet");
  // const m = await M.deploy(owners, 1);
  // await m.deployed();
  // console.log("MultisigWallet deployed to:", m.address);

  // Deploy ERC20Basic
  // const E20 = await ethers.getContractFactory("ERC20Token");
  // const e = await E20.deploy(deployer.address);
  // await e.deployed();
  // console.log("ERC20Basic deployed to:", e.address);

  // Deploy Voting
  const V = await ethers.getContractFactory("Voting");
  const v = await V.deploy();
  await v.deployed();
  console.log("Voting deployed to:", v.address);

  // // Deploy Lock (unlock time 1 hour from now, deposit 0.01 ETH)
  // const unlockTime = Math.floor(Date.now() / 1000) + 3600;
  // const Lock = await ethers.getContractFactory("Lock");
  // const l = await Lock.deploy(unlockTime, { value: ethers.utils.parseEther("0.01") });
  // await l.deployed();
  // console.log("Lock deployed to:", l.address);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
