// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract DeSwitch {
  event LogForGameRegistered(uint gameId, uint registerId, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalRequested(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogFOrGameRentalTxnCompleted(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  enum gameState {
    Available,
    Shipped,
    Rented,
    Sold
  }

  struct Game{
    uint gameid;
    uint gregisterId;
    uint rentalRate;
    uint depositRequired;
    address payable gameOwner;
    gameState state;
    uint timeRentalStart;
    address payable gameRenter;
  }

  
  mapping (address => Game) public games;
  uint registerId = 0 ;

  
    constructor() public {
  }

  function registerGame(uint _gameId, uint _rentalRate, uint _depositRequired) public returns(bool, uint){
    
    
    //should be a public function as anyone should be able to put their game for sale/rental
    //Users register games they own (Ex. Switch Games) as "Available"
    //GameID refers to gameId from http://nswdb.com/ to avoid confusion between different game titles
    //Require checks for validity of values submitted for required arguments
    //Set gameState as "Available"
    //Set gameOwner as msg.sender
    //Set gameBuyer and gameRenter will be empty and get updated once a buyer triggers the rentGame function
    //returns true/false if registeration was successful and a trackingId tagged to the registered game
    
    //Increase the registerId counter by 1 so that the next game gets registered with the next registerId.
    //Consider hashing/randomizing instead of incremental values, can consider sha256(msg.sender+registerID)
    registerId += 1;

    //Create a Game struct with the provided values
    games[msg.sender] = Game({
      gameid : _gameId,
      gregisterId : registerId,
      rentalRate : _rentalRate,
      depositRequired : _depositRequired,
      gameOwner : msg.sender,
      state : gameState.Available,
      timeRentalStart : 0,
      gameRenter : address(0)
    });
  
    //Emits appropriate event to log the chagnes 
    emit LogForGameRegistered(_gameId, registerId, msg.sender, _rentalRate, _depositRequired);

    return (true, registerId);
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
