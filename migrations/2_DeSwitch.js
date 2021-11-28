const Migrations = artifacts.require("DeSwitch");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};