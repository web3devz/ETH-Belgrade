// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    struct Proposal {
        address proposer;
        string description;
        uint256 targetBlock;
        uint256 yesVotes;
        uint256 noVotes;
        bool finalized;
        mapping(address => bool) hasVoted;
    }

    Proposal[] public proposals;

    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, uint256 targetBlock);
    event VoteCast(uint256 indexed proposalId, address indexed voter, bool support);
    event ProposalFinalized(uint256 indexed proposalId, bool passed);

    /// @notice Create a new proposal with a target block (must be in the future)
    function createProposal(string calldata _desc, uint256 _targetBlock) external returns (uint256) {
        require(_targetBlock > block.number, "Target block must be in future");
        Proposal storage p = proposals.push();
        p.proposer = msg.sender;
        p.description = _desc;
        p.targetBlock = _targetBlock;
        p.yesVotes = 0;
        p.noVotes = 0;
        p.finalized = false;
        uint256 newId = proposals.length - 1;
        emit ProposalCreated(newId, msg.sender, _targetBlock);
        return newId;
    }

    /// @notice Cast a “yes” or “no” vote on an active proposal
    function vote(uint256 _proposalId, bool _support) external {
        Proposal storage p = proposals[_proposalId];
        require(block.number < p.targetBlock, "Voting period over");
        require(!p.hasVoted[msg.sender], "Already voted");
        p.hasVoted[msg.sender] = true;
        if (_support) {
            p.yesVotes++;
        } else {
            p.noVotes++;
        }
        emit VoteCast(_proposalId, msg.sender, _support);
    }

    /// @notice Finalize a proposal once its target block is reached
    function finalizeProposal(uint256 _proposalId) external {
        Proposal storage p = proposals[_proposalId];
        require(block.number >= p.targetBlock, "Voting still open");
        require(!p.finalized, "Already finalized");
        p.finalized = true;
        bool passed = p.yesVotes > p.noVotes;
        emit ProposalFinalized(_proposalId, passed);
    }

    /// @notice Get proposal details (excluding the `hasVoted` mapping)
    function getProposal(uint256 _proposalId) external view returns (
        address proposer,
        string memory description,
        uint256 targetBlock,
        uint256 yesVotes,
        uint256 noVotes,
        bool finalized
    ) {
        Proposal storage p = proposals[_proposalId];
        return (
            p.proposer,
            p.description,
            p.targetBlock,
            p.yesVotes,
            p.noVotes,
            p.finalized
        );
    }
}
