// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

/// @title Simple Time-Lock Wallet
/// @notice Deployer locks ETH until `unlockTime`. Only deployer can withdraw after unlock.
contract Lock {
    uint256 public unlockTime;
    address payable public owner;

    /// @notice Constructor sets unlock time and stores initial balance
    /// @param _unlockTime Unix timestamp when funds become withdrawable
    constructor(uint256 _unlockTime) payable {
        require(block.timestamp < _unlockTime, "Unlock time should be in the future");
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    /// @notice After `unlockTime` has passed, owner can withdraw all funds
    function withdraw() public {
        require(block.timestamp >= unlockTime, "Funds are locked");
        require(msg.sender == owner, "Only owner can withdraw");

        uint256 amount = address(this).balance;
        owner.transfer(amount);
    }
}
