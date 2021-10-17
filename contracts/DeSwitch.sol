// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract DeSwitch {
  event LogForGameRegistered(uint gameId, address gameOwnerAddress);
  event LogForGameRentalRequested(uint gameId, address gameRenter, address gameOwnerAddress);
  event LogFOrGameRentalTxnCompleted(uint gameId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  enum gameState {
    Available,
    Shipped,
    Rented,
    Sold
  }
  struct Game{
    uint gameid;
    uint trackingId;
    uint rentalRate;
    uint sellRate;
    uint timeRentalStart;
    address payable gameOwner;
    address payable gamebuyer;
    address payable gameRenter;
    gameState state;
  }

  uint trackingId;
  mapping (uint => Game) public games;

  
    constructor() public {
  }

  function registerGame(uint gameId, uint rentalRate, uint depositRequired, gameState buyOption, uint postalCode) public returns(bool, uint){
    //should be a public function as anyone should be able to put their game for sale/rental
    //Users register games they own (Ex. Switch Games) as "Available"
    //GameID refers to gameId from http://nswdb.com/ to avoid confusion between different game titles
    //Require checks for validity of values submitted for required arguments
    //Set gameState as "Available"
    //Set gameOwner as msg.sender
    //Set gameBuyer and gameRenter will be empty and get updated once a buyer/owner triggers the rentGame/buyGame function
    //returns true/false if registeration was successful and a trackingId tagged to the registered game
    //Emits appropriate event to log the chagnes 
    //Create a random trackingId 
  }

  function rentGame(uint trackingId) public payable returns(bool) {
    //should be "payable" as this requires ether to be transffered to the contract
    //should be "public" as anyone should be able to rent the game 
    //Verify the state of trackingId to be "Available" using a modifier
    //return true or false if the rentGame attempt was successful
    //check if msg.value == games[trackingId].rentalRate
    //at the end of this function the state of the Game should be set to "TransactionInProgress"
  }

  function buyGame(uint trackingId) public payable returns(bool){
    //should be "payable" as this requires ether to be transffered to the contract
    //should be "public" as anyone should be able to buy the game 
    //Verify the state of trackingId to be either "Available" using a modifier
    //return true or false if the rentGame attempt was successful
    //check if msg.value == games[trackingId].sellRate
    //at the end of this function the state of the Game should be set to "TransactionInProgress"
  }

  function shipGame(uint trackingId) public returns(bool){
    //To be called by the gameOwner to account for state update to "Shipped"
    //Only the gameOwner with same account address as games[trackingId].gameOnwer can execute this function
    //Require the games[trackingId].state to be "AvailableForRent" or "AvailableForBuy"
  } 

  function receiveGame(uint trackingId) public returns(bool){
    //To be called by the gameBuyer or gameRenter to account for state change to "Rented" or "Sold"
    //This function triggers payment to the gameOwner address if the transaction completed was "buy" instead of "rent"
    //This function makes the time to be loggged as the start of rental as timeRentalStart

  }

  function returnGame(uint trackingId) public returns(bool){
    //To be called buy the owner once the game has returned in good condition.
    //This function returns the deposit (Totaldeposit - rental fee) from the smart Contract to the renter
    //To trigger payment function to the gameOwner for the rental fee
  }

}
