// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/OrderManager.sol";

contract Deploy is Script {
    function run() public {
        uint256 privateKey = vm.envUint("PV");
        vm.startBroadcast(privateKey);
        OrderManager orderManager = new OrderManager();
        orderManager.faucet(vm.addr(privateKey), 1000 ether);
        vm.stopBroadcast();
    }
}
