const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract Deployment and Basic Functionality", function () {
  it("Crowdfunding: create campaign and get campaigns", async function () {
    const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    const cf = await Crowdfunding.deploy();
    await cf.deployed();

    const deadline = Math.floor(Date.now() / 1000) + 600; // 10 min from now
    const tx = await cf.createCampaign(
      (await ethers.getSigners())[0].address,
      "Test",
      "Description",
      ethers.utils.parseEther("1"),
      deadline,
      "image.png"
    );
    await tx.wait();

    const campaigns = await cf.getCampaigns();
    expect(campaigns.length).to.equal(1);
    expect(campaigns[0].title).to.equal("Test");
  });

  it("MultisigWallet: owner is added", async function () {
    const [owner] = await ethers.getSigners();
    const MultisigWallet = await ethers.getContractFactory("MultisigWallet");
    const mw = await MultisigWallet.deploy([owner.address], 1);
    await mw.deployed();

    const owners = await mw.getOwners();
    expect(owners[0]).to.equal(owner.address);
  });

  it("ERC20Basic: mint and transfer", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const ERC20 = await ethers.getContractFactory("ERC20Token");
    const token = await ERC20.deploy(owner.address);
    await token.deployed();

    await token.mint(ethers.utils.parseEther("100"));
    expect(await token.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("100"));

    await token.transfer(addr1.address, ethers.utils.parseEther("50"));
    expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("50"));
  });

  it("Voting: create proposal and vote", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();

    const targetBlock = (await ethers.provider.getBlockNumber()) + 10;
    const tx = await voting.createProposal("Proposal 1", targetBlock);
    const receipt = await tx.wait();
    const proposalId = receipt.events[0].args.proposalId;

    await voting.connect(addr1).vote(proposalId, true);
    const proposal = await voting.getProposal(proposalId);
    expect(proposal.yesVotes).to.equal(1);
  });

  it("Lock: cannot withdraw before unlockTime", async function () {
    const [owner] = await ethers.getSigners();
    const unlockTime = Math.floor(Date.now() / 1000) + 3600;
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: ethers.utils.parseEther("0.01") });
    await lock.deployed();

    await expect(lock.withdraw()).to.be.revertedWith("Funds are locked");
  });
});
