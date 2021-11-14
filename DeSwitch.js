
const ssAddress = '0x61B28a04c63961BfCdb2169967D45E94d0e4c2EB'
const ssABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "increaseValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      }
    ],
    "name": "LogForConfirmedBalanceIncrease",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameRenter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      }
    ],
    "name": "LogForGameReceivedByOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameRenter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      }
    ],
    "name": "LogForGameReceivedByRenter",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "rentalRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositRequired",
        "type": "uint256"
      }
    ],
    "name": "LogForGameRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameRenter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      }
    ],
    "name": "LogForGameRentalRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameRenter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      }
    ],
    "name": "LogForGameShippedToOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameRenter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gameOwnerAddress",
        "type": "address"
      }
    ],
    "name": "LogForGameShippedToRenter",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "increaseValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      }
    ],
    "name": "LogForPendingBalanceIncrease",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "confirmedBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "games",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "gameid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gregisterId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rentalRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "depositRequired",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "gameOwner",
        "type": "address"
      },
      {
        "internalType": "enum DeSwitch.gameState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "timeRentalStart",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "gameRenter",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "pendingBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "registerIdList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "queryGameCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gameId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rentalRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_depositRequired",
        "type": "uint256"
      }
    ],
    "name": "registerGame",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "queryGameStatusbyTI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "queryBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "queryGamePricebyTI",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "rentGame",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "shipGame",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "receiveGameRenter",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "returnGame",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_trackingId",
        "type": "uint256"
      }
    ],
    "name": "receiveGameOwner",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


