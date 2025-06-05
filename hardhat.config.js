require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.28", settings: { optimizer: { enabled: true, runs: 200 } } },
    ]
  },
  networks: {
    passetHub: {
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io/",
      chainId: 420420421,
      gasPrice: 0,
      accounts: [ "562af48eaaddressssss8bd69301a652c" ]
    }
  }
};
