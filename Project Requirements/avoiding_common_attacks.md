Security Measures used to avoid common attacks are described below.
'
Solidity Pitfalls and Attacks & Smart Contract Pitfalls and Attacks
1. [SWC-103 Floating Pragma, SWC-102 Outdated Compiler Version] - Using specific Compiler Pragma //pragma solidity 0.8.10; specific version, 0.8.10 is used.
2. Use Modifiers Only for Validation //Modifiers implemented are used to only validate identity of owners, renter and status of the game. 
3. [SWC-115 Authorization through tx.origin] - Tx. Origin Authentication //Instead of Tx.Origin, msg.sender is used for authentication
4. Proper Use of require, assert and revert //Require is used more often towards the beginning of the function