// console.log("Java")
window.addEventListener('load',function(){
    if (typeof window.ethereum !== 'undefined'){
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "MetaMask detected"
    }
    else{
        console.log('MetaMask is not available')
        this.alert("Please install Meta")
        }
    }
)
const metamaskEnable = document.getElementById('mm-connect')
metamaskEnable.onclick = async () => {
    await ethereum.request({ method:
    'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = "Here's connected account: "+ethereum.selectedAddress;
}


//declare buttons that call JS that sends queries or transactions
const registerGame = document.getElementById("registerGame");
const queryGame = document.getElementById("queryGame");
const rentGame = document.getElementById("rentGame");
const shipGameToRenter = document.getElementById("shipGameToRenter");
const returnGameToOwner = document.getElementById("returnGameToOwner");
const receiveGameFromRenter = document.getElementById("receiveGameFromRenter");
const receiveGameFromOwner = document.getElementById("receiveGameFromOwner");
const currentGameCount = document.getElementById("currentRegisteredGameCount");
const queryBalance = document.getElementById("checkBalance");

//declare user input fields
const gameStatus = document.getElementById("updateText");

//updateReturnValues
const registerResult = document.getElementById("creationText");
const pendingBalanceValue = document.getElementById("pendingBalance");
const confirmedBalanceValue = document.getElementById("confirmedBalance");

var web3 = new Web3(window.ethereum);
const deSwitch = new web3.eth.Contract(ssABI, ssAddress);
deSwitch.setProvider(window.ethereum);
deSwitch.methods.queryGameCount().call((err, result) => {
  console.log(result);
  currentRegisteredGameCount.innerHTML = (
    "Currently, there are "+
    result+
    " games registered");
  });

queryBalance.onclick = async () => {
  // const queryAddress = document.getElementById
  console.log(ethereum.selectedAddress);
  deSwitch.methods.queryBalance(ethereum.selectedAddress).call((err, result)=> {
    console.log(result);
    pendingBalanceValue.innerHTML = (
      "Current pending balance is "
      // +result[0]
    );
    confirmedBalanceValue.innerHTML = (
      "Current confirmed balance is "
      // +result[1]
    );
  });
}


registerGame.onclick = async () => {
  const gameid = document.getElementById("queryGameRegisterId").value;
  const rentalRate = document.getElementById("rentalRate").value;
  const depositRate = document.getElementById("depositRate").value;
  console.log(gameid, rentalRate, depositRate);
 
  await deSwitch.methods.registerGame(gameid, rentalRate, depositRate).send({from: ethereum.selectedAddress}).on('receipt', function(receipt){
     
    registerResult.innerHTML = (
      "Registration was successful for game ID "+ 
      gameid + 
      " and the registration number is "+
      receipt.events.LogForGameRegistered.returnValues.registerId
      )
    // console.log(receipt.events.LogForGameRegistered.returnValues.registerId);
    }
  
)
  //After registering, update the current number of registered games to display current status to the user
  deSwitch.methods.queryGameCount().call((err, result) => {
  console.log(result);
  currentRegisteredGameCount.innerHTML = result;
  });
}

queryGame.onclick = async () => {
  const queryTrackingId = document.getElementById("trackingId").value;
  var tempStatus;
  var tempDeposit;
  var tempRental;

  deSwitch.methods.queryGameStatusbyTI(queryTrackingId).call((err, result) => {
    tempStatus = result;
  });

  deSwitch.methods.queryGamePricebyTI(queryTrackingId).call((err,result) =>{
    tempDeposit = result[1];
    tempRental = result[0];
    gameStatus.innerHTML = (
      "Queried game with tracking ID "+
      trackingId.value+
      " is "+
      tempStatus+
      ". Deposit is "+
      tempDeposit+
      " Rental Rate is "+
      tempRental);
  });

  
}

rentGame.onclick = async ()=> {
  const rentGameId = document.getElementById("trackingId").value;
  console.log("Rental Requested");
  var tempDeposit = 0;

  //Fetch deposit required to populate the transaction
  await deSwitch.methods.queryGamePricebyTI(rentGameId).call((err,result) =>{
    tempDeposit=JSON.parse(JSON.stringify(result[1]));
    console.log(err);
  });

  console.log(tempDeposit);
  console.log(typeof(tempDeposit));

  await deSwitch.methods.rentGame(rentGameId).send({
    from: ethereum.selectedAddress,
    value: tempDeposit
  }).on('receipt', function(receipt){
    const returnValues = receipt.events.LogForGameRentalRequested.returnValues;
    // console.log("gammeId",returnValues.gameId);
    // console.log("gameOwnerAddress",returnValues.gameOwnerAddress);
    // console.log("gameRenter",returnValues.gameRenter);
    // console.log("registerId",returnValues.registerId);
    gameStatus.innerHTML = (
      "successful. GameRenter "+ 
      returnValues.gameRenter+
      " GameOwner "+ 
      returnValues.gameOwnerAddress +
      " with registerID of "+
      returnValues.registerId)
  }
  ).on('error', console.error);;
  
};


shipGameToRenter.onclick = async ()=>{
  const shipGameId = document.getElementById("trackingId").value;
  console.log("Shipping confirmed");

  await deSwitch.methods.shipGame(shipGameId).send({
    from: ethereum.selectedAddress
  }).on('receipt', function(receipt){
    const returnValues = receipt.events.LogForGameShippedToRenter.returnValues;
    console.log(returnValues);
    gameStatus.innerHTML = (
      "successful. Game was shipped out to "+ 
      returnValues.gameRenter+ 
      "  from GameOwner "+ 
      returnValues.gameOwnerAddress +
      " with trackingID of "+
      returnValues.registerId)

  }
  ).on('error', console.error);
  
}

receiveGameFromOwner.onclick = async ()=>{
  const receiveGameId = document.getElementById("trackingId").value;
  console.log("Game received by Renter");

  await deSwitch.methods.receiveGameRenter(receiveGameId).send({
    from: ethereum.selectedAddress
  }).on('receipt', function(receipt){
    const returnValues = receipt.events.LogForGameReceivedByRenter.returnValues;
    console.log(returnValues);
    gameStatus.innerHTML = (
      "Game successfully received for tracking ID "+
      receiveGameId
    ).on('error', console.error);
  })
}

returnGameToOwner.onclick = async ()=>{
  const shipGameId = document.getElementById("trackingId").value;
  console.log("Game Shipped to Onwer");

  await deSwitch.methods.returnGame(shipGameId).send({
    from: ethereum.selectedAddress
  }).on('receipt', function(receipt){
    const returnValues = receipt.events.LogForGameShippedToOwner.returnValues;
    console.log(returnValues);
    gameStatus.innerHTML = (
      "Game with "+
      shipGameId+
      " is being shipped back to the onwer for tracking ID"
    ).on('error', console.error);
  })
}

receiveGameFromRenter.onclick = async ()=>{
  const receiveGameId = document.getElementById("trackingId").value;
  console.log("Game returned successfully to the onwer");

  await deSwitch.methods.receiveGameOwner(receiveGameId).send({
    from: ethereum.selectedAddress
  }).on('receipt', function(receipt){
    const returnValues = receipt.events.LogForGameReceivedByOwner.returnValues;

    console.log(returnValues);

    gameStatus.innerHTML = (
      "Game returned successfully to the onwer for tracking ID "+
      receiveGameId+
      " and the deposit of "+
      "deposit amount"+
      " will be returned to the renter at address "+
      "renterAddress"+
      " Total rental fee of "+
      "Rental Fee"+
      " was credited to owner wallet at "+
      " owner wallet address"
    ).on('error', console.error);
  })
}