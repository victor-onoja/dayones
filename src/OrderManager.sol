// SPDX-License-Identifier: UNLICENCED

pragma solidity 0.8.26;

import {IOrderNft1155} from "./IOrderNft1155.sol";
import {DayOnesToken} from "./DayOnesToken.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract OrderManager is IOrderNft1155 {
    using SafeERC20 for DayOnesToken;

    /// @notice Explain to an end user what this does
    /// @dev Explain to a developer any extra details
    /// @return Documents the return variables of a contract’s function state variable
    /// @inheritdoc	Copies all missing tags from the base function (must be followed by the contract name)
    mapping(uint256 => Product) public products;

    /// @notice Explain to an end user what this does
    /// @dev Explain to a developer any extra details
    /// @return Documents the return variables of a contract’s function state variable
    /// @inheritdoc	Copies all missing tags from the base function (must be followed by the contract name)
    mapping(uint256 => Order) public orders;

    /// @notice Explain to an end user what this does
    /// @dev Explain to a developer any extra details
    /// @return Documents the return variables of a contract’s function state variable
    /// @inheritdoc	Copies all missing tags from the base function (must be followed by the contract name)
    mapping(address => uint256[]) public ordersByAccount;

    mapping(address => uint256) public advertReciepients;

    mapping(address => bool) public registeredAdvertReciepient;

    uint256 private productId;
    uint256 private orderId;
    uint256 private advertsPaid;


    uint256 public constant CANCELTIMEOUT = 1 days;
    uint256[] private productIds;
    DayOnesToken private token;
    uint256 private deliveryFeePerKM;
    uint256 private expectedTimePerKM;

    constructor() {
        token = new DayOnesToken();
        deliveryFeePerKM = 0;
        expectedTimePerKM = 0;
    }

    // View functions

    /// @inheritdoc	IOrderNft1155
    function getProduct(id) external view returns (Product memory) {
        return products[id];
    }

    function getProducts() external view returns (uint256[] memory ids) {
        ids = productIds;
    }

    function getOrdersById(uint256[] memory id) public view returns (Order[] memory) {
        Order[] memory _orders = new Order[](id.length);
        for (uint256 i = 0; i < id.length; i++) {
            _orders[i] = orders[id[i]];
        }
        return _orders;
    }

    function getOrdersByAccount(address account) public view returns (Order[] memory) {
        uint256[] memory _ids = ordersByAccount[account];
        return getOrdersById(_ids);
    }

    function quoteOrders(OrderRequest[] memory _orders, uint256 lat, uint256 long)
        public
        view
        returns (uint256 totalamount, uint256 totalDelivery, uint256 distance)
    {
        for (uint256 i = 0; i < _orders.length; i++) {
            OrderRequest memory orderRequest = _orders[i];
            Product memory product = products[orderRequest.id];

            require(product.vendor != address(0), "invalid product");
            totalamount += product.price * product.quantity;
            distance = calculateDistanceBetweenCordinates(lat, long, product.lat, product.long);
            totalDelivery += calculateDeliveryFee(distance, product.quantity);
        }
    }

    function listProduct(ProductRequest memory product) external {
        ProductRequest memory product = product[i];
        require(product.price >= 1e18, "price too low");
        require(product.quantity > 0, "quantity too low");
        // assert the lat and long
        Product memory newProduct = Product{
            vendor: msg.sender,
            name: product.name,
            price: product.price,
            lat: product.lat,
            long: product.long,
            availableQuantity: product.quantity,
            productURI: product.productURI
        };
        products[productId] = newProduct;
        productIds.push(productId);
        productId++;
    }

    function unlistProduct(uint256 memory id) external {
        // must be the person that listed it
        Product memory product = products[id];
        require(product.vendor == msg.sender, "only vendor can unlist product");
        productIds[id] = productIds[productId];
        productIds.pop();
    }

    function updateProduct(uint256 memory id, ProductRequest memory product) external {
        // must be the person that listed it
        Product memory product = products[id];
        require(product.vendor == msg.sender, "only vendor can update product");
        Product memory tempProduct = new Product{
            vendor: msg.sender,
            name: product.name,
            price: product.price,
            lat: product.lat,
            long: product.long,
            quantity: product.quantity,
            productURI: product.productURI
        };
        products[id] = tempProduct;
    }

    function assignCarrier(uint256 memory id, address memory carrier) external {
        // must be the vendor
        Order memory order = orders[id];
        require(order.product.vendor == msg.sender, "only vendor can assign carrier");
        order.product.carrier = carrier;
    }

    function buyProducts(OrderRequest memory order, uint256 lat, uint256 long) external {
        // cannot be a vendor
        Product memory product = products[order.id];
        require(product.vendor != msg.sender, "cannot buy your own product");
        require(product.quantity > order.quantity, "product sold out");

        OrderRequest[] memory requests = new OrderRequest[](1);
        requests[0] = order;
        (uint256 amount, uint256 delivery, uint256 distance) = quoteOrders(requests, order.lat, order.long);
        uint256 fee = calculateFee(amount);
        uint256 total = amount + delivery + fee;
        DayOnesToken.safeTransferFrom(msg.sender, total);
        Order memory order = new Order{
            product: product,
            status: OrderStatus(Bought),
            carrier: address(0),
            buyer: msg.sender,
            quantity: order.quantity,
            deliveryFee: delivery,
            price: amount,
            timestamp: block.timestamp,
            deliveryTimestamp: block.timestamp + (distance * expectedTimePerKM)
            carrierDelivered: false;
            buyerRecieved: false
        };
        product.quantity -= 1;
        ordersByAccount[msg.sender].append(orderId);
        orders[orderId] = order;
        orderId += 1;
    }

    function cancelOrder(uint256 memory id) external {
        // must have bought the product
        // must not be in transit already
        Order memory order = orders[id];
        require(msg.sender == order.buyer, "only the buyer can cancel an order");
        require(
            order.status == OrderStatus(Bought) && order.timestamp + CANCELTIMEOUT > block.timestamp,
            "can only cancel order if it bought and delivery has not started in a day"
        );
        order.status = OrderStatus(Cancelled);
        
        // refund the user
    }

    function startDelivery(uint256 memory id) external {
        // must be the carrier for the product
        Order memory order = orders[id];
        require(msg.sender == order.carrier);

    }

    function markDelivery(uint256 memory id) external {
        // can either be the buyer or the carrier
        // must be called by both of them

        Order memory order = orders[id];
        require(msg.sender == order.carrier || msg.sender == order.buyer, "only carrier and buyer can mark delivered");
        if (msg.sender = order.carrier) {

        } else if(msg.sender == order.buyer) {

        }
        // if both have marked delivered set the order status as delivered
        // settle the vendor and the carrier
    }

    function createAdvertisement(uint256 amountPerView, uint256 totalImpressions) external {

    }

    function subscribeToAdverts() external {
        // user must not already be subscribed
        // store msg.sender as a target for adverts
    }

    function unSubscribeToAdverts() external {
        // user must be subscribed
        // pay user all arreas
        // unsubscribe the user
    }

    // External functions

    // Private functions

    function calculateDistanceBetweenCordinates(uint256 lat1, uint256 long1, uint256 lat2, uint256 long2)
        private
        returns (uint256)
    {}

    function calculateDeliveryFee(uint256 distance, uint256 quantity) private returns (uint256) {}

    function calculateFee(uint256 totalPrice) private returns (uint256) {
        return totalPrice / 100;
    }
}
