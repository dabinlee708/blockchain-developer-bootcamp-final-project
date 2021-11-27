const HDWallet = require("truffle-hdwallet-provider");
require('dotenv').config()

module.exports = {
  networks: {
    localhost: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWallet(process.env.PrivateKey, process.env.INFURA_API_KEY),
      network_id: 3,       // Ropsten's id
      gas: 8000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "0.8.10", // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
