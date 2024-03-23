// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import "../src/FactorySBT.sol";

contract FactorySBTScript is Script {
    function run() public {
        vm.startBroadcast();
        new FactorySBT();
        vm.stopBroadcast();
    }
}
