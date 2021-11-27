// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;
pragma experimental ABIEncoderV2;


import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/// @title Decentralized Switch Game Rental Platform
/// @author Dabin Lee
/// @notice You can use this contract to register and rent Nintendo Switch games where deposit is held by the smart contract
contract DeSwitch {

  AggregatorV3Interface internal priceFeed;

  constructor() {
    priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
}

  
  // constructor() public {
  // }

  event LogForGameRegistered(uint gameId, uint registerId, address gameOwnerAddress, uint rentalRate, uint depositRequired);
  event LogForGameRentalRequested(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogForGameShippedToRenter(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogForGameReceivedByRenter(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogForGameShippedToOwner(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogForGameReceivedByOwner(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
  event LogForPendingBalanceIncrease(address ownerAddress, uint increaseValue, uint newBalance);
  event LogForConfirmedBalanceIncrease(address ownerAddress, uint increaseValue, uint newBalance);
  enum gameState {
    Invalid,
    Available,
    Reserved,
    ShippedToRenter,
    Rented,
    ShippedToOwner,
    RentalCompleted
  }

  struct Game{
    /// @param gameid is unique game ID assiged by Nintendo upon release of a game Title
    /// @param gregisterId is a unique reference number assigned during game registration
    /// @param rentalRate is rental rate in wei, charged per day
    /// @param depositRequired is the deposit required in wei, to be used to offset rental charges upon successful completion of rental
    /// @param gameOwner is the payable wallet address of the game owner where the rental charges will be transferred to
    /// @param state is an enum gameState which describes the state of a unqiue game such as "Available" or "Rented"
    /// @param timeRentalStart is a uint value which logs down when the rental was started to calculate the rental charges upon completion of rental
    /// @param gameRenter is the payable wallet address of the game renter where the deposit minus rental charges will be transferred to
    uint gameid;
    uint gregisterId;
    uint rentalRate;
    uint depositRequired;
    address payable gameOwner;
    gameState state;
    uint timeRentalStart;
    address payable gameRenter;
  }

  
  mapping (uint => Game) public games;
  // mapping (uint => address) public registerIdList;
  mapping (address => uint) public pendingBalances;
  mapping (address => uint) public confirmedBalances;

  // mapping (uint => Game) public games;

  /// @notice registerId is a reference counter which starts at 0 and gets added everytime there is a successful registeration of game for rental
  uint registerId = 0 ;


  
  
  /// @notice notGameOwner modifier requires the function to be by a person other than the game owner. (Example - to prevent game owner from renting his/her own game by mistake)
  modifier notGameOwner(uint _trackingId) {
    require(games[_trackingId].gameOwner != msg.sender, "Only non-owners can perform this action");
    _;
  }

  /// @notice isGameOwner modifier validates if the function is being called by the game owner. (Example - calling functions such as "shipGame")
  modifier isGameOwner(uint _trackingId) {
    require(games[_trackingId].gameOwner == msg.sender, "Only game owners can perform this action");
    _;
  }

  /// @notice isGameRenter modifier validates if the function is being called by the game renter. (Example - calling functions such as "gameReceived")
  modifier isGameRenter(uint _trackingId) {
    require(games[_trackingId].gameRenter == msg.sender, "Only game renters can perform this action");
    _;
  }

  /// @notice isAvailableGame modifier validates if the game with tracking ID of _trackingId has state set to "Available"
  modifier isAvailableGame(uint _trackingId){
    require(games[_trackingId].state == gameState.Available, "This action can only be done to a game with 'Available' status");
    _;
  }

  /// @notice isShippedToRenterGame modifier validates if the game with tracking ID of _trackingId has state set to "shippedToRenter"
  modifier isShippedToRenterGame(uint _trackingId){
    require(games[_trackingId].state == gameState.ShippedToRenter, "This action can only be done to a game in 'ShippedToRenter' status");
    _;
  }
  
  /// @notice isReservedGame modifier validates if the game with the tracking ID of _trackingId has state set to "Reserved"
  modifier isReservedGame(uint _trackingId){
    require(games[_trackingId].state == gameState.Reserved, "This action can only be done to a game in 'Reserved' status");
    _;
  }

  /// @notice isRentedGame modifer validates if the game with the tracking ID of _trackignId has state set to "Rented"
  modifier isRentedGame(uint _trackingId){
    require(games[_trackingId].state == gameState.Rented,"This action can only be done to a game in 'Rented' status");
    _;
  }

  /// @notice isShippedToOwnerGame modifer validates if the game with the tracking ID of _trackingId has state set to "ShippedToOwner"
  modifier isShippedToOwnerGame(uint _trackingId){
    require(games[_trackingId].state == gameState.ShippedToOwner, "This action can only be done to game in 'ShippedToOwner' status");
    _;
  }

  /// @notice queryGameCount is a publi view function which returns current value of registerId, which equals the # of registered games in the smart contract
  function queryGameCount() public view returns(uint){
    return (registerId);
  }

  function getLatestPrice() public view returns (int) {
    (
        uint80 roundID, 
        int price,
        uint startedAt,
        uint timeStamp,
        uint80 answeredInRound
    ) = priceFeed.latestRoundData();
    return price;
}
  
  /// @notice registerGame
  /// @param _gameId takes in the game registration ID according to http://nswdb.com/
  /// @param _rentalRate takes in the rental charges per day in wei
  /// @param _depositRequired takes in the deposit charge for the whole game in wei
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
    games[registerId] = Game({
      gameid : _gameId,
      gregisterId : registerId,
      rentalRate : _rentalRate,
      depositRequired : _depositRequired,
      gameOwner : payable(msg.sender),
      state : gameState.Available,
      timeRentalStart : 0,
      gameRenter : payable(address(0))
    });

    //add to the mapping registerId -> Owner Address
    // registerIdList[registerId] = msg.sender;

    //Emits appropriate event to log the chagnes 
    emit LogForGameRegistered(_gameId, registerId, msg.sender, _rentalRate, _depositRequired);
    return (_gameId, registerId);
  }

  function queryGameStatusbyTI(uint _trackingId) public view returns(string memory){
    if (games[_trackingId].state == gameState.Invalid) return "Invalid";
    if (games[_trackingId].state == gameState.Available) return "Available";
    if (games[_trackingId].state == gameState.Reserved) return "Reserved";
    if (games[_trackingId].state == gameState.ShippedToRenter) return "ShippedToRenter";
    if (games[_trackingId].state == gameState.Rented) return "Rented";
    if (games[_trackingId].state == gameState.ShippedToOwner) return "ShippedToOwner";
    if (games[_trackingId].state == gameState.RentalCompleted) return "RentalCompleted";
    return "Invalid";
  }

  function queryBalance(address _address) public view returns(uint, uint){
    // require(msg.sender == _address);
    if (pendingBalances[_address] != 0 && confirmedBalances[_address] != 0){
      // return (pendingBalances[_address], confirmedBalances[_address]);
      return (1,1);
    }else{
      return (0,0);
    }
  }

  function queryGamePricebyTI(uint _trackingId) public view returns(uint, uint){
    //check if the game ID is valid
    return (games[_trackingId].rentalRate, games[_trackingId].depositRequired);
  }

  function rentGame(uint _trackingId) public payable notGameOwner(_trackingId) isAvailableGame(_trackingId) returns(string memory) {
    //should be "payable" as this requires ether to be transffered to the contract
    //should be "public" as anyone should be able to rent the game 
    //Verify the state of trackingId to be "Available" using a modifier
    //return true or false if the rentGame attempt was successful
    //check if msg.value == games[trackingId].rentalRate
    //at the end of this function the state of the Game should be set to "TransactionInProgress"
    
    games[_trackingId].state = gameState.Reserved;
    games[_trackingId].gameRenter = payable(msg.sender);
    // games[registerIdList[_trackignId]]

    //Emit event
    // event LogForGameRentalRequested(uint gameId, uint registerId, address gameRenter, address gameOwnerAddress);
    emit LogForGameRentalRequested(games[_trackingId].gameid, games[_trackingId].gregisterId, games[_trackingId].gameRenter, games[_trackingId].gameOwner);
    
    pendingBalances[msg.sender] += msg.value;
    emit LogForPendingBalanceIncrease(msg.sender, msg.value, pendingBalances[msg.sender]);
    return "successfully rented";
  }



  function shipGame(uint _trackingId) public isGameOwner(_trackingId) isReservedGame(_trackingId) returns(string memory){
    //To be called by the gameOwner to account for state update to "Shipped"
    //Only the gameOwner with same account address as games[trackingId].gameOnwer can execute this function
    //Require the games[trackingId].state to be "AvailableForRent" or "AvailableForBuy"
    games[_trackingId].state = gameState.ShippedToRenter;
    emit LogForGameShippedToRenter(games[_trackingId].gameid, games[_trackingId].gregisterId, games[_trackingId].gameRenter, games[_trackingId].gameOwner);
    return "successfully shipped reserved game!";

  } 

  function receiveGameRenter(uint _trackingId) public isGameRenter(_trackingId) isShippedToRenterGame(_trackingId) returns(string memory){
    //To be called by the gameBuyer or gameRenter to account for state change to "Rented" or "Sold"
    //This function triggers payment to the gameOwner address if the transaction completed was "buy" instead of "rent"
    //This function makes the time to be loggged as the start of rental as timeRentalStart
    games[_trackingId].state = gameState.Rented;
    emit LogForGameReceivedByRenter(games[_trackingId].gameid, games[_trackingId].gregisterId, games[_trackingId].gameRenter, games[_trackingId].gameOwner);
    return "successfully received the rented game!";
  }

  function returnGame(uint _trackingId) public isGameRenter(_trackingId) isRentedGame(_trackingId) returns(string memory){
    //To be called buy the owner once the game has returned in good condition.
    //This function returns the deposit (Totaldeposit - rental fee) from the smart Contract to the renter
    //To trigger payment function to the gameOwner for the rental fee
    games[_trackingId].state = gameState.ShippedToOwner;
    emit LogForGameShippedToOwner(games[_trackingId].gameid, games[_trackingId].gregisterId, games[_trackingId].gameRenter, games[_trackingId].gameOwner);
    return "successfully shipped the rented game back to owner!";
  }

  function receiveGameOwner(uint _trackingId) public isGameOwner(_trackingId) isShippedToOwnerGame(_trackingId) returns(string memory){
    //To be called by the gameOwner to account for state change when the game is returned by the renter.
    //This function triggers payment to the gameOwner address if the transaction completed was "buy" instead of "rent"
    //This function makes the time to be loggged as the start of rental as timeRentalStart
    games[_trackingId].state = gameState.RentalCompleted;
    emit LogForGameReceivedByOwner(games[_trackingId].gameid, games[_trackingId].gregisterId, games[_trackingId].gameRenter, games[_trackingId].gameOwner);
    return "The owner successfully received the game. Rental is complete.";
  }

  

}
