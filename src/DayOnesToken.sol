// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.26;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DayOnesToken is ERC20 {
    address public owner;

    constructor() ERC20("DayOnesToken", "DAY1") {
        owner = msg.sender;
        _mint(owner, 1000000 ether);
    }

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }
}
