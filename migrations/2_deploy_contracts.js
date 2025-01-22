const AddNumbers = artifacts.require("AddNumbers");

module.exports = function (deployer) {
    deployer.deploy(AddNumbers);
};
