// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;


import {IOrderNft1155} from "./IOrderNft1155.sol";
import {DayOnesToken} from "./DayOnesToken.sol";

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract OrderManager is IOrderNft1155 {


    mapping(uint256 => Product) public products;

    mapping(uint256 => Order) public orders;

    mapping(address => uint256[]) public ordersByAccount;

    address[] private productIds;
    DayOnesToken private token;
    uint256 private deliveryFeePerKM;
    uint256 private ExpectedTimePerKM;

    constructor() {
        token = new DayOnesToken();
    }

    // View functions


    /// @inheritdoc	IOrderNft1155
    function getProduct(id) external view returns(Product memory) {
        return products[id];
    }

    function getProducts() external view returns (uint256[] memory ids) {
        ids = productIds;
    }

    function getOrdersById(uint256[] memory id) public view returns(Order[] memory) {
        Order[] memory _orders = new Order[](id.length);
        for(uint256 i = 0; i < id.length; i++) {
            _orders[i] = orders[id[i]];
        }
        return _orders;
    }

    function getOrdersByAccount(address account) public view returns(Order[] memory) {
        uint256[] memory _ids = ordersByAccount[account];
        return getOrdersById(_ids);
    }

    function quoteOrders(OrderRequest[] memory _orders, uint256 lat, uint256 long) public view returns (uint256 totalamount, uint256 totalDelivery) {
        for(uint256 i = 0; i < _orders.length; i++) {
            uint256 distance = calculateDistanceBetweenCordinates(lat, long, orders[i].product.lat, orders[i].product.long2);
        }
    }

    function listProducts(Product[] memory products) external {
    }

    function unlistProducts(uint256[] memory ids) external {
        // must be the person that listed it
    }

    function updateProducts(uint256[] memory ids, Product[] memory products) external {
        // must be the person that listed it
    }

    function assignCarriers(uint256[] memory ids, address[] memory carriers) external {
        // must be the vendor
    }

    function setDefaultCarrier(address carrier) external {

    }

    function buyProducts(Order[] memory orders, uint256 lat, uint256 long) external {
        // cannot be a vendor
    }

    function cancelBuys(uint256[] memory ids) external {
        // must have bought the product
        // must not be in transit already
    }

    function startDeliverys(uint256[] memory id) external {
        // must be the carrier for the product
    }

    function markDeliverys(uint256[] memory id) external {
        // can either be the buyer or the carrier
        // must be called by both of them
    }

    // External functions


    // Private functions

    function quoteOrder(OrderRequest memory _order, uint256 distanceInKM) private {

    }

    function calculateDistanceBetweenCordinates(uint256 lat1, uint256 long1, uint256 lat2, uint256 long2) private returns (uint256) {
        
    }


    function calculateDeliveryFee() private returns (uint256) {
        
    }

}