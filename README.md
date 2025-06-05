# Hackathon Submission: Passet Hub Contracts

This repository contains five Solidity contracts that have been ported to Polkadot’s EVM (Passet Hub) and deployed. Below you’ll find:

1. Contracts overview with purposes  
2. Original Sepolia source links  
3. Passet Hub deployed addresses  
4. Instructions to reproduce (deploy & test)  
5. Analysis summary

## 1. Contracts Overview

1. **Crowdfunding.sol**  
   - **Purpose**: Create multiple crowdfunding campaigns (title, description, target, deadline, image URL). Allow donations and enable campaign owners to collect funds if the target is met, or donors to withdraw if the deadline passes without meeting the goal.  
   - **Original Sepolia Source (Etherscan)**:  
     https://sepolia.etherscan.io/address/0x90106ba4d86252dc9fb065e2abe73035e379a018#code  
   - **Passet Hub Deployed Address**:  
     `0x4a66F27329Cc3410a9dCc61A019a60A0767c127E`  
   - **Source File**: [contracts/Crowdfunding.sol](contracts/Crowdfunding.sol)  

2. **MultisigWallet.sol**  
   - **Purpose**: A multi‐signature wallet requiring multiple owner confirmations for transactions. Supports submission, confirmation, revocation, and execution of transactions.  
   - **Original Sepolia Source (Etherscan)**:  
     https://sepolia.etherscan.io/address/0xEA8A7F77853579AFDA00596AF8132BFE359C2D5D#code  
   - **Passet Hub Deployed Address**:  
     `0x1b41c69876Be663fe7D39C9e1FA7B5b44029cb21`  
   - **Source File**: [contracts/MultisigWallet.sol](contracts/MultisigWallet.sol)  

3. **ERC20Basic.sol**  
   - **Purpose**: A minimal ERC-20 token that allows the owner to mint or burn tokens. Implements standard ERC-20 functions.  
   - **Original Sepolia Source (Etherscan)**:  
     https://sepolia.etherscan.io/address/0x016a0e9a1ad47b88fc624bfdb85382e2c82b58d2#code  
   - **Passet Hub Deployed Address**:  
     `0x4f7D886c4aF691c054abdc907f3241085C474f3C`  
   - **Source File**: [contracts/ERC20Basic.sol](contracts/ERC20Basic.sol)  

4. **Voting.sol**  
   - **Purpose**: An on-chain proposal/voting system. Users can create proposals, cast “yes/no” votes, and finalize results after a target block.  
   - **Original Sepolia Source (Etherscan)**:  
     https://sepolia.etherscan.io/address/0x5bbed99f77b34538ac3c319c549bb665b2e22e87#code  
   - **Passet Hub Deployed Address**:  
     `0x15D102AbBa1F856434863a9DFCfDD999EA2FFb36`  
   - **Source File**: [contracts/Voting.sol](contracts/Voting.sol)  

5. **Lock.sol**  
   - **Purpose**: A time-lock wallet where the deployer locks ETH until a specified future timestamp. Only the deployer can withdraw after the unlock time.  
   - **Original Sepolia Source (Etherscan)**:  
     https://sepolia.etherscan.io/address/0x267a26Ed02Cb4eD360c69C31324d5B0cd4dB6dDC#code  
   - **Passet Hub Deployed Address**:  
     `0xAF53982e841fD1fdD8e74aa449a96876c6E19977`  
   - **Source File**: [contracts/Lock.sol](contracts/Lock.sol) 


6. **Contracts**

   *  each contract on Blockscout (Passet Hub):

     * Crowdfunding:
       `https://blockscout-passet-hub.parity-testnet.parity.io/address/0x4a66F27329Cc3410a9dCc61A019a60A0767c127E`
     * MultisigWallet:
       `https://blockscout-passet-hub.parity-testnet.parity.io/address/0x1b41c69876Be663fe7D39C9e1FA7B5b44029cb21`
     * ERC20Basic:
       `https://blockscout-passet-hub.parity-testnet.parity.io/address/0x4f7D886c4aF691c054abdc907f3241085C474f3C`
     * Voting:
       `https://blockscout-passet-hub.parity-testnet.parity.io/address/0x15D102AbBa1F856434863a9DFCfDD999EA2FFb36`
     * Lock:
       `https://blockscout-passet-hub.parity-testnet.parity.io/address/0xAF53982e841fD1fdD8e74aa449a96876c6E19977`

## 3. Original Sepolia Deployments (for reference)

1. **Crowdfunding.sol**

   * Sepolia Address: `0x90106ba4d86252dc9fb065e2abe73035e379a018`
   * Source:
     [https://sepolia.etherscan.io/address/0x90106ba4d86252dc9fb065e2abe73035e379a018#code](https://sepolia.etherscan.io/address/0x90106ba4d86252dc9fb065e2abe73035e379a018#code)

2. **MultisigWallet.sol**

   * Sepolia Address: `0xEA8A7F77853579AFDA00596AF8132BFE359C2D5D`
   * Source:
     [https://sepolia.etherscan.io/address/0xEA8A7F77853579AFDA00596AF8132BFE359C2D5D#code](https://sepolia.etherscan.io/address/0xEA8A7F77853579AFDA00596AF8132BFE359C2D5D#code)

3. **ERC20Basic.sol**

   * Sepolia Address: `0x016a0e9a1ad47b88fc624bfdb85382e2c82b58d2`
   * Source:
     [https://sepolia.etherscan.io/address/0x016a0e9a1ad47b88fc624bfdb85382e2c82b58d2#code](https://sepolia.etherscan.io/address/0x016a0e9a1ad47b88fc624bfdb85382e2c82b58d2#code)

4. **Voting.sol**

   * Sepolia Address: `0x5bbed99f77b34538ac3c319c549bb665b2e22e87`
   * Source:
     [https://sepolia.etherscan.io/address/0x5bbed99f77b34538ac3c319c549bb665b2e22e87#code](https://sepolia.etherscan.io/address/0x5bbed99f77b34538ac3c319c549bb665b2e22e87#code)

5. **Lock.sol**

   * Sepolia Address: `0x267a26Ed02Cb4eD360c69C31324d5B0cd4dB6dDC`
   * Source:
     [https://sepolia.etherscan.io/address/0x267a26Ed02Cb4eD360c69C31324d5B0cd4dB6dDC#code](https://sepolia.etherscan.io/address/0x267a26Ed02Cb4eD360c69C31324d5B0cd4dB6dDC#code)

## 4. Project Structure

```
contracts_project/
├── contracts/
│   ├── Crowdfunding.sol
│   ├── MultisigWallet.sol
│   ├── ERC20Basic.sol
│   ├── Voting.sol
│   └── Lock.sol
├── scripts/
│   └── deploy-all.js
├── test/
│   └── test.js
├── hardhat.config.js
├── package.json
└── README.md
```

* **contracts/**: Solidity source files
* **scripts/deploy-all.js**: Deploys all five contracts to Passet Hub
* **test/test.js**: Basic tests for functionality on a local Hardhat network
* **hardhat.config.js**: Configuration for Solidity compilers and Passet Hub network
* **package.json**: Defines `npm run fullrun` script (deploy + test)
* **README.md**: This document

