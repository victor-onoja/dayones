// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;

interface IOrderManager {
    event ProductListed();
    event ProductUnlisted();
    event ProductUpdated();
    event CarrierAssigned();
    event ProductBought();
    event OrderCancelled();
    event DeliveryStarted();
    event DeliveryCompleted();
    event AdvertSubscribed();
    event AdvertUnsubscribed();
    event AdvertPaid();

    enum OrderStatus {
        None,
        Bought,
        InTransit,
        Cancelled,
        Delivered
    }

    struct Advert {
        address creator;
        uint256 productId;
        uint256 amountPerView;
        uint256 totalImpressions;
    }

    struct ProductRequest {
        string name;
        uint256 price;
        uint256 lat;
        uint256 long;
        uint256 quantity;
        string productURI;
    }

    struct Product {
        address vendor;
        string name;
        uint256 price;
        int256 lat;
        int256 long;
        uint256 quantity;
        string productURI;
    }

    struct OrderRequest {
        uint256 id;
        uint256 quantity;
    }

    struct Order {
        Product product;
        OrderStatus status;
        address carrier;
        address buyer;
        uint256 quantity;
        uint256 deliveryFee;
        uint256 price;
        uint256 timestamp;
        uint256 deliveryTimestamp;
        bool carrierDelivered;
        bool buyerRecieved;
    }

    function getProduct(uint256 id) external view returns (Product memory);

    function quoteOrders(OrderRequest[] memory orders, uint256 lat, uint256 long)
        external
        returns (uint256 totalamount, uint256 totalDelivery, uint256 distance);

    function listProduct(ProductRequest memory product) external;

    function unlistProduct(uint256 id) external;

    function updateProduct(uint256 id, ProductRequest memory _product) external;

    function assignCarrier(uint256 id, address carrier) external;

    function buyProducts(OrderRequest memory _order, uint256 lat, uint256 long) external;

    function cancelOrder(uint256 id) external;

    function startDelivery(uint256 id) external;

    function markDelivery(uint256 id) external;
}
