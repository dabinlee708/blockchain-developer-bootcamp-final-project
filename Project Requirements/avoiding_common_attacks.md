Security Measures used to avoid common attacks are described below.
'
Solidity Pitfalls and Attacks & Smart Contract Pitfalls and Attacks
1. Using specific Compiler Pragma //pragma solidity 0.8.10; specific version, 0.8.10 is used.
2. Use Modifiers Only for Validation //Modifiers implemented are used to only validate identity of owners, renter and status of the game.
3. Tx. Origin Authentication //Instead of Tx.Origin, msg.sender is used for authentication