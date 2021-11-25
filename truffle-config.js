module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    }
    // ,
    // development: {
    //   host: "172.21.192.1",
    //   port: 8656,
    //   network_id: "*" // Match any network id
    // }
  },
  compilers: {
    solc: {
      version: "^0.8.0 <0.9.0", // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  
  
};
