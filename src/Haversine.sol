// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;

// import "forge-std/console.sol";
import "forge-std/Script.sol";
import "solidity-trigonometry/Trigonometry.sol";
import "solidity-trigonometry/InverseTrigonometry.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

library Haversine {
    int256 private constant EARTH_RADIUS = 6372;

    function absolute(int256 num) private pure returns (uint256) {
        if (num < 0) {
            return uint256(-num);
        } else {
            return uint256(num);
        }
    }

    function haversine(int256 lat1, int256 lat2, int256 lon1, int256 lon2) external pure returns (int256) {
        uint256 dlat = absolute(lat2 - lat1);
        uint256 dlon = absolute(lon2 - lon1);
        int256 sin_lat = Trigonometry.sin(dlat / 2);
        int256 sin_long = Trigonometry.sin(dlon / 2);
        int256 cos_lat1 = Trigonometry.cos(absolute(lat1));
        int256 cos_lat2 = Trigonometry.cos(absolute(lat2));
        int256 sin_lat2 = (sin_lat * sin_lat) / 1 ether;
        int256 sin_long2 = (sin_long * sin_long) / 1 ether;

        uint256 d = uint256(sin_lat2 + (cos_lat1 * cos_lat2 * sin_long2 / 1 ether / 1 ether));

        return EARTH_RADIUS * 2 * InverseTrigonometry.arcsin(int256(Math.sqrt(d) * 1000000000));
    }
}
