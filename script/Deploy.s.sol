// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/OrderManager.sol";

contract Deploy is Script {
    function run() public {
        string memory seedPhrase = vm.readFile(".secret");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        vm.startBroadcast(privateKey);
        OrderManager orderManager = new OrderManager(vm.addr(privateKey));
        vm.stopBroadcast();
    }
}
