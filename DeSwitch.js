
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
    "name": "LogFOrGameRentalTxnCompleted",
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
        "name": "_registerId",
        "type": "uint256"
      }
    ],
    "name": "queryGameStatus",
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
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "name": "trackingId",
        "type": "uint256"
      }
    ],
    "name": "receiveGame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "name": "trackingId",
        "type": "uint256"
      }
    ],
    "name": "returnGame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]



console.log("hello dapdeverlopers")
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
    // console.log('beep')
    await ethereum.request({ method:
    'eth_requestAccounts'})

    

    const mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = "Here's connected account: "+ethereum.selectedAddress;
}


const ssRegisterGame = document.getElementById("registerGame");
ssRegisterGame.onclick = async () => {
  const gameid = document.getElementById("queryGameRegisterId").value;
	const rentalRate = document.getElementById("rentalRate").value;
	const depositRate = document.getElementById("depositRate").value;

  console.log(gameid, rentalRate, depositRate);

  var web3 = new Web3(window.ethereum);

  const deSwitch = new web3.eth.Contract(ssABI, ssAddress);

  deSwitch.setProvider(window.ethereum);
  // const {0: successOrFailure, 1: trackingId}
  // const successOrFailure = document.getElementById("creationSuccess");
  // const createdTrackingId = document.getElementById("createdTrackingId");
  
  await deSwitch.methods.registerGame(gameid, rentalRate, depositRate).send({from: ethereum.selectedAddress}).on('receipt', function(receipt){
    // receipt example
    console.log(receipt);

    }
)

  
  // myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'}
// const {0: status, 1:trackingId} = result;
  // console.log(result);
  // console.log(result.registerId);
  // deSwitch.events.LogForGameRegistered(function(error, event){console.log(event)})
  // const result = await deSwitch.methods({from: accountAddress});
  // const {0: strValue, 1: boolValue, 2: intValue} = result;

  // console.log(strValue); // "data"
  // console.log(boolValue); // true
  // console.log(intValue); // 15
}

const ssQueryGame = document.getElementById("queryGame");
ssQueryGame.onclick = async () => {
  const registerId = document.getElementById("queryGameRegisterId").value;

  console.log(queryGameRegisterId)

  var web3 = new Web3(window.ethereum)

  const deSwitch = new web3.eth.Contract(ssABI, ssAddress)

  deSwitch.setProvider(window.ethereum)

  // console.log(await deSwitch.methods.queryGameStatus().send({from: ethereum.selectedAddress}))
  const gameStatus = document.getElementById("gameStatus");
  // const gameState = ['Available','Shipped' ,'Rented' ,'Sold'];
  // console.log(await deSwitch.methods.queryGameStatus().send({from: ethereum.selectedAddress}))
  deSwitch.methods.queryGameStatus(registerId).call((err, result) => {
    console.log(result);
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.innerHTML = result;

  } );
  // .then(console.log).then(function(error, response){
    // gameStatus.innerHTML = response;
    // console.log(typeof(response))

const ssRentGame = document.getElementById("rentGame");
ssRentGame.onclick = async ()=> {
  const rentGameId = document.getElementById("rentGameId").value;
  console.log("Rental Requested");
  var web3 = new Web3(window.ethereum)
  const deSwitch = new web3.eth.Contract(ssABI, ssAddress)
  // deSwitch.setProvider(window.ethereum)
  // deSwitch.methods.rentGame(rentGameId).call
  await deSwitch.methods.rentGame(rentGameId).send({from: ethereum.selectedAddress}).on('receipt', function(receipt){
  // await deSwitch.methods.rentGame(rentGameId).send({from: ethereum.selectedAddress}).call('receipt', function(receipt){
    // receipt example
    console.log(receipt);
    console.log("gammeId",receipt.events.LogForGameRentalRequested.returnValues.gameId);
    console.log("gameOwnerAddress",receipt.events.LogForGameRentalRequested.returnValues.gameOwnerAddress);
    console.log("gameRenter",receipt.events.LogForGameRentalRequested.returnValues.gameRenter);
    console.log("registerId",receipt.events.LogForGameRentalRequested.returnValues.registerId);
    // console.log(result); 

    //Fire a call query to fetch the result or use Events?
    const gameRentalResult = document.getElementById("rentalResult");
    gameRentalResult.innerHTML = ("successful. GameRenter "+ receipt.events.LogForGameRentalRequested.returnValues.gameRenter+ " GameOwner "+ receipt.events.LogForGameRentalRequested.returnValues.gameOwnerAddress +" with registerID of "+receipt.events.LogForGameRentalRequested.returnValues.registerId)
  }
  );



  
}
}

