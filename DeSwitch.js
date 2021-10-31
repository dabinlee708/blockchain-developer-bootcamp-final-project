
const ssAddress = '0x6c6F4B14Fe020801Ebb90a4C18581B852d7B809B'
const ssABI = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
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
    console.log('beep')
    await ethereum.request({ method:
    'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = "Here's connected account: "+ethereum.selectedAddress;
}


const ssSubmit = document.getElementById("ss-input-button");
ssSubmit.onclick = async () => {
    const ssValue = document.getElementById("ss-number").value;
    console.log(ssValue)

    var web3 = new Web3(window.ethereum)

    const simpleStorage = new web3.eth.Contract(ssABI, ssAddress)

    simpleStorage.setProvider(window.ethereum)

    await simpleStorage.methods.store(ssValue).send({from: ethereum.selectedAddress})
    
}