// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;

interface IOrderNft1155 {
    enum OrderStatus {
        None,
        Bought,
        InTransit,
        Cancelled,
        Delivered,
        Conflict
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
        uint256 lat;
        uint256 long;
        uint256 availableQuantity;
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

    function getProducts() external view returns (uint256[] memory);

    function quoteOrders(OrderRequest[] memory orders, uint256 lat, uint256 long)
        external
        view
        returns (uint256 totalamount, uint256 totalDelivery);

    function listProducts(Product[] memory products) external;

    function unlistProducts(uint256[] memory ids) external;

    function updateProducts(uint256[] memory ids, Product[] memory products) external;

    function assignCarriers(uint256[] memory ids, address[] memory carriers) external;

    function setDefaultCarrier(address carrier) external;

    function buyProducts(Order[] memory orders, uint256 lat, uint256 long) external;

    function cancelBuys(uint256[] memory ids) external;

    function startDeliverys(uint256[] memory id) external;

    function markDeliverys(uint256[] memory id) external;
}
