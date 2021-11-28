Design pattern deicisions are described below

1. Oracles //Chainlink ETH-USD Pricefeed Oracle was used to provide information in a decentralized fashion to the user so that more informed decisions can be made.
2. Access Control Design Patterns //Openzeppelin Ownable used for the emergency rescue function which could only be used by the smart contract owner.
3. Optimizing Gas //No "iterative" calls/functions were used to avoid using large amoutn of gas being used
4.1 Inheritance and Interfaces // Makes use of AggregatorV3Interface internal priceFeed to fetch price data and timestamp, in a decentralized fashion so the Smart Contract can log an accurate and reliable time-stamp
4.2 Inheritance and Interfaces // Makes use of truffle-assertions and chai for truffle unit tests
4.3 Inheritance and Interfaces // Makes use of Web3.JS for front-end

Reference
https://docs.google.com/document/d/1tthsXLlv5BDXEGUfoP6_MAsL_8_T0sRBNQs_1OnPxak/edit