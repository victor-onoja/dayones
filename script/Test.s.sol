// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.0;

import "forge-std/Script.sol";

import "forge-std/console.sol";
import "solidity-trigonometry/Trigonometry.sol";
import "solidity-trigonometry/InverseTrigonometry.sol";
import {Haversine} from "../src/Haversine.sol";

contract TestContract is Script {
    function run() public pure returns (int256) {
        return Haversine.haversine(
            0.8528847921310204 ether, -0.6094749961823392 ether, 0.043341761314775185 ether, -1.0117596704791114 ether
        );
    }
}
