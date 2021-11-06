// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;



contract DeSwitch {
  event LogForGameRegistered(uint gameId, uint registerId, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalRequested(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogFOrGameRentalTxnCompleted(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  enum gameState {
    Invalid,
    Available,
    Reserved,
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
  mapping (uint => address) public registerIdList;
  uint registerId = 0 ;

  
    constructor() public {
  }

  function registerGame(uint _gameId, uint _rentalRate, uint _depositRequired) public returns(uint, uint){
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
    //Create a Game struct with the provided values and add it to the address -> game mapping
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

    //add to the mapping registerId -> Owner Address
    registerIdList[registerId] = msg.sender;

    //Emits appropriate event to log the chagnes 
    emit LogForGameRegistered(_gameId, registerId, msg.sender, _rentalRate, _depositRequired);
    return (1, registerId);
  }

  function queryGameStatus(uint _registerId) public view returns(string memory){
    // function queryGameStatus(uint _registerId) public view returns(gameState){
    // Game[] memory gameList = new Game[](registerId);
    // for (uint i = 0; i < registerId; i++){
    //   gameList[i] = games[registerIdList[0]];
    // }
    // return gameList;


    // Available,
    // Shipped,
    // Rented,
    // Sold
     // Loop through possible options
    if (games[registerIdList[_registerId]].state == gameState.Available) return "Available";
    if (games[registerIdList[_registerId]].state == gameState.Shipped) return "Shipped";
    if (games[registerIdList[_registerId]].state == gameState.Rented) return "Rented";
    if (games[registerIdList[_registerId]].state == gameState.Sold) return "Sold";
    // else return "Invalid";
    return "Invalid";
  }

  function rentGame(uint _trackingId) public payable returns(string memory) {
    //should be "payable" as this requires ether to be transffered to the contract
    //should be "public" as anyone should be able to rent the game 
    //Verify the state of trackingId to be "Available" using a modifier
    //return true or false if the rentGame attempt was successful
    //check if msg.value == games[trackingId].rentalRate
    //at the end of this function the state of the Game should be set to "TransactionInProgress"
    games[registerIdList[_trackingId]].gameRenter = msg.sender;
    games[registerIdList[_trackingId]].state = gameState.Reserved;
    // games[registerIdList[_trackignId]]

    //Emit event
    // event LogForGameRentalRequested(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
    emit LogForGameRentalRequested(games[registerIdList[_trackingId]].gameid, games[registerIdList[_trackingId]].gregisterId, games[registerIdList[_trackingId]].gameRenter, games[registerIdList[_trackingId]].gameOwner);
    return "successfully rented";
  }

  // function buyGame(uint trackingId) public payable returns(bool){
  //   //should be "payable" as this requires ether to be transffered to the contract
  //   //should be "public" as anyone should be able to buy the game 
  //   //Verify the state of trackingId to be either "Available" using a modifier
  //   //return true or false if the rentGame attempt was successful
  //   //check if msg.value == games[trackingId].sellRate
  //   //at the end of this function the state of the Game should be set to "TransactionInProgress"
  // }

  function shipGame(uint _trackingId) public returns(bool){
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
