// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/FactorySBT.sol";

contract DeployTokenViaFactory is Script {
    address factoryAddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;

    function run() external {
        vm.startBroadcast();

        FactorySBT factory = FactorySBT(factoryAddress);
        
        string memory contractName = "Test Event";
        string memory uri = "uri";
        uint256[] memory ids = new uint256[](2);
        ids[0] = 1;
        ids[1] = 2;
        string[] memory names = new string[](2);
        names[0] = "Ticket1";
        names[1] = "Ticket2";
        uint256[] memory fees = new uint256[](2);
        fees[0] = 100;
        fees[1] = 200;
        uint256[] memory maxSupplies = new uint256[](2);
        maxSupplies[0] = 1000;
        maxSupplies[1] = 2000;

        address tokenAddress = factory.deploySBT(contractName, uri, ids, names, fees, maxSupplies);

        vm.stopBroadcast();

        console.log("Deployed Soul Bound Token at:", tokenAddress);
    }
}
