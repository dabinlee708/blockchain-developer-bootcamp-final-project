// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract DeSwitch {
  event LogForGameRegistered(uint gameid, uint trackingId, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalRequested(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalShipped(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddresss, uint rentalRate, uint depositRequired);
  event LogForGameRentalReceived(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalReturnRequested(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalReturnShipped(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogFOrGameRentalTxnCompleted(uint gameid, uint trackingId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  
  enum gameState {
    Available,
    Reserved,
    Shipped,
    Rented,
    NotAvailable
  }

  struct Game{
    uint gameid;
    uint trackingId;
    uint rentalRate;
    uint deposit;
    uint timeRentalStart;
    address payable gameOwner;
    address payable gamebuyer;
    address payable gameRenter;
    gameState state;
  }

  uint trackingId;
  mapping (uint => Game) public games;

  
    constructor() public {
      trackingId = 1;
  }

  function findGamesForRentByGameID(uint gameId) public view returns (uint){
    return games[gameId].trackingId;
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
    //at the end of this function the state of the Game should be set to "Reserved"
  }


  function shipGame(uint trackingId) public returns(bool){
    //To be called by the gameOwner to account for state update to "Shipped"
    //Only the gameOwner with same account address as games[trackingId].gameOnwer can execute this function
    //Require the games[trackingId].state to be "Available" or "Rented"
  } 

  function receiveGame(uint trackingId) public returns(bool){
    //To be called by the gameRenter to account for state change to "Rented"
    //This function triggers payment to the gameOwner address
    //This function makes the time to be loggged as the start of rental as timeRentalStart

  }

  function returnGame(uint trackingId) public returns(bool){
    //To be called buy the owner once the game has returned in good condition.
    //This function returns the deposit (Totaldeposit - rental fee) from the smart Contract to the renter
    //To trigger payment function to the gameOwner for the rental fee
  }

}
