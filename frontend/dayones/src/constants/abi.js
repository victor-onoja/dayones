const DAY1_ABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "CANCELTIMEOUT",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "EXPECTEDTIMEPERKM",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "advertIds",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "advertJury",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "advertisements",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "creator", type: "address", internalType: "address" },
      { name: "productId", type: "uint256", internalType: "uint256" },
      {
        name: "amountPerView",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "totalImpressions",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "advertsPaid",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "assignCarrier",
    inputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "carrier", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "buyProducts",
    inputs: [
      {
        name: "_order",
        type: "tuple[]",
        internalType: "struct IOrderManager.OrderRequest[]",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "quantity", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "lat", type: "int256", internalType: "int256" },
      { name: "long", type: "int256", internalType: "int256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelOrder",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimAdvertRevenue",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAdvertisement",
    inputs: [
      {
        name: "amountPerView",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "totalImpressions",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_productId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "faucet",
    inputs: [
      { name: "reciever", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAdvertClaimable",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAdvertsCreated",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Advert[]",
        components: [
          { name: "creator", type: "address", internalType: "address" },
          {
            name: "productId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountPerView",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalImpressions",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAdvertsFeed",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Advert[]",
        components: [
          { name: "creator", type: "address", internalType: "address" },
          {
            name: "productId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountPerView",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalImpressions",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBoughtOrders",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Order[]",
        components: [
          {
            name: "product",
            type: "tuple",
            internalType: "struct IOrderManager.Product",
            components: [
              {
                name: "vendor",
                type: "address",
                internalType: "address",
              },
              { name: "name", type: "string", internalType: "string" },
              {
                name: "price",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "lat", type: "int256", internalType: "int256" },
              { name: "long", type: "int256", internalType: "int256" },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "productURI",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "status",
            type: "uint8",
            internalType: "enum IOrderManager.OrderStatus",
          },
          { name: "carrier", type: "address", internalType: "address" },
          { name: "buyer", type: "address", internalType: "address" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryFee",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "price", type: "uint256", internalType: "uint256" },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryTimestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "carrierDelivered",
            type: "bool",
            internalType: "bool",
          },
          { name: "buyerRecieved", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBuyableProducts",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Product[]",
        components: [
          { name: "vendor", type: "address", internalType: "address" },
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getListedProducts",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Product[]",
        components: [
          { name: "vendor", type: "address", internalType: "address" },
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOrdersFromVendor",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Order[]",
        components: [
          {
            name: "product",
            type: "tuple",
            internalType: "struct IOrderManager.Product",
            components: [
              {
                name: "vendor",
                type: "address",
                internalType: "address",
              },
              { name: "name", type: "string", internalType: "string" },
              {
                name: "price",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "lat", type: "int256", internalType: "int256" },
              { name: "long", type: "int256", internalType: "int256" },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "productURI",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "status",
            type: "uint8",
            internalType: "enum IOrderManager.OrderStatus",
          },
          { name: "carrier", type: "address", internalType: "address" },
          { name: "buyer", type: "address", internalType: "address" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryFee",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "price", type: "uint256", internalType: "uint256" },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryTimestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "carrierDelivered",
            type: "bool",
            internalType: "bool",
          },
          { name: "buyerRecieved", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOrdersToDeliver",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IOrderManager.Order[]",
        components: [
          {
            name: "product",
            type: "tuple",
            internalType: "struct IOrderManager.Product",
            components: [
              {
                name: "vendor",
                type: "address",
                internalType: "address",
              },
              { name: "name", type: "string", internalType: "string" },
              {
                name: "price",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "lat", type: "int256", internalType: "int256" },
              { name: "long", type: "int256", internalType: "int256" },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "productURI",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "status",
            type: "uint8",
            internalType: "enum IOrderManager.OrderStatus",
          },
          { name: "carrier", type: "address", internalType: "address" },
          { name: "buyer", type: "address", internalType: "address" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryFee",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "price", type: "uint256", internalType: "uint256" },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deliveryTimestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "carrierDelivered",
            type: "bool",
            internalType: "bool",
          },
          { name: "buyerRecieved", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getProduct",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IOrderManager.Product",
        components: [
          { name: "vendor", type: "address", internalType: "address" },
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getToken",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "listProduct",
    inputs: [
      {
        name: "product",
        type: "tuple",
        internalType: "struct IOrderManager.ProductRequest",
        components: [
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "markAdvertViewed",
    inputs: [
      { name: "_productId", type: "uint256", internalType: "uint256" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "markDelivery",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "orderIds",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "orders",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "product",
        type: "tuple",
        internalType: "struct IOrderManager.Product",
        components: [
          { name: "vendor", type: "address", internalType: "address" },
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
      {
        name: "status",
        type: "uint8",
        internalType: "enum IOrderManager.OrderStatus",
      },
      { name: "carrier", type: "address", internalType: "address" },
      { name: "buyer", type: "address", internalType: "address" },
      { name: "quantity", type: "uint256", internalType: "uint256" },
      { name: "deliveryFee", type: "uint256", internalType: "uint256" },
      { name: "price", type: "uint256", internalType: "uint256" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
      {
        name: "deliveryTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "carrierDelivered", type: "bool", internalType: "bool" },
      { name: "buyerRecieved", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "productIds",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "products",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "vendor", type: "address", internalType: "address" },
      { name: "name", type: "string", internalType: "string" },
      { name: "price", type: "uint256", internalType: "uint256" },
      { name: "lat", type: "int256", internalType: "int256" },
      { name: "long", type: "int256", internalType: "int256" },
      { name: "quantity", type: "uint256", internalType: "uint256" },
      { name: "productURI", type: "string", internalType: "string" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quoteOrders",
    inputs: [
      {
        name: "_orders",
        type: "tuple[]",
        internalType: "struct IOrderManager.OrderRequest[]",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "quantity", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "lat", type: "int256", internalType: "int256" },
      { name: "long", type: "int256", internalType: "int256" },
    ],
    outputs: [
      { name: "totalamount", type: "uint256", internalType: "uint256" },
      {
        name: "totalDelivery",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "distance", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registeredAdvertReciepient",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startDelivery",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "subscribeToAdverts",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unSubscribeToAdverts",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unlistProduct",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateProduct",
    inputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
      {
        name: "_product",
        type: "tuple",
        internalType: "struct IOrderManager.ProductRequest",
        components: [
          { name: "name", type: "string", internalType: "string" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "lat", type: "int256", internalType: "int256" },
          { name: "long", type: "int256", internalType: "int256" },
          {
            name: "quantity",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "productURI", type: "string", internalType: "string" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifiedusers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifyUser",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  { type: "event", name: "AdvertPaid", inputs: [], anonymous: false },
  {
    type: "event",
    name: "AdvertSubscribed",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdvertUnsubscribed",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CarrierAssigned",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DeliveryCompleted",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DeliveryStarted",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OrderCancelled",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProductBought",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProductListed",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProductUnlisted",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProductUpdated",
    inputs: [],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [{ name: "target", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "FailedInnerCall", inputs: [] },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
];

export default DAY1_ABI;
