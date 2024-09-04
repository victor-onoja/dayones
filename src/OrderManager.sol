// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.26;

import {IOrderManager} from "./IOrderManager.sol";
import {DayOnesToken} from "./DayOnesToken.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {Haversine} from "./Haversine.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title The main contract thet handles transactions
/// @author Mfon Stephen Nwa
contract OrderManager is IOrderManager {
    using SafeERC20 for IERC20;

    uint256 private productId;
    mapping(uint256 => Product) public products;
    uint256[] public productIds;

    uint256 private orderId;
    mapping(uint256 => Order) public orders;
    uint256[] public orderIds;

    uint256 private advertId;
    mapping(uint256 => Advert) public advertisements;
    uint256[] public advertIds;

    mapping(address => uint256) public advertsPaid;
    address public advertJury;
    mapping(address => bool) public registeredAdvertReciepient;

    mapping(address => bool) public verifiedusers;

    uint256 public constant CANCELTIMEOUT = 1 days;
    uint256 public constant EXPECTEDTIMEPERKM = 12 minutes;

    uint256 private deliveryFeePerKM;

    uint256 private totalAdverts;
    uint256 private totalAdvertSubscribers;

    IERC20 private token;

    constructor(address _advertJury) {
        token = IERC20(address(new DayOnesToken()));
        deliveryFeePerKM = 400;
        advertJury = _advertJury;
    }

    // View functions

    /// @inheritdoc	IOrderManager
    function getProduct(uint256 id) external view returns (Product memory) {
        return products[id];
    }

    function getBuyableProducts(address user) external view returns (Product[] memory) {
        uint256 productCount;
        Product[] memory _products = new Product[](productIds.length);
        for (uint256 i = 0; i < productIds.length; i++) {
            Product memory product = products[productIds[i]];
            if (product.vendor != user) {
                _products[productCount] = product;
                productCount += 1;
            }
        }
        return _products;
    }

    function getListedProducts(address user) external view returns (Product[] memory) {
        uint256 productCount;
        Product[] memory _products = new Product[](productIds.length);
        for (uint256 i = 0; i < productIds.length; i++) {
            Product memory product = products[productIds[i]];
            if (product.vendor == user) {
                _products[productCount] = product;
                productCount += 1;
            }
        }
        return _products;
    }

    function getBoughtOrders(address user) external view returns (Order[] memory) {
        uint256 orderCount = 0;
        Order[] memory _orders = new Order[](orderIds.length);
        for (uint256 i = 0; i < orderIds.length; i++) {
            Order memory order = orders[orderIds[i]];
            if (order.buyer == user) {
                _orders[orderCount] = order;
                orderCount += 1;
            }
        }
        return _orders;
    }

    function getOrdersFromVendor(address user) external view returns (Order[] memory) {
        uint256 orderCount = 0;
        Order[] memory _orders = new Order[](orderIds.length);
        for (uint256 i = 0; i < orderIds.length; i++) {
            Order memory order = orders[orderIds[i]];
            if (order.product.vendor == user) {
                _orders[orderCount] = order;
                orderCount += 1;
            }
        }
        return _orders;
    }

    function getOrdersToDeliver(address user) external view returns (Order[] memory) {
        uint256 orderCount = 0;
        Order[] memory _orders = new Order[](orderIds.length);
        for (uint256 i = 0; i < orderIds.length; i++) {
            Order memory order = orders[orderIds[i]];
            if (order.carrier == user) {
                _orders[orderCount] = order;
                orderCount += 1;
            }
        }
        return _orders;
    }

    function getAdvertsCreated(address user) external view returns (Advert[] memory) {
        uint256 advertCount = 0;
        Advert[] memory _adverts = new Advert[](advertIds.length);
        for (uint256 i = 0; i < advertIds.length; i++) {
            Advert memory advert = advertisements[advertIds[i]];
            if (advert.creator == user) {
                _adverts[advertCount] = advert;
                advertCount += 1;
            }
        }
        return _adverts;
    }

    function getAdvertsFeed(address user) external view returns (Advert[] memory) {
        uint256 advertCount = 0;
        Advert[] memory _adverts = new Advert[](advertIds.length);
        for (uint256 i = 0; i < advertIds.length; i++) {
            Advert memory advert = advertisements[advertIds[i]];
            if (advert.creator != user && advert.totalImpressions > 0) {
                _adverts[advertCount] = advert;
                advertCount += 1;
            }
        }
        return _adverts;
    }

    function getAdvertClaimable(address user) public view returns (uint256) {
        uint256 _advertsPaid = advertsPaid[user];
        if (totalAdverts > _advertsPaid) {
            return totalAdverts - _advertsPaid;
        } else {
            return 0;
        }
    }

    function isVerified(address user) external view returns (bool) {
        return verifiedusers[user];
    }

    function verifyUser(address user) external {
        require(user == advertJury, "only jury can call");
        verifiedusers[user] = true;
    }

    function quoteOrders(OrderRequest[] memory _orders, int256 lat, int256 long)
        public
        view
        returns (uint256 totalamount, uint256 totalDelivery, uint256 distance)
    {
        for (uint256 i = 0; i < _orders.length; i++) {
            OrderRequest memory orderRequest = _orders[i];
            Product memory product = products[orderRequest.id];

            require(orderRequest.quantity > 0, "order quantity must be greater than 0");
            require(product.vendor != address(0), "invalid product");
            totalamount += product.price * product.quantity;
            distance = calculateDistanceBetweenCordinates(lat, long, product.lat, product.long);
            totalDelivery += calculateDeliveryFee(distance, product.quantity);
        }
    }

    function listProduct(ProductRequest memory product) external {
        // ProductRequest memory product = product[i];
        require(product.price >= 1e18, "price too low");
        require(product.quantity > 0, "quantity too low");
        Product memory newProduct = Product({
            vendor: msg.sender,
            name: product.name,
            price: product.price,
            lat: product.lat,
            long: product.long,
            quantity: product.quantity,
            productURI: product.productURI
        });
        products[productId] = newProduct;
        productIds.push(productId);
        productId++;
    }

    function unlistProduct(uint256 id) external {
        // must be the person that listed it
        Product memory product = products[id];
        require(product.vendor == msg.sender, "only vendor can unlist product");
        removeProduct(id);
        delete products[id];
    }

    function updateProduct(uint256 id, ProductRequest memory _product) external {
        // must be the person that listed it
        // Product memory product = products[id];
        Product memory product = products[id];
        require(product.vendor == msg.sender, "only vendor can update product");
        Product memory tempProduct = Product({
            vendor: msg.sender,
            name: _product.name,
            price: _product.price,
            lat: _product.lat,
            long: _product.long,
            quantity: _product.quantity,
            productURI: _product.productURI
        });
        products[id] = tempProduct;
    }

    function assignCarrier(uint256 id, address carrier) external {
        // must be the vendor
        Order storage order = orders[id];
        require(order.product.vendor == msg.sender, "only vendor can assign carrier");
        order.carrier = carrier;
    }

    function buyProducts(OrderRequest memory _order, int256 lat, int256 long) external {
        // cannot be a vendor
        Product memory product = products[_order.id];
        require(product.vendor != msg.sender, "cannot buy your own product");
        require(product.quantity > _order.quantity, "product sold out");

        OrderRequest[] memory requests = new OrderRequest[](1);
        requests[0] = _order;
        (uint256 amount, uint256 delivery, uint256 distance) = quoteOrders(requests, lat, long);
        uint256 total = amount + delivery;
        token.safeTransferFrom(msg.sender, address(this), total);
        Order memory order = Order({
            product: product,
            status: OrderStatus.Bought,
            carrier: address(0),
            buyer: msg.sender,
            quantity: _order.quantity,
            deliveryFee: delivery,
            price: amount,
            timestamp: block.timestamp,
            deliveryTimestamp: block.timestamp + (distance * EXPECTEDTIMEPERKM),
            carrierDelivered: false,
            buyerRecieved: false
        });
        product.quantity -= 1;
        orders[orderId] = order;
        orderIds.push(orderId);
        orderId += 1;
        // assign all the state accordingly
    }

    function cancelOrder(uint256 id) external {
        // must have bought the product
        // must not be in transit already
        Order memory order = orders[id];
        bool refundable = false;
        require(
            msg.sender == order.buyer || msg.sender == order.product.vendor,
            "only the buyer or vendor can cancel an order"
        );

        if (order.status == OrderStatus.Bought && (order.timestamp + CANCELTIMEOUT > block.timestamp)) {
            refundable = true;
        }
        if (order.status == OrderStatus.InTransit && order.deliveryTimestamp < block.timestamp) {
            refundable = true;
        }
        if (msg.sender == order.product.vendor) {
            refundable = true;
        }
        if (refundable) {
            order.status = OrderStatus.Cancelled;
            // refund the user
            token.safeTransfer(order.buyer, order.price);
        }
        removeOrder(id);
    }

    function startDelivery(uint256 id) external {
        // must be the carrier for the product
        Order storage order = orders[id];
        require(msg.sender == order.carrier);
        require(order.status == OrderStatus.Bought, "can only start delivery for newly bought products");
        order.status = OrderStatus.InTransit;
    }

    function markDelivery(uint256 id) external {
        // can either be the buyer or the carrier
        // must be called by both of them

        Order memory order = orders[id];
        require(msg.sender == order.carrier || msg.sender == order.buyer, "only carrier and buyer can mark delivered");
        require(order.status == OrderStatus.InTransit, "can only mark delivered when in transit");
        if (msg.sender == order.carrier) {
            order.carrierDelivered = true;
        } else if (msg.sender == order.buyer) {
            order.buyerRecieved = true;
        }

        if (order.carrierDelivered && order.buyerRecieved) {
            // settle the vendor
            token.safeTransfer(order.product.vendor, order.price);
            // settle the carrier
            token.safeTransfer(order.carrier, order.deliveryFee);

            order.status = OrderStatus.Delivered;
        }
        orders[id] = order;

        removeOrder(id);
    }

    function createAdvertisement(uint256 amountPerView, uint256 totalImpressions, uint256 _productId) external {
        Product memory product = products[_productId];
        // advert must not already be on that product
        require(msg.sender == product.vendor, "only vendor can create advert");
        require(product.quantity > 0, "product not available");
        totalAdverts += amountPerView;
        advertisements[_productId] = Advert({
            creator: msg.sender,
            amountPerView: amountPerView,
            totalImpressions: totalImpressions,
            productId: _productId
        });
        advertIds.push(advertId);
        advertId += 1;
    }

    function subscribeToAdverts() external {
        require(!registeredAdvertReciepient[msg.sender], "already subscribed");
        advertsPaid[msg.sender] = totalAdverts;
        registeredAdvertReciepient[msg.sender] = true;
        totalAdvertSubscribers += 1;
    }

    function unSubscribeToAdverts() external {
        require(registeredAdvertReciepient[msg.sender], "not subscribed");
        // pay user all arreas
        registeredAdvertReciepient[msg.sender] = false;
        totalAdvertSubscribers -= 1;
    }

    function markAdvertViewed(uint256 _productId, address) external {
        require(msg.sender == advertJury, "only advertJury can mark advert viewed");
        Advert storage advert = advertisements[_productId];
        advert.totalImpressions -= 1;
    }

    function claimAdvertRevenue() external {
        require(registeredAdvertReciepient[msg.sender], "not subscribed");
        uint256 value = getAdvertClaimable(msg.sender);
        advertsPaid[msg.sender] = totalAdverts;
        token.safeTransfer(msg.sender, value);
    }

    // External functions

    // Private functions

    function calculateDistanceBetweenCordinates(int256 lat1, int256 lon1, int256 lat2, int256 lon2)
        private
        pure
        returns (uint256)
    {
        return uint256(Haversine.haversine(lat1, lat2, lon1, lon2)) / 1 ether;
    }

    function calculateDeliveryFee(uint256 distance, uint256 quantity) private view returns (uint256) {
        uint256 unitDelivery = deliveryFeePerKM * distance;
        uint256 fee = unitDelivery;
        fee += (unitDelivery * quantity * 2 / 1000);
        return fee;
    }

    function removeOrder(uint256 id) private {
        uint256 index;
        for (uint256 i = 0; i < orderIds.length; i++) {
            if (orderIds[i] == id) {
                index = i;
                break;
            }
        }
        orderIds[index] = orderIds[orderIds.length];
        orderIds.pop();
    }

    function removeProduct(uint256 id) private {
        uint256 index;
        for (uint256 i = 0; i < productIds.length; i++) {
            if (productIds[i] == id) {
                index = i;
                break;
            }
        }
        productIds[index] = productIds[productIds.length];
        productIds.pop();
    }

    function removeAdvert(uint256 id) private {
        uint256 index;
        for (uint256 i = 0; i < advertIds.length; i++) {
            if (advertIds[i] == id) {
                index = i;
                break;
            }
        }
        advertIds[index] = advertIds[advertIds.length];
        advertIds.pop();
    }
}
