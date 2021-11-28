// const { catchRevert } = require("./exceptionsHelpers.js");
var DeSwtich = artifacts.require("./DeSwitch.sol");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

contract("DeSwtich", function (accounts) {
  const [alice, bob, charles, david] = accounts;
  

  // Check if the games successfully registered would have "available" status while those not registered will have "Invalid" status
  it("Check games registered by Alice and Bob return Available status and unregistered tracking ID returns invalid status", async() => {
    
    // Fresh instance of DeSwitch Smart Contract. tracking ID will start from 1 for the first registered game
    instance = await DeSwtich.new();
    
    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Alice
    await instance.registerGame(
      1, //gameID 1
      100, //Rental fee of 100 Wei
      10000, //Deposit fee of 10000wei
      {from: alice} //from alice
      );
    
    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Bob
    await instance.registerGame(
      1, //gameID 1
      200, //Rental fee of 200 Wei
      20000, //Deposit fee of 20000wei
      {from: bob} //from bob
      );

    // As alice registered the game first, alice's registered game should have the tracking ID of 1 and should have "Available" status
    assert.equal(await instance.queryGameStatusbyTI(1), "Available", "Game registered by alice is Available");

    // As bob registered the after alice, bob's registered game should have the tracking ID of 2 and should have "Available" status
    assert.equal(await instance.queryGameStatusbyTI(2), "Available", "Game registered by bob is Available");
    
    // As no one registered game after bob, tracking ID 3 would be in "Invalid" status and will be assigned to the next game being registered
    assert.equal(await instance.queryGameStatusbyTI(3), "Invalid", "Game registered by no one is Invalid");
  });

  //Check if the games registered can be rented by the owner themselves. Error should be throwing from the modifier notGameOwner
  it("Check if the owner Alice and Bob can rent their own game", async() => {
    // Fresh instance of DeSwitch Smart Contract. tracking ID will start from 1 for the first registered game
    instance = await DeSwtich.new();

    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Alice
    await instance.registerGame(
      1, //gameID 1
      100, //Rental fee of 100 Wei
      10000, //Deposit fee of 10000wei
      {from: alice} //from alice
      );
    
    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Bob
    await instance.registerGame(
      1, //gameID 1
      200, //Rental fee of 200 Wei
      20000, //Deposit fee of 20000wei
      {from: bob} //from bob
      );

    //Check if the rentGame function revers with correct error message from notGameOwner modifier when alice tries to rent her own game
    await truffleAssert.reverts(

      //rentGame request for game registered by alice
      instance.rentGame(
        1, //tracking ID 1 is a game registered by Alice
        {from: alice}),//Request sent from alice to verify the revert & error

      //expected error
      "Only non-owners can perform this action"
    );

    //Check if the rentGame function revers with correct error message from notGameOwner modifier when bob tries to rent his own game
    await truffleAssert.reverts(

      //rentGame request for game registered by bob
      instance.rentGame(
        2, //tracking ID 2 is a game registered by Alice
        {from: bob}), //Request sent from alice to verify the revert & error

      //expected error
      "Only non-owners can perform this action"
    );
  });

  //Check if the games registered can be rented by the owner themselves. Error should be throwing from the modifier notGameOwner
  it("Check if the owner Alice and Bob can rent games which are in 'Invalid' status", async() => {
    // Fresh instance of DeSwitch Smart Contract. tracking ID will start from 1 for the first registered game
    instance = await DeSwtich.new();

    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Alice
    await instance.registerGame(
      1, //gameID 1
      100, //Rental fee of 100 Wei
      10000, //Deposit fee of 10000wei
      {from: alice} //from alice
      );
    
    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Bob
    await instance.registerGame(
      1, //gameID 1
      200, //Rental fee of 200 Wei
      20000, //Deposit fee of 20000wei
      {from: bob} //from bob
      );

    //Check if the rentGame function revers with correct error message from notGameOwner modifier when alice tries to rent her own game
    await truffleAssert.reverts(

      //rentGame request for game registered by alice
      instance.rentGame(
        1, //tracking ID 1 is a game registered by Alice
        {from: alice}),//Request sent from alice to verify the revert & error

      //expected error
      "Only non-owners can perform this action"
    );

    //Check if the rentGame function revers with correct error message from notGameOwner modifier when bob tries to rent his own game
    await truffleAssert.reverts(

      //rentGame request for game registered by bob
      instance.rentGame(
        2, //tracking ID 2 is a game registered by Alice
        {from: bob}), //Request sent from alice to verify the revert & error

      //expected error
      "Only non-owners can perform this action"
    );
  });



  it("Check if the owner Alice and Bob can rent a game that belongs to seomeone else", async() => {
    // Fresh instance of DeSwitch Smart Contract. tracking ID will start from 1 for the first registered game
    instance = await DeSwtich.new();
    
    //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Alice
    await instance.registerGame(
      1, //gameID 1
      100, //Rental fee of 100 Wei
      10000, //Deposit fee of 10000wei
      {from: alice} //from alice
      );

    await instance.rentGame(
      1, //trackingID 2 (belongs to bob)
      {from: bob}); //From alice
      assert.equal(
        1, //expected - gameID 1
        1, //expected - tracking ID 1
        bob,//expected - renter address bob
        alice //expected - owner address alice
      );
     } );


  it("Check if the owner Alice and renter Bob can complete a rental cycle", async() => {
  // Fresh instance of DeSwitch Smart Contract. tracking ID will start from 1 for the first registered game
  instance = await DeSwtich.new();
  
  //Register game with required parameters such as Game ID (game type), Rental Fee (in wei) and Deposit Fee (in wei) from Alice
  await instance.registerGame(
    1, //gameID 1
    100, //Rental fee of 100 Wei
    10000, //Deposit fee of 10000wei
    {from: alice} //from alice
    );

  await instance.rentGame(
    1, //trackingID 1 (Owned by alice, being rented to bob)
    {from: bob}); //From alice
    assert.equal(
      1, //expected - gameID 1
      1, //expected - tracking ID 1
      bob,//expected - renter address bob
      alice //expected - owner address alice
    );

  await instance.shipGame(
    1,//trackingID 1 (Owned by alice, being rented to bob and being shipped to bob)
    {from: alice});//Only alice can ship the game
  
    assert.equal(
      1,//gameID 1
      1,//tracking ID 1
      bob,//Renter's address
      alice//owner's address
    )

  //Check if receiveGameRenter can be done successfully, when sent from bob
  await instance.receiveGameRenter(
    1,//trackingID 1
    {from: bob});

  assert.equal(
    1,//gameID 1
    1,//tracking ID 1
    bob,//Renter's address
    alice//owner's address
  )

  //Check if returnGame can be done successfully, when sent from bob
  await instance.returnGame(
    1,//trackingID 1
    {from: bob});

  assert.equal(
    1,//gameID 1
    1,//tracking ID 1
    bob,//Renter's address
    alice//owner's address
  )

  //Check if receiveGameOwner can be done successfully, when sent from alice
  await instance.receiveGameOwner(
    1,//trackingID 1
    {from: alice});

  assert.equal(
    1,//gameID 1
    1,//tracking ID 1
    bob,//Renter's address
    alice//owner's address
  )}); 
})