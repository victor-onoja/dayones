// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DayOnesToken is ERC20 {
    constructor() ERC20("DayOnesToken", "DAY1") {}
}
