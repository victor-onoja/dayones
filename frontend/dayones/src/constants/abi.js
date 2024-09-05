const DAY1_ABI = [
  {
    abi: [
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
          { name: "amountPerView", type: "uint256", internalType: "uint256" },
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
          { name: "amountPerView", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
          { name: "totalDelivery", type: "uint256", internalType: "uint256" },
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
              { name: "quantity", type: "uint256", internalType: "uint256" },
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
      { type: "event", name: "AdvertSubscribed", inputs: [], anonymous: false },
      {
        type: "event",
        name: "AdvertUnsubscribed",
        inputs: [],
        anonymous: false,
      },
      { type: "event", name: "CarrierAssigned", inputs: [], anonymous: false },
      {
        type: "event",
        name: "DeliveryCompleted",
        inputs: [],
        anonymous: false,
      },
      { type: "event", name: "DeliveryStarted", inputs: [], anonymous: false },
      { type: "event", name: "OrderCancelled", inputs: [], anonymous: false },
      { type: "event", name: "ProductBought", inputs: [], anonymous: false },
      { type: "event", name: "ProductListed", inputs: [], anonymous: false },
      { type: "event", name: "ProductUnlisted", inputs: [], anonymous: false },
      { type: "event", name: "ProductUpdated", inputs: [], anonymous: false },
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
    ],
    bytecode: {
      object:
        "0x6080604052348015600f57600080fd5b50604051601a90606a565b604051809103906000f0801580156035573d6000803e3d6000fd5b50601080546001600160a01b03929092166001600160a01b0319928316179055610190600d55600a8054909116331790556077565b610b5780614c1f83390190565b614b99806100866000396000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c80637b56c2b211610130578063b9db15b4116100b8578063c7de89001161007c578063c7de8900146105d2578063cb51bba9146105da578063d5311cba146105ed578063d5d3c322146105f5578063f2390a85146105fd57600080fd5b8063b9db15b41461051a578063bb508c3d1461053a578063bcea610e14610543578063bf122028146105ac578063c68b8c97146105bf57600080fd5b8063a2283ed4116100ff578063a2283ed414610489578063a4b0f1781461049c578063a85c38ef146104af578063ab9a130a146104d9578063ad362d25146104ec57600080fd5b80637b56c2b21461043d578063869642591461045057806392b61b1e146104635780639b062c371461047657600080fd5b8063273eb702116101be57806362ae710c1161018257806362ae710c146103cb5780636cb66575146103de57806376707301146103f157806376c13c13146104045780637acc0b201461041757600080fd5b8063273eb7021461036657806336eaa78d14610386578063385fe0a9146103905780634d813120146103a5578063514fcac7146103b857600080fd5b80631e78e673116102055780631e78e673146102e157806321df0da71461030c578063237220841461031d5780632466ed8d1461033057806324a19d571461035357600080fd5b8063039be2c814610237578063076087b61461026057806307f15ac1146102805780631553cc52146102ae575b600080fd5b61024a61024536600461419c565b610610565b604051610257919061426f565b60405180910390f35b61027361026e36600461419c565b61088f565b60405161025791906142d4565b6102a061028e36600461419c565b60096020526000908152604090205481565b604051908152602001610257565b6102d16102bc36600461419c565b600c6020526000908152604090205460ff1681565b6040519015158152602001610257565b600a546102f4906001600160a01b031681565b6040516001600160a01b039091168152602001610257565b6010546001600160a01b03166102f4565b6102a061032b366004614343565b6109e8565b6102d161033e36600461419c565b600b6020526000908152604090205460ff1681565b61027361036136600461419c565b610a09565b61037961037436600461419c565b610b51565b6040516102579190614394565b6102a06201518081565b6103a361039e366004614343565b610e58565b005b6103a36103b336600461419c565b610f1c565b6103a36103c6366004614343565b610f92565b61024a6103d936600461419c565b611320565b6103a36103ec3660046144a6565b611597565b6102a06103ff366004614343565b611628565b6103a3610412366004614343565b611638565b61042a610425366004614343565b6118be565b60405161025797969594939291906144d2565b6103a361044b36600461452e565b611a14565b6103a361045e3660046144a6565b611ada565b6103a36104713660046145e8565b611b71565b6103a36104843660046147d7565b61219f565b6103a3610497366004614343565b612444565b6103796104aa36600461419c565b612983565b6104c26104bd366004614343565b612c94565b6040516102579b9a9998979695949392919061481d565b6103a36104e7366004614897565b612e62565b6104ff6104fa3660046145e8565b61300b565b60408051938452602084019290925290820152606001610257565b61052d610528366004614343565b6132c9565b60405161025791906148d3565b6102a06102d081565b610582610551366004614343565b60076020526000908152604090208054600182015460028301546003909301546001600160a01b0390921692909184565b604080516001600160a01b0390951685526020850193909352918301526060820152608001610257565b6102a06105ba36600461419c565b61344e565b6103796105cd36600461419c565b613495565b6103a36137a6565b6102a06105e8366004614343565b613834565b6103a3613844565b6103a36138e1565b6103a361060b3660046148e6565b61395b565b60606000806002805490506001600160401b0381111561063257610632614558565b60405190808252806020026020018201604052801561066b57816020015b610658614076565b8152602001906001900390816106505790505b50905060005b600254811015610887576000600160006002848154811061069457610694614912565b906000526020600020015481526020019081526020016000206040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820180546106f790614928565b80601f016020809104026020016040519081016040528092919081815260200182805461072390614928565b80156107705780601f1061074557610100808354040283529160200191610770565b820191906000526020600020905b81548152906001019060200180831161075357829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546107b190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546107dd90614928565b801561082a5780601f106107ff5761010080835404028352916020019161082a565b820191906000526020600020905b81548152906001019060200180831161080d57829003601f168201915b5050505050815250509050856001600160a01b031681600001516001600160a01b03161461087e578083858151811061086557610865614912565b602090810291909101015261087b600185614972565b93505b50600101610671565b509392505050565b60606000806008805490506001600160401b038111156108b1576108b1614558565b60405190808252806020026020018201604052801561091657816020015b610903604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816108cf5790505b50905060005b600854811015610887576000600760006008848154811061093f5761093f614912565b600091825260208083209091015483528281019390935260409182019020815160808101835281546001600160a01b03908116808352600184015495830195909552600283015493820193909352600390910154606082015292508716148015906109ae575060008160600151115b156109df57808385815181106109c6576109c6614912565b60209081029190910101526109dc600185614972565b93505b5060010161091c565b600581815481106109f857600080fd5b600091825260209091200154905081565b60606000806008805490506001600160401b03811115610a2b57610a2b614558565b604051908082528060200260200182016040528015610a9057816020015b610a7d604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b815260200190600190039081610a495790505b50905060005b6008548110156108875760006007600060088481548110610ab957610ab9614912565b600091825260208083209091015483528281019390935260409182019020815160808101835281546001600160a01b039081168083526001840154958301959095526002830154938201939093526003909101546060820152925087169003610b485780838581518110610b2f57610b2f614912565b6020908102919091010152610b45600185614972565b93505b50600101610a96565b60606000806005805490506001600160401b03811115610b7357610b73614558565b604051908082528060200260200182016040528015610bac57816020015b610b996140bc565b815260200190600190039081610b915790505b50905060005b6005548110156108875760006004600060058481548110610bd557610bd5614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190610c2b90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5790614928565b8015610ca45780601f10610c7957610100808354040283529160200191610ca4565b820191906000526020600020905b815481529060010190602001808311610c8757829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054610ce590614928565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1190614928565b8015610d5e5780601f10610d3357610100808354040283529160200191610d5e565b820191906000526020600020905b815481529060010190602001808311610d4157829003601f168201915b505050919092525050508152600782015460209091019060ff166004811115610d8957610d8961435c565b6004811115610d9a57610d9a61435c565b815260078201546001600160a01b03610100918290048116602084015260088401548116604084015260098401546060840152600a8401546080840152600b84015460a0840152600c84015460c0840152600d84015460e0840152600e9093015460ff80821615158385015291900416151561012090910152815151919250878116911603610e4f5780838581518110610e3657610e36614912565b6020908102919091010152610e4c600185614972565b93505b50600101610bb2565b6000818152600460205260409020600781015461010090046001600160a01b03163314610e8457600080fd5b6001600782015460ff166004811115610e9f57610e9f61435c565b14610f0b5760405162461bcd60e51b815260206004820152603160248201527f63616e206f6e6c792073746172742064656c697665727920666f72206e65776c6044820152707920626f756768742070726f647563747360781b60648201526084015b60405180910390fd5b600701805460ff1916600217905550565b600a546001600160a01b03828116911614610f6e5760405162461bcd60e51b81526020600482015260126024820152711bdb9b1e481a9d5c9e4818d85b8818d85b1b60721b6044820152606401610f02565b6001600160a01b03166000908152600c60205260409020805460ff19166001179055565b6000818152600460205260408082208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190610fd990614928565b80601f016020809104026020016040519081016040528092919081815260200182805461100590614928565b80156110525780601f1061102757610100808354040283529160200191611052565b820191906000526020600020905b81548152906001019060200180831161103557829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461109390614928565b80601f01602080910402602001604051908101604052809291908181526020018280546110bf90614928565b801561110c5780601f106110e15761010080835404028352916020019161110c565b820191906000526020600020905b8154815290600101906020018083116110ef57829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156111375761113761435c565b60048111156111485761114861435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408401526009840154606080850191909152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925060009133911614806111ed57508151516001600160a01b031633145b61124e5760405162461bcd60e51b815260206004820152602c60248201527f6f6e6c7920746865206275796572206f722076656e646f722063616e2063616e60448201526b31b2b61030b71037b93232b960a11b6064820152608401610f02565b6001826020015160048111156112665761126661435c565b148015611284575042620151808360e001516112829190614972565b115b1561128d575060015b6002826020015160048111156112a5576112a561435c565b1480156112b6575042826101000151105b156112bf575060015b8151516001600160a01b031633036112d5575060015b80156113125760036020830152606082015160a083015160c084015161131292916112ff91614972565b6010546001600160a01b03169190613c52565b61131b83613cb1565b505050565b60606000806002805490506001600160401b0381111561134257611342614558565b60405190808252806020026020018201604052801561137b57816020015b611368614076565b8152602001906001900390816113605790505b50905060005b60025481101561088757600060016000600284815481106113a4576113a4614912565b906000526020600020015481526020019081526020016000206040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160018201805461140790614928565b80601f016020809104026020016040519081016040528092919081815260200182805461143390614928565b80156114805780601f1061145557610100808354040283529160200191611480565b820191906000526020600020905b81548152906001019060200180831161146357829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546114c190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546114ed90614928565b801561153a5780601f1061150f5761010080835404028352916020019161153a565b820191906000526020600020905b81548152906001019060200180831161151d57829003601f168201915b5050505050815250509050856001600160a01b031681600001516001600160a01b03160361158e578083858151811061157557611575614912565b602090810291909101015261158b600185614972565b93505b50600101611381565b600082815260046020526040902080546001600160a01b031633146115fe5760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e2061737369676e206361727269657200006044820152606401610f02565b60070180546001600160a01b0390921661010002610100600160a81b031990921691909117905550565b600881815481106109f857600080fd5b6000818152600160208181526040808420815160e0810190925280546001600160a01b03168252928301805491939284019161167390614928565b80601f016020809104026020016040519081016040528092919081815260200182805461169f90614928565b80156116ec5780601f106116c1576101008083540402835291602001916116ec565b820191906000526020600020905b8154815290600101906020018083116116cf57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461172d90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461175990614928565b80156117a65780601f1061177b576101008083540402835291602001916117a6565b820191906000526020600020905b81548152906001019060200180831161178957829003601f168201915b5050509190925250508151919250506001600160a01b0316331461180c5760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e20756e6c6973742070726f6475637400006044820152606401610f02565b60008160400151116118535760405162461bcd60e51b815260206004820152601060248201526f1d5b9b1a5cdd1959081c1c9bd91d58dd60821b6044820152606401610f02565b61185c82613d55565b6000828152600160208190526040822080546001600160a01b0319168155919061188890830182614132565b60028201600090556003820160009055600482016000905560058201600090556006820160006118b89190614132565b50505050565b6001602081905260009182526040909120805491810180546001600160a01b03909316926118eb90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461191790614928565b80156119645780601f1061193957610100808354040283529160200191611964565b820191906000526020600020905b81548152906001019060200180831161194757829003601f168201915b50505050509080600201549080600301549080600401549080600501549080600601805461199190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546119bd90614928565b8015611a0a5780601f106119df57610100808354040283529160200191611a0a565b820191906000526020600020905b8154815290600101906020018083116119ed57829003601f168201915b5050505050905087565b600a546001600160a01b03163314611a635760405162461bcd60e51b81526020600482015260126024820152711bdb9b1e481a9d5c9e4818d85b8818d85b1b60721b6044820152606401610f02565b60105460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015611ab6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131b9190614985565b600a546001600160a01b03163314611b435760405162461bcd60e51b815260206004820152602660248201527f6f6e6c79206164766572744a7572792063616e206d61726b20616476657274206044820152651d9a595dd95960d21b6064820152608401610f02565b60008281526007602052604081206003810180549192600192611b679084906149a7565b9091555050505050565b6000805b8451811015612186576000858281518110611b9257611b92614912565b6020908102919091018101518051600090815260018084526040808320815160e0810190925280546001600160a01b03168252918201805494965092949093919290840191611be090614928565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0c90614928565b8015611c595780601f10611c2e57610100808354040283529160200191611c59565b820191906000526020600020905b815481529060010190602001808311611c3c57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054611c9a90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc690614928565b8015611d135780601f10611ce857610100808354040283529160200191611d13565b820191906000526020600020905b815481529060010190602001808311611cf657829003601f168201915b50505050508152505090506000816040015111611d6b5760405162461bcd60e51b81526020600482015260166024820152751c1c9bd91d58dd081b9bdd081b1a5cdd1959081e595d60521b6044820152606401610f02565b8051336001600160a01b0390911603611dc65760405162461bcd60e51b815260206004820152601b60248201527f63616e6e6f742062757920796f7572206f776e2070726f6475637400000000006044820152606401610f02565b81602001518160a0015111611e1d5760405162461bcd60e51b815260206004820152601960248201527f70726f647563742063616e6e6f742066696c6c206f72646572000000000000006044820152606401610f02565b604080516001808252818301909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081611e345790505090508281600081518110611e7157611e71614912565b60200260200101819052506000806000611e8c848b8b61300b565b91945092509050611e9d8284614972565b611ea79089614972565b9750600060405180610160016040528087815260200160016004811115611ed057611ed061435c565b8152600060208083019190915233604083015289015160608201526080810185905260a081018690524260c082015260e001611f0e6102d0856149ba565b611f189042614972565b815260006020820181905260409091015260a087018051919250600191611f409083906149a7565b90525086516000908152600160208181526040909220885181546001600160a01b0319166001600160a01b0390911617815591880151889291820190611f869082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c08201516006820190611fc39082614a1f565b505060035460009081526004602090815260409091208351805182546001600160a01b0319166001600160a01b0390911617825591820151849350909190829060018201906120129082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061204f9082614a1f565b505050602082015160078201805460ff191660018360048111156120755761207561435c565b02179055506040820151600782018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560608401516008840180546001600160a01b03191691909316179091556080830151600983015560a0830151600a83015560c0830151600b83015560e0830151600c83015580830151600d830155610120830151600e90920180546101409094015161ffff1990941692151561ff001916929092179215150291909117905560038054600580546001818101835560009283527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101839055929161216e908490614972565b909155505060019097019650611b7595505050505050565b506010546118b8906001600160a01b0316333084613ddf565b6000828152600160208181526040808420815160e0810190925280546001600160a01b0316825292830180549193928401916121da90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461220690614928565b80156122535780601f1061222857610100808354040283529160200191612253565b820191906000526020600020905b81548152906001019060200180831161223657829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461229490614928565b80601f01602080910402602001604051908101604052809291908181526020018280546122c090614928565b801561230d5780601f106122e25761010080835404028352916020019161230d565b820191906000526020600020905b8154815290600101906020018083116122f057829003601f168201915b5050509190925250508151919250506001600160a01b031633146123735760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e207570646174652070726f6475637400006044820152606401610f02565b6040805160e0810182523381528351602080830191825280860151838501528584015160608085019190915286015160808085019190915286015160a08085019190915286015160c0840152600087815260019182905293909320825181546001600160a01b0319166001600160a01b03909116178155905191928392908201906123fe9082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061243b9082614a1f565b50505050505050565b6000818152600460205260408082208151610240810190925280546001600160a01b0316610160830190815260018201805484929184916101808501919061248b90614928565b80601f01602080910402602001604051908101604052809291908181526020018280546124b790614928565b80156125045780601f106124d957610100808354040283529160200191612504565b820191906000526020600020905b8154815290600101906020018083116124e757829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461254590614928565b80601f016020809104026020016040519081016040528092919081815260200182805461257190614928565b80156125be5780601f10612593576101008083540402835291602001916125be565b820191906000526020600020905b8154815290600101906020018083116125a157829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156125e9576125e961435c565b60048111156125fa576125fa61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408085019190915260098501546060850152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925033911614806126a7575080606001516001600160a01b0316336001600160a01b0316145b6127055760405162461bcd60e51b815260206004820152602960248201527f6f6e6c79206361727269657220616e642062757965722063616e206d61726b2060448201526819195b1a5d995c995960ba1b6064820152608401610f02565b60028160200151600481111561271d5761271d61435c565b1461277a5760405162461bcd60e51b815260206004820152602760248201527f63616e206f6e6c79206d61726b2064656c697665726564207768656e20696e206044820152661d1c985b9cda5d60ca1b6064820152608401610f02565b60408101516001600160a01b0316330361279b5760016101208201526127b8565b60608101516001600160a01b031633036127b85760016101408201525b80610120015180156127cc57508061014001515b1561281b5780515160c08201516010546127f1926001600160a01b0390911691613c52565b604081015160a0820151601054612813926001600160a01b0390911691613c52565b600460208201525b60008281526004602090815260409091208251805182546001600160a01b0319166001600160a01b0390911617825591820151839290829060018201906128629082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061289f9082614a1f565b505050602082015160078201805460ff191660018360048111156128c5576128c561435c565b02179055506040820151600782018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560608401516008840180546001600160a01b03191691909316179091556080830151600983015560a0830151600a83015560c0830151600b83015560e0830151600c83015580830151600d830155610120830151600e90920180546101409094015161ffff1990941692151561ff001916929092179215150291909117905561297f82613cb1565b5050565b60606000806005805490506001600160401b038111156129a5576129a5614558565b6040519080825280602002602001820160405280156129de57816020015b6129cb6140bc565b8152602001906001900390816129c35790505b50905060005b6005548110156108875760006004600060058481548110612a0757612a07614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190612a5d90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612a8990614928565b8015612ad65780601f10612aab57610100808354040283529160200191612ad6565b820191906000526020600020905b815481529060010190602001808311612ab957829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054612b1790614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612b4390614928565b8015612b905780601f10612b6557610100808354040283529160200191612b90565b820191906000526020600020905b815481529060010190602001808311612b7357829003601f168201915b505050919092525050508152600782015460209091019060ff166004811115612bbb57612bbb61435c565b6004811115612bcc57612bcc61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408401526009840154606080850191909152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff80821615158486015292900490911615156101209092019190915290820151919250878116911603612c8b5780838581518110612c7257612c72614912565b6020908102919091010152612c88600185614972565b93505b506001016129e4565b600460209081526000918252604091829020825160e0810190935280546001600160a01b0316835260018101805491939284929084019190612cd590614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612d0190614928565b8015612d4e5780601f10612d2357610100808354040283529160200191612d4e565b820191906000526020600020905b815481529060010190602001808311612d3157829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054612d8f90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612dbb90614928565b8015612e085780601f10612ddd57610100808354040283529160200191612e08565b820191906000526020600020905b815481529060010190602001808311612deb57829003601f168201915b50505091909252505050600782015460088301546009840154600a850154600b860154600c870154600d880154600e90980154969760ff808816986001600160a01b03610100998a9004811699981697818316929104168b565b670de0b6b3a764000081602001511015612eae5760405162461bcd60e51b815260206004820152600d60248201526c707269636520746f6f206c6f7760981b6044820152606401610f02565b6000816080015111612ef55760405162461bcd60e51b815260206004820152601060248201526f7175616e7469747920746f6f206c6f7760801b6044820152606401610f02565b6040805160e0810182523381528251602080830191825280850151838501528484015160608085019190915285015160808085019190915285015160a08085019190915285015160c084015260008054815260019182905293909320825181546001600160a01b0319166001600160a01b0390911617815590519192839290820190612f819082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c08201516006820190612fbe9082614a1f565b505060008054600280546001810182559083527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0181905591508061300283614add565b91905055505050565b60008080805b86518110156132bf57600087828151811061302e5761302e614912565b6020908102919091018101518051600090815260018084526040808320815160e0810190925280546001600160a01b0316825291820180549496509294909391929084019161307c90614928565b80601f01602080910402602001604051908101604052809291908181526020018280546130a890614928565b80156130f55780601f106130ca576101008083540402835291602001916130f5565b820191906000526020600020905b8154815290600101906020018083116130d857829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461313690614928565b80601f016020809104026020016040519081016040528092919081815260200182805461316290614928565b80156131af5780601f10613184576101008083540402835291602001916131af565b820191906000526020600020905b81548152906001019060200180831161319257829003601f168201915b5050505050815250509050600082602001511161321c5760405162461bcd60e51b815260206004820152602560248201527f6f72646572207175616e74697479206d75737420626520677265617465722074604482015264068616e20360dc1b6064820152608401610f02565b80516001600160a01b03166132655760405162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c1c9bd91d58dd608a1b6044820152606401610f02565b8060a00151816040015161327991906149ba565b6132839087614972565b9550613299888883606001518460800151613e18565b93506132a9848260a00151613ec1565b6132b39086614972565b94505050600101613011565b5093509350939050565b6132d1614076565b600082815260016020818152604092839020835160e0810190945280546001600160a01b0316845291820180549184019161330b90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461333790614928565b80156133845780601f1061335957610100808354040283529160200191613384565b820191906000526020600020905b81548152906001019060200180831161336757829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546133c590614928565b80601f01602080910402602001604051908101604052809291908181526020018280546133f190614928565b801561343e5780601f106134135761010080835404028352916020019161343e565b820191906000526020600020905b81548152906001019060200180831161342157829003601f168201915b5050505050815250509050919050565b6001600160a01b038116600090815260096020526040812054600e548110156134865780600e5461347f91906149a7565b9392505050565b50600092915050565b50919050565b60606000806005805490506001600160401b038111156134b7576134b7614558565b6040519080825280602002602001820160405280156134f057816020015b6134dd6140bc565b8152602001906001900390816134d55790505b50905060005b600554811015610887576000600460006005848154811061351957613519614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b0316610160830190815260018201805484929184916101808501919061356f90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461359b90614928565b80156135e85780601f106135bd576101008083540402835291602001916135e8565b820191906000526020600020905b8154815290600101906020018083116135cb57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461362990614928565b80601f016020809104026020016040519081016040528092919081815260200182805461365590614928565b80156136a25780601f10613677576101008083540402835291602001916136a2565b820191906000526020600020905b81548152906001019060200180831161368557829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156136cd576136cd61435c565b60048111156136de576136de61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408085019190915260098501546060850152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925087811691160361379d578083858151811061378457613784614912565b602090810291909101015261379a600185614972565b93505b506001016134f6565b336000908152600b602052604090205460ff166137f65760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd081cdd589cd8dc9a58995960921b6044820152606401610f02565b60006138013361344e565b600e5433600081815260096020526040902091909155601054919250613831916001600160a01b03169083613c52565b50565b600281815481106109f857600080fd5b336000908152600b602052604090205460ff16156138995760405162461bcd60e51b8152602060048201526012602482015271185b1c9958591e481cdd589cd8dc9a58995960721b6044820152606401610f02565b600e5433600090815260096020908152604080832093909355600b9052908120805460ff19166001908117909155600f8054919290916138da908490614972565b9091555050565b336000908152600b602052604090205460ff166139315760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd081cdd589cd8dc9a58995960921b6044820152606401610f02565b336000908152600b60205260408120805460ff19169055600f8054600192906138da9084906149a7565b6000818152600160208181526040808420815160e0810190925280546001600160a01b03168252928301805491939284019161399690614928565b80601f01602080910402602001604051908101604052809291908181526020018280546139c290614928565b8015613a0f5780601f106139e457610100808354040283529160200191613a0f565b820191906000526020600020905b8154815290600101906020018083116139f257829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054613a5090614928565b80601f0160208091040260200160405190810160405280929190818152602001828054613a7c90614928565b8015613ac95780601f10613a9e57610100808354040283529160200191613ac9565b820191906000526020600020905b815481529060010190602001808311613aac57829003601f168201915b505050505081525050905080600001516001600160a01b0316336001600160a01b031614613b395760405162461bcd60e51b815260206004820152601d60248201527f6f6e6c792076656e646f722063616e20637265617465206164766572740000006044820152606401610f02565b60008160a0015111613b855760405162461bcd60e51b815260206004820152601560248201527470726f64756374206e6f7420617661696c61626c6560581b6044820152606401610f02565b83600e6000828254613b979190614972565b90915550506040805160808101825233815260208082018581528284018881526060840188815260008881526007909452948320935184546001600160a01b0319166001600160a01b039091161784559051600180850191909155905160028401559251600390920191909155600680546008805480860182559084527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301819055909190613c47908490614972565b909155505050505050565b6040516001600160a01b0383811660248301526044820183905261131b91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613f0c565b6000805b600554811015613cf3578260058281548110613cd357613cd3614912565b906000526020600020015403613ceb57809150613cf3565b600101613cb5565b5060058054613d00614912565b906000526020600020015460058281548110613d1e57613d1e614912565b6000918252602090912001556005805480613d3b57613d3b614af6565b600190038181906000526020600020016000905590555050565b6000805b600254811015613d97578260028281548110613d7757613d77614912565b906000526020600020015403613d8f57809150613d97565b600101613d59565b5060028054613da4614912565b906000526020600020015460028281548110613dc257613dc2614912565b6000918252602090912001556002805480613d3b57613d3b614af6565b6040516001600160a01b0384811660248301528381166044830152606482018390526118b89186918216906323b872dd90608401613c7f565b604051637168390f60e01b815260048101859052602481018390526044810184905260648101829052600090670de0b6b3a76400009073__$79a631f2ec5f8a70b1623dafb918a3f53a$__90637168390f90608401602060405180830381865af4158015613e8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613eae9190614b0c565b613eb89190614b25565b95945050505050565b60008083600d54613ed291906149ba565b9050806103e8613ee285836149ba565b613eed9060026149ba565b613ef79190614b25565b613f019082614972565b925050505b92915050565b6000613f216001600160a01b03841683613f6f565b90508051600014158015613f46575080806020019051810190613f449190614985565b155b1561131b57604051635274afe760e01b81526001600160a01b0384166004820152602401610f02565b606061347f8383600084600080856001600160a01b03168486604051613f959190614b47565b60006040518083038185875af1925050503d8060008114613fd2576040519150601f19603f3d011682016040523d82523d6000602084013e613fd7565b606091505b5091509150613fe7868383613ff1565b9695505050505050565b606082614006576140018261404d565b61347f565b815115801561401d57506001600160a01b0384163b155b1561404657604051639996b31560e01b81526001600160a01b0385166004820152602401610f02565b508061347f565b80511561405d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518060e0016040528060006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200160008152602001606081525090565b6040518061016001604052806140d0614076565b81526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b50805461413e90614928565b6000825580601f1061414e575050565b601f01602090049060005260206000209081019061383191905b8082111561417c5760008155600101614168565b5090565b80356001600160a01b038116811461419757600080fd5b919050565b6000602082840312156141ae57600080fd5b61347f82614180565b60005b838110156141d25781810151838201526020016141ba565b50506000910152565b600081518084526141f38160208601602086016141b7565b601f01601f19169290920160200192915050565b60018060a01b0381511682526000602082015160e0602085015261422e60e08501826141db565b905060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015184820360c0860152613eb882826141db565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156142c857603f198786030184526142b3858351614207565b94506020938401939190910190600101614297565b50929695505050505050565b602080825282518282018190526000918401906040840190835b8181101561433857835180516001600160a01b03168452602080820151818601526040808301519086015260609182015191850191909152909301926080909201916001016142ee565b509095945050505050565b60006020828403121561435557600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061439057634e487b7160e01b600052602160045260246000fd5b9052565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156142c857603f198786030184528151805161016087526143e4610160880182614207565b905060208201516143f86020890182614372565b50604082015161441360408901826001600160a01b03169052565b50606082015161442e60608901826001600160a01b03169052565b506080820151608088015260a082015160a088015260c082015160c088015260e082015160e088015261010082015161010088015261012082015161447861012089018215159052565b50610140820151915061449061014088018315159052565b95505060209384019391909101906001016143bc565b600080604083850312156144b957600080fd5b823591506144c960208401614180565b90509250929050565b6001600160a01b038816815260e0602082018190526000906144f6908301896141db565b8760408401528660608401528560808401528460a084015282810360c084015261452081856141db565b9a9950505050505050505050565b6000806040838503121561454157600080fd5b61454a83614180565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561459057614590614558565b60405290565b60405160c081016001600160401b038111828210171561459057614590614558565b604051601f8201601f191681016001600160401b03811182821017156145e0576145e0614558565b604052919050565b6000806000606084860312156145fd57600080fd5b83356001600160401b0381111561461357600080fd5b8401601f8101861361462457600080fd5b80356001600160401b0381111561463d5761463d614558565b61464c60208260051b016145b8565b8082825260208201915060208360061b85010192508883111561466e57600080fd5b6020840193505b828410156146b6576040848a03121561468d57600080fd5b61469561456e565b84358152602080860135818301529083526040909401939190910190614675565b98602088013598506040909701359695505050505050565b600082601f8301126146df57600080fd5b81356001600160401b038111156146f8576146f8614558565b61470b601f8201601f19166020016145b8565b81815284602083860101111561472057600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561474f57600080fd5b614757614596565b905081356001600160401b0381111561476f57600080fd5b61477b848285016146ce565b8252506020828101359082015260408083013590820152606080830135908201526080808301359082015260a08201356001600160401b038111156147bf57600080fd5b6147cb848285016146ce565b60a08301525092915050565b600080604083850312156147ea57600080fd5b8235915060208301356001600160401b0381111561480757600080fd5b6148138582860161473d565b9150509250929050565b6101608152600061483261016083018e614207565b9050614841602083018d614372565b6001600160a01b039a8b1660408301529890991660608a0152608089019690965260a088019490945260c087019290925260e0860152610100850152151561012084015215156101409092019190915292915050565b6000602082840312156148a957600080fd5b81356001600160401b038111156148bf57600080fd5b6148cb8482850161473d565b949350505050565b60208152600061347f6020830184614207565b6000806000606084860312156148fb57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061493c57607f821691505b60208210810361348f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115613f0657613f0661495c565b60006020828403121561499757600080fd5b8151801515811461347f57600080fd5b81810381811115613f0657613f0661495c565b8082028115828204841417613f0657613f0661495c565b601f82111561131b57806000526020600020601f840160051c810160208510156149f85750805b601f840160051c820191505b81811015614a185760008155600101614a04565b5050505050565b81516001600160401b03811115614a3857614a38614558565b614a4c81614a468454614928565b846149d1565b6020601f821160018114614a805760008315614a685750848201515b600019600385901b1c1916600184901b178455614a18565b600084815260208120601f198516915b82811015614ab05787850151825560209485019460019092019101614a90565b5084821015614ace5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b600060018201614aef57614aef61495c565b5060010190565b634e487b7160e01b600052603160045260246000fd5b600060208284031215614b1e57600080fd5b5051919050565b600082614b4257634e487b7160e01b600052601260045260246000fd5b500490565b60008251614b598184602087016141b7565b919091019291505056fea26469706673582212203141084495fa07b9790337f02dc2ffabc3fffed7741f731a28478f69206e165f64736f6c634300081a0033608060405234801561001057600080fd5b506040518060400160405280600c81526020016b2230bca7b732b9aa37b5b2b760a11b815250604051806040016040528060048152602001634441593160e01b815250816003908161006291906102a8565b50600461006f82826102a8565b5050600580546001600160a01b0319163390811790915561009b915069d3c21bcecceda10000006100a0565b61038d565b6001600160a01b0382166100cf5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b6100db600083836100df565b5050565b6001600160a01b03831661010a5780600260008282546100ff9190610366565b9091555061017c9050565b6001600160a01b0383166000908152602081905260409020548181101561015d5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016100c6565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610198576002805482900390556101b7565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516101fc91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061023357607f821691505b60208210810361025357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102a357806000526020600020601f840160051c810160208510156102805750805b601f840160051c820191505b818110156102a0576000815560010161028c565b50505b505050565b81516001600160401b038111156102c1576102c1610209565b6102d5816102cf845461021f565b84610259565b6020601f82116001811461030957600083156102f15750848201515b600019600385901b1c1916600184901b1784556102a0565b600084815260208120601f198516915b828110156103395787850151825560209485019460019092019101610319565b50848210156103575786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561038757634e487b7160e01b600052601160045260246000fd5b92915050565b6107bb8061039c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461012357806370a08231146101385780638da5cb5b1461016157806395d89b411461018c578063a9059cbb14610194578063dd62ed3e146101a757600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101e0565b6040516100c39190610604565b60405180910390f35b6100df6100da36600461066e565b610272565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610698565b61028c565b604051601281526020016100c3565b61013661013136600461066e565b6102b0565b005b6100f36101463660046106d5565b6001600160a01b031660009081526020819052604090205490565b600554610174906001600160a01b031681565b6040516001600160a01b0390911681526020016100c3565b6100b66102be565b6100df6101a236600461066e565b6102cd565b6100f36101b53660046106f7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101ef9061072a565b80601f016020809104026020016040519081016040528092919081815260200182805461021b9061072a565b80156102685780601f1061023d57610100808354040283529160200191610268565b820191906000526020600020905b81548152906001019060200180831161024b57829003601f168201915b5050505050905090565b6000336102808185856102db565b60019150505b92915050565b60003361029a8582856102ed565b6102a5858585610370565b506001949350505050565b6102ba82826103cf565b5050565b6060600480546101ef9061072a565b600033610280818585610370565b6102e88383836001610405565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461036a578181101561035b57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61036a84848484036000610405565b50505050565b6001600160a01b03831661039a57604051634b637e8f60e11b815260006004820152602401610352565b6001600160a01b0382166103c45760405163ec442f0560e01b815260006004820152602401610352565b6102e88383836104da565b6001600160a01b0382166103f95760405163ec442f0560e01b815260006004820152602401610352565b6102ba600083836104da565b6001600160a01b03841661042f5760405163e602df0560e01b815260006004820152602401610352565b6001600160a01b03831661045957604051634a1406b160e11b815260006004820152602401610352565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561036a57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104cc91815260200190565b60405180910390a350505050565b6001600160a01b0383166105055780600260008282546104fa9190610764565b909155506105779050565b6001600160a01b038316600090815260208190526040902054818110156105585760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610352565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610593576002805482900390556105b2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105f791815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156106325760208186018101516040868401015201610615565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461066957600080fd5b919050565b6000806040838503121561068157600080fd5b61068a83610652565b946020939093013593505050565b6000806000606084860312156106ad57600080fd5b6106b684610652565b92506106c460208501610652565b929592945050506040919091013590565b6000602082840312156106e757600080fd5b6106f082610652565b9392505050565b6000806040838503121561070a57600080fd5b61071383610652565b915061072160208401610652565b90509250929050565b600181811c9082168061073e57607f821691505b60208210810361075e57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561028657634e487b7160e01b600052601160045260246000fdfea2646970667358221220a633c1e142df96183e3d767fd6ca6c2095876053d807c5ed68a7a5cadcbc746264736f6c634300081a0033",
      sourceMap:
        "449:15330:36:-:0;;;1322:139;;;;;;;;;;1369:18;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1346:5:36;:43;;-1:-1:-1;;;;;1346:43:36;;;;-1:-1:-1;;;;;;1346:43:36;;;;;;1418:3;1399:16;:22;1431:10;:23;;;;;1444:10;1431:23;;;449:15330;;;;;;;;;;:::o;:::-;;;;;;;",
      linkReferences: {
        "src/Haversine.sol": { Haversine: [{ start: 16086, length: 20 }] },
      },
    },
    deployedBytecode: {
      object:
        "0x608060405234801561001057600080fd5b50600436106102325760003560e01c80637b56c2b211610130578063b9db15b4116100b8578063c7de89001161007c578063c7de8900146105d2578063cb51bba9146105da578063d5311cba146105ed578063d5d3c322146105f5578063f2390a85146105fd57600080fd5b8063b9db15b41461051a578063bb508c3d1461053a578063bcea610e14610543578063bf122028146105ac578063c68b8c97146105bf57600080fd5b8063a2283ed4116100ff578063a2283ed414610489578063a4b0f1781461049c578063a85c38ef146104af578063ab9a130a146104d9578063ad362d25146104ec57600080fd5b80637b56c2b21461043d578063869642591461045057806392b61b1e146104635780639b062c371461047657600080fd5b8063273eb702116101be57806362ae710c1161018257806362ae710c146103cb5780636cb66575146103de57806376707301146103f157806376c13c13146104045780637acc0b201461041757600080fd5b8063273eb7021461036657806336eaa78d14610386578063385fe0a9146103905780634d813120146103a5578063514fcac7146103b857600080fd5b80631e78e673116102055780631e78e673146102e157806321df0da71461030c578063237220841461031d5780632466ed8d1461033057806324a19d571461035357600080fd5b8063039be2c814610237578063076087b61461026057806307f15ac1146102805780631553cc52146102ae575b600080fd5b61024a61024536600461419c565b610610565b604051610257919061426f565b60405180910390f35b61027361026e36600461419c565b61088f565b60405161025791906142d4565b6102a061028e36600461419c565b60096020526000908152604090205481565b604051908152602001610257565b6102d16102bc36600461419c565b600c6020526000908152604090205460ff1681565b6040519015158152602001610257565b600a546102f4906001600160a01b031681565b6040516001600160a01b039091168152602001610257565b6010546001600160a01b03166102f4565b6102a061032b366004614343565b6109e8565b6102d161033e36600461419c565b600b6020526000908152604090205460ff1681565b61027361036136600461419c565b610a09565b61037961037436600461419c565b610b51565b6040516102579190614394565b6102a06201518081565b6103a361039e366004614343565b610e58565b005b6103a36103b336600461419c565b610f1c565b6103a36103c6366004614343565b610f92565b61024a6103d936600461419c565b611320565b6103a36103ec3660046144a6565b611597565b6102a06103ff366004614343565b611628565b6103a3610412366004614343565b611638565b61042a610425366004614343565b6118be565b60405161025797969594939291906144d2565b6103a361044b36600461452e565b611a14565b6103a361045e3660046144a6565b611ada565b6103a36104713660046145e8565b611b71565b6103a36104843660046147d7565b61219f565b6103a3610497366004614343565b612444565b6103796104aa36600461419c565b612983565b6104c26104bd366004614343565b612c94565b6040516102579b9a9998979695949392919061481d565b6103a36104e7366004614897565b612e62565b6104ff6104fa3660046145e8565b61300b565b60408051938452602084019290925290820152606001610257565b61052d610528366004614343565b6132c9565b60405161025791906148d3565b6102a06102d081565b610582610551366004614343565b60076020526000908152604090208054600182015460028301546003909301546001600160a01b0390921692909184565b604080516001600160a01b0390951685526020850193909352918301526060820152608001610257565b6102a06105ba36600461419c565b61344e565b6103796105cd36600461419c565b613495565b6103a36137a6565b6102a06105e8366004614343565b613834565b6103a3613844565b6103a36138e1565b6103a361060b3660046148e6565b61395b565b60606000806002805490506001600160401b0381111561063257610632614558565b60405190808252806020026020018201604052801561066b57816020015b610658614076565b8152602001906001900390816106505790505b50905060005b600254811015610887576000600160006002848154811061069457610694614912565b906000526020600020015481526020019081526020016000206040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820180546106f790614928565b80601f016020809104026020016040519081016040528092919081815260200182805461072390614928565b80156107705780601f1061074557610100808354040283529160200191610770565b820191906000526020600020905b81548152906001019060200180831161075357829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546107b190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546107dd90614928565b801561082a5780601f106107ff5761010080835404028352916020019161082a565b820191906000526020600020905b81548152906001019060200180831161080d57829003601f168201915b5050505050815250509050856001600160a01b031681600001516001600160a01b03161461087e578083858151811061086557610865614912565b602090810291909101015261087b600185614972565b93505b50600101610671565b509392505050565b60606000806008805490506001600160401b038111156108b1576108b1614558565b60405190808252806020026020018201604052801561091657816020015b610903604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816108cf5790505b50905060005b600854811015610887576000600760006008848154811061093f5761093f614912565b600091825260208083209091015483528281019390935260409182019020815160808101835281546001600160a01b03908116808352600184015495830195909552600283015493820193909352600390910154606082015292508716148015906109ae575060008160600151115b156109df57808385815181106109c6576109c6614912565b60209081029190910101526109dc600185614972565b93505b5060010161091c565b600581815481106109f857600080fd5b600091825260209091200154905081565b60606000806008805490506001600160401b03811115610a2b57610a2b614558565b604051908082528060200260200182016040528015610a9057816020015b610a7d604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b815260200190600190039081610a495790505b50905060005b6008548110156108875760006007600060088481548110610ab957610ab9614912565b600091825260208083209091015483528281019390935260409182019020815160808101835281546001600160a01b039081168083526001840154958301959095526002830154938201939093526003909101546060820152925087169003610b485780838581518110610b2f57610b2f614912565b6020908102919091010152610b45600185614972565b93505b50600101610a96565b60606000806005805490506001600160401b03811115610b7357610b73614558565b604051908082528060200260200182016040528015610bac57816020015b610b996140bc565b815260200190600190039081610b915790505b50905060005b6005548110156108875760006004600060058481548110610bd557610bd5614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190610c2b90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5790614928565b8015610ca45780601f10610c7957610100808354040283529160200191610ca4565b820191906000526020600020905b815481529060010190602001808311610c8757829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054610ce590614928565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1190614928565b8015610d5e5780601f10610d3357610100808354040283529160200191610d5e565b820191906000526020600020905b815481529060010190602001808311610d4157829003601f168201915b505050919092525050508152600782015460209091019060ff166004811115610d8957610d8961435c565b6004811115610d9a57610d9a61435c565b815260078201546001600160a01b03610100918290048116602084015260088401548116604084015260098401546060840152600a8401546080840152600b84015460a0840152600c84015460c0840152600d84015460e0840152600e9093015460ff80821615158385015291900416151561012090910152815151919250878116911603610e4f5780838581518110610e3657610e36614912565b6020908102919091010152610e4c600185614972565b93505b50600101610bb2565b6000818152600460205260409020600781015461010090046001600160a01b03163314610e8457600080fd5b6001600782015460ff166004811115610e9f57610e9f61435c565b14610f0b5760405162461bcd60e51b815260206004820152603160248201527f63616e206f6e6c792073746172742064656c697665727920666f72206e65776c6044820152707920626f756768742070726f647563747360781b60648201526084015b60405180910390fd5b600701805460ff1916600217905550565b600a546001600160a01b03828116911614610f6e5760405162461bcd60e51b81526020600482015260126024820152711bdb9b1e481a9d5c9e4818d85b8818d85b1b60721b6044820152606401610f02565b6001600160a01b03166000908152600c60205260409020805460ff19166001179055565b6000818152600460205260408082208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190610fd990614928565b80601f016020809104026020016040519081016040528092919081815260200182805461100590614928565b80156110525780601f1061102757610100808354040283529160200191611052565b820191906000526020600020905b81548152906001019060200180831161103557829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461109390614928565b80601f01602080910402602001604051908101604052809291908181526020018280546110bf90614928565b801561110c5780601f106110e15761010080835404028352916020019161110c565b820191906000526020600020905b8154815290600101906020018083116110ef57829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156111375761113761435c565b60048111156111485761114861435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408401526009840154606080850191909152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925060009133911614806111ed57508151516001600160a01b031633145b61124e5760405162461bcd60e51b815260206004820152602c60248201527f6f6e6c7920746865206275796572206f722076656e646f722063616e2063616e60448201526b31b2b61030b71037b93232b960a11b6064820152608401610f02565b6001826020015160048111156112665761126661435c565b148015611284575042620151808360e001516112829190614972565b115b1561128d575060015b6002826020015160048111156112a5576112a561435c565b1480156112b6575042826101000151105b156112bf575060015b8151516001600160a01b031633036112d5575060015b80156113125760036020830152606082015160a083015160c084015161131292916112ff91614972565b6010546001600160a01b03169190613c52565b61131b83613cb1565b505050565b60606000806002805490506001600160401b0381111561134257611342614558565b60405190808252806020026020018201604052801561137b57816020015b611368614076565b8152602001906001900390816113605790505b50905060005b60025481101561088757600060016000600284815481106113a4576113a4614912565b906000526020600020015481526020019081526020016000206040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160018201805461140790614928565b80601f016020809104026020016040519081016040528092919081815260200182805461143390614928565b80156114805780601f1061145557610100808354040283529160200191611480565b820191906000526020600020905b81548152906001019060200180831161146357829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546114c190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546114ed90614928565b801561153a5780601f1061150f5761010080835404028352916020019161153a565b820191906000526020600020905b81548152906001019060200180831161151d57829003601f168201915b5050505050815250509050856001600160a01b031681600001516001600160a01b03160361158e578083858151811061157557611575614912565b602090810291909101015261158b600185614972565b93505b50600101611381565b600082815260046020526040902080546001600160a01b031633146115fe5760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e2061737369676e206361727269657200006044820152606401610f02565b60070180546001600160a01b0390921661010002610100600160a81b031990921691909117905550565b600881815481106109f857600080fd5b6000818152600160208181526040808420815160e0810190925280546001600160a01b03168252928301805491939284019161167390614928565b80601f016020809104026020016040519081016040528092919081815260200182805461169f90614928565b80156116ec5780601f106116c1576101008083540402835291602001916116ec565b820191906000526020600020905b8154815290600101906020018083116116cf57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461172d90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461175990614928565b80156117a65780601f1061177b576101008083540402835291602001916117a6565b820191906000526020600020905b81548152906001019060200180831161178957829003601f168201915b5050509190925250508151919250506001600160a01b0316331461180c5760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e20756e6c6973742070726f6475637400006044820152606401610f02565b60008160400151116118535760405162461bcd60e51b815260206004820152601060248201526f1d5b9b1a5cdd1959081c1c9bd91d58dd60821b6044820152606401610f02565b61185c82613d55565b6000828152600160208190526040822080546001600160a01b0319168155919061188890830182614132565b60028201600090556003820160009055600482016000905560058201600090556006820160006118b89190614132565b50505050565b6001602081905260009182526040909120805491810180546001600160a01b03909316926118eb90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461191790614928565b80156119645780601f1061193957610100808354040283529160200191611964565b820191906000526020600020905b81548152906001019060200180831161194757829003601f168201915b50505050509080600201549080600301549080600401549080600501549080600601805461199190614928565b80601f01602080910402602001604051908101604052809291908181526020018280546119bd90614928565b8015611a0a5780601f106119df57610100808354040283529160200191611a0a565b820191906000526020600020905b8154815290600101906020018083116119ed57829003601f168201915b5050505050905087565b600a546001600160a01b03163314611a635760405162461bcd60e51b81526020600482015260126024820152711bdb9b1e481a9d5c9e4818d85b8818d85b1b60721b6044820152606401610f02565b60105460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015611ab6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131b9190614985565b600a546001600160a01b03163314611b435760405162461bcd60e51b815260206004820152602660248201527f6f6e6c79206164766572744a7572792063616e206d61726b20616476657274206044820152651d9a595dd95960d21b6064820152608401610f02565b60008281526007602052604081206003810180549192600192611b679084906149a7565b9091555050505050565b6000805b8451811015612186576000858281518110611b9257611b92614912565b6020908102919091018101518051600090815260018084526040808320815160e0810190925280546001600160a01b03168252918201805494965092949093919290840191611be090614928565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0c90614928565b8015611c595780601f10611c2e57610100808354040283529160200191611c59565b820191906000526020600020905b815481529060010190602001808311611c3c57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054611c9a90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc690614928565b8015611d135780601f10611ce857610100808354040283529160200191611d13565b820191906000526020600020905b815481529060010190602001808311611cf657829003601f168201915b50505050508152505090506000816040015111611d6b5760405162461bcd60e51b81526020600482015260166024820152751c1c9bd91d58dd081b9bdd081b1a5cdd1959081e595d60521b6044820152606401610f02565b8051336001600160a01b0390911603611dc65760405162461bcd60e51b815260206004820152601b60248201527f63616e6e6f742062757920796f7572206f776e2070726f6475637400000000006044820152606401610f02565b81602001518160a0015111611e1d5760405162461bcd60e51b815260206004820152601960248201527f70726f647563742063616e6e6f742066696c6c206f72646572000000000000006044820152606401610f02565b604080516001808252818301909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081611e345790505090508281600081518110611e7157611e71614912565b60200260200101819052506000806000611e8c848b8b61300b565b91945092509050611e9d8284614972565b611ea79089614972565b9750600060405180610160016040528087815260200160016004811115611ed057611ed061435c565b8152600060208083019190915233604083015289015160608201526080810185905260a081018690524260c082015260e001611f0e6102d0856149ba565b611f189042614972565b815260006020820181905260409091015260a087018051919250600191611f409083906149a7565b90525086516000908152600160208181526040909220885181546001600160a01b0319166001600160a01b0390911617815591880151889291820190611f869082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c08201516006820190611fc39082614a1f565b505060035460009081526004602090815260409091208351805182546001600160a01b0319166001600160a01b0390911617825591820151849350909190829060018201906120129082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061204f9082614a1f565b505050602082015160078201805460ff191660018360048111156120755761207561435c565b02179055506040820151600782018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560608401516008840180546001600160a01b03191691909316179091556080830151600983015560a0830151600a83015560c0830151600b83015560e0830151600c83015580830151600d830155610120830151600e90920180546101409094015161ffff1990941692151561ff001916929092179215150291909117905560038054600580546001818101835560009283527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101839055929161216e908490614972565b909155505060019097019650611b7595505050505050565b506010546118b8906001600160a01b0316333084613ddf565b6000828152600160208181526040808420815160e0810190925280546001600160a01b0316825292830180549193928401916121da90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461220690614928565b80156122535780601f1061222857610100808354040283529160200191612253565b820191906000526020600020905b81548152906001019060200180831161223657829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461229490614928565b80601f01602080910402602001604051908101604052809291908181526020018280546122c090614928565b801561230d5780601f106122e25761010080835404028352916020019161230d565b820191906000526020600020905b8154815290600101906020018083116122f057829003601f168201915b5050509190925250508151919250506001600160a01b031633146123735760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c792076656e646f722063616e207570646174652070726f6475637400006044820152606401610f02565b6040805160e0810182523381528351602080830191825280860151838501528584015160608085019190915286015160808085019190915286015160a08085019190915286015160c0840152600087815260019182905293909320825181546001600160a01b0319166001600160a01b03909116178155905191928392908201906123fe9082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061243b9082614a1f565b50505050505050565b6000818152600460205260408082208151610240810190925280546001600160a01b0316610160830190815260018201805484929184916101808501919061248b90614928565b80601f01602080910402602001604051908101604052809291908181526020018280546124b790614928565b80156125045780601f106124d957610100808354040283529160200191612504565b820191906000526020600020905b8154815290600101906020018083116124e757829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461254590614928565b80601f016020809104026020016040519081016040528092919081815260200182805461257190614928565b80156125be5780601f10612593576101008083540402835291602001916125be565b820191906000526020600020905b8154815290600101906020018083116125a157829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156125e9576125e961435c565b60048111156125fa576125fa61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408085019190915260098501546060850152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925033911614806126a7575080606001516001600160a01b0316336001600160a01b0316145b6127055760405162461bcd60e51b815260206004820152602960248201527f6f6e6c79206361727269657220616e642062757965722063616e206d61726b2060448201526819195b1a5d995c995960ba1b6064820152608401610f02565b60028160200151600481111561271d5761271d61435c565b1461277a5760405162461bcd60e51b815260206004820152602760248201527f63616e206f6e6c79206d61726b2064656c697665726564207768656e20696e206044820152661d1c985b9cda5d60ca1b6064820152608401610f02565b60408101516001600160a01b0316330361279b5760016101208201526127b8565b60608101516001600160a01b031633036127b85760016101408201525b80610120015180156127cc57508061014001515b1561281b5780515160c08201516010546127f1926001600160a01b0390911691613c52565b604081015160a0820151601054612813926001600160a01b0390911691613c52565b600460208201525b60008281526004602090815260409091208251805182546001600160a01b0319166001600160a01b0390911617825591820151839290829060018201906128629082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682019061289f9082614a1f565b505050602082015160078201805460ff191660018360048111156128c5576128c561435c565b02179055506040820151600782018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560608401516008840180546001600160a01b03191691909316179091556080830151600983015560a0830151600a83015560c0830151600b83015560e0830151600c83015580830151600d830155610120830151600e90920180546101409094015161ffff1990941692151561ff001916929092179215150291909117905561297f82613cb1565b5050565b60606000806005805490506001600160401b038111156129a5576129a5614558565b6040519080825280602002602001820160405280156129de57816020015b6129cb6140bc565b8152602001906001900390816129c35790505b50905060005b6005548110156108875760006004600060058481548110612a0757612a07614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b03166101608301908152600182018054849291849161018085019190612a5d90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612a8990614928565b8015612ad65780601f10612aab57610100808354040283529160200191612ad6565b820191906000526020600020905b815481529060010190602001808311612ab957829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054612b1790614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612b4390614928565b8015612b905780601f10612b6557610100808354040283529160200191612b90565b820191906000526020600020905b815481529060010190602001808311612b7357829003601f168201915b505050919092525050508152600782015460209091019060ff166004811115612bbb57612bbb61435c565b6004811115612bcc57612bcc61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408401526009840154606080850191909152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff80821615158486015292900490911615156101209092019190915290820151919250878116911603612c8b5780838581518110612c7257612c72614912565b6020908102919091010152612c88600185614972565b93505b506001016129e4565b600460209081526000918252604091829020825160e0810190935280546001600160a01b0316835260018101805491939284929084019190612cd590614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612d0190614928565b8015612d4e5780601f10612d2357610100808354040283529160200191612d4e565b820191906000526020600020905b815481529060010190602001808311612d3157829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054612d8f90614928565b80601f0160208091040260200160405190810160405280929190818152602001828054612dbb90614928565b8015612e085780601f10612ddd57610100808354040283529160200191612e08565b820191906000526020600020905b815481529060010190602001808311612deb57829003601f168201915b50505091909252505050600782015460088301546009840154600a850154600b860154600c870154600d880154600e90980154969760ff808816986001600160a01b03610100998a9004811699981697818316929104168b565b670de0b6b3a764000081602001511015612eae5760405162461bcd60e51b815260206004820152600d60248201526c707269636520746f6f206c6f7760981b6044820152606401610f02565b6000816080015111612ef55760405162461bcd60e51b815260206004820152601060248201526f7175616e7469747920746f6f206c6f7760801b6044820152606401610f02565b6040805160e0810182523381528251602080830191825280850151838501528484015160608085019190915285015160808085019190915285015160a08085019190915285015160c084015260008054815260019182905293909320825181546001600160a01b0319166001600160a01b0390911617815590519192839290820190612f819082614a1f565b5060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c08201516006820190612fbe9082614a1f565b505060008054600280546001810182559083527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0181905591508061300283614add565b91905055505050565b60008080805b86518110156132bf57600087828151811061302e5761302e614912565b6020908102919091018101518051600090815260018084526040808320815160e0810190925280546001600160a01b0316825291820180549496509294909391929084019161307c90614928565b80601f01602080910402602001604051908101604052809291908181526020018280546130a890614928565b80156130f55780601f106130ca576101008083540402835291602001916130f5565b820191906000526020600020905b8154815290600101906020018083116130d857829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461313690614928565b80601f016020809104026020016040519081016040528092919081815260200182805461316290614928565b80156131af5780601f10613184576101008083540402835291602001916131af565b820191906000526020600020905b81548152906001019060200180831161319257829003601f168201915b5050505050815250509050600082602001511161321c5760405162461bcd60e51b815260206004820152602560248201527f6f72646572207175616e74697479206d75737420626520677265617465722074604482015264068616e20360dc1b6064820152608401610f02565b80516001600160a01b03166132655760405162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c1c9bd91d58dd608a1b6044820152606401610f02565b8060a00151816040015161327991906149ba565b6132839087614972565b9550613299888883606001518460800151613e18565b93506132a9848260a00151613ec1565b6132b39086614972565b94505050600101613011565b5093509350939050565b6132d1614076565b600082815260016020818152604092839020835160e0810190945280546001600160a01b0316845291820180549184019161330b90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461333790614928565b80156133845780601f1061335957610100808354040283529160200191613384565b820191906000526020600020905b81548152906001019060200180831161336757829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820180546133c590614928565b80601f01602080910402602001604051908101604052809291908181526020018280546133f190614928565b801561343e5780601f106134135761010080835404028352916020019161343e565b820191906000526020600020905b81548152906001019060200180831161342157829003601f168201915b5050505050815250509050919050565b6001600160a01b038116600090815260096020526040812054600e548110156134865780600e5461347f91906149a7565b9392505050565b50600092915050565b50919050565b60606000806005805490506001600160401b038111156134b7576134b7614558565b6040519080825280602002602001820160405280156134f057816020015b6134dd6140bc565b8152602001906001900390816134d55790505b50905060005b600554811015610887576000600460006005848154811061351957613519614912565b6000918252602080832090910154835282019290925260409081019091208151610240810190925280546001600160a01b0316610160830190815260018201805484929184916101808501919061356f90614928565b80601f016020809104026020016040519081016040528092919081815260200182805461359b90614928565b80156135e85780601f106135bd576101008083540402835291602001916135e8565b820191906000526020600020905b8154815290600101906020018083116135cb57829003601f168201915b505050505081526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461362990614928565b80601f016020809104026020016040519081016040528092919081815260200182805461365590614928565b80156136a25780601f10613677576101008083540402835291602001916136a2565b820191906000526020600020905b81548152906001019060200180831161368557829003601f168201915b505050919092525050508152600782015460209091019060ff1660048111156136cd576136cd61435c565b60048111156136de576136de61435c565b815260078201546001600160a01b0361010091829004811660208401526008840154811660408085019190915260098501546060850152600a8501546080850152600b85015460a0850152600c85015460c0850152600d85015460e0850152600e9094015460ff8082161515848601529290049091161515610120909201919091529082015191925087811691160361379d578083858151811061378457613784614912565b602090810291909101015261379a600185614972565b93505b506001016134f6565b336000908152600b602052604090205460ff166137f65760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd081cdd589cd8dc9a58995960921b6044820152606401610f02565b60006138013361344e565b600e5433600081815260096020526040902091909155601054919250613831916001600160a01b03169083613c52565b50565b600281815481106109f857600080fd5b336000908152600b602052604090205460ff16156138995760405162461bcd60e51b8152602060048201526012602482015271185b1c9958591e481cdd589cd8dc9a58995960721b6044820152606401610f02565b600e5433600090815260096020908152604080832093909355600b9052908120805460ff19166001908117909155600f8054919290916138da908490614972565b9091555050565b336000908152600b602052604090205460ff166139315760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd081cdd589cd8dc9a58995960921b6044820152606401610f02565b336000908152600b60205260408120805460ff19169055600f8054600192906138da9084906149a7565b6000818152600160208181526040808420815160e0810190925280546001600160a01b03168252928301805491939284019161399690614928565b80601f01602080910402602001604051908101604052809291908181526020018280546139c290614928565b8015613a0f5780601f106139e457610100808354040283529160200191613a0f565b820191906000526020600020905b8154815290600101906020018083116139f257829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054613a5090614928565b80601f0160208091040260200160405190810160405280929190818152602001828054613a7c90614928565b8015613ac95780601f10613a9e57610100808354040283529160200191613ac9565b820191906000526020600020905b815481529060010190602001808311613aac57829003601f168201915b505050505081525050905080600001516001600160a01b0316336001600160a01b031614613b395760405162461bcd60e51b815260206004820152601d60248201527f6f6e6c792076656e646f722063616e20637265617465206164766572740000006044820152606401610f02565b60008160a0015111613b855760405162461bcd60e51b815260206004820152601560248201527470726f64756374206e6f7420617661696c61626c6560581b6044820152606401610f02565b83600e6000828254613b979190614972565b90915550506040805160808101825233815260208082018581528284018881526060840188815260008881526007909452948320935184546001600160a01b0319166001600160a01b039091161784559051600180850191909155905160028401559251600390920191909155600680546008805480860182559084527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301819055909190613c47908490614972565b909155505050505050565b6040516001600160a01b0383811660248301526044820183905261131b91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613f0c565b6000805b600554811015613cf3578260058281548110613cd357613cd3614912565b906000526020600020015403613ceb57809150613cf3565b600101613cb5565b5060058054613d00614912565b906000526020600020015460058281548110613d1e57613d1e614912565b6000918252602090912001556005805480613d3b57613d3b614af6565b600190038181906000526020600020016000905590555050565b6000805b600254811015613d97578260028281548110613d7757613d77614912565b906000526020600020015403613d8f57809150613d97565b600101613d59565b5060028054613da4614912565b906000526020600020015460028281548110613dc257613dc2614912565b6000918252602090912001556002805480613d3b57613d3b614af6565b6040516001600160a01b0384811660248301528381166044830152606482018390526118b89186918216906323b872dd90608401613c7f565b604051637168390f60e01b815260048101859052602481018390526044810184905260648101829052600090670de0b6b3a76400009073__$79a631f2ec5f8a70b1623dafb918a3f53a$__90637168390f90608401602060405180830381865af4158015613e8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613eae9190614b0c565b613eb89190614b25565b95945050505050565b60008083600d54613ed291906149ba565b9050806103e8613ee285836149ba565b613eed9060026149ba565b613ef79190614b25565b613f019082614972565b925050505b92915050565b6000613f216001600160a01b03841683613f6f565b90508051600014158015613f46575080806020019051810190613f449190614985565b155b1561131b57604051635274afe760e01b81526001600160a01b0384166004820152602401610f02565b606061347f8383600084600080856001600160a01b03168486604051613f959190614b47565b60006040518083038185875af1925050503d8060008114613fd2576040519150601f19603f3d011682016040523d82523d6000602084013e613fd7565b606091505b5091509150613fe7868383613ff1565b9695505050505050565b606082614006576140018261404d565b61347f565b815115801561401d57506001600160a01b0384163b155b1561404657604051639996b31560e01b81526001600160a01b0385166004820152602401610f02565b508061347f565b80511561405d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518060e0016040528060006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200160008152602001606081525090565b6040518061016001604052806140d0614076565b81526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b50805461413e90614928565b6000825580601f1061414e575050565b601f01602090049060005260206000209081019061383191905b8082111561417c5760008155600101614168565b5090565b80356001600160a01b038116811461419757600080fd5b919050565b6000602082840312156141ae57600080fd5b61347f82614180565b60005b838110156141d25781810151838201526020016141ba565b50506000910152565b600081518084526141f38160208601602086016141b7565b601f01601f19169290920160200192915050565b60018060a01b0381511682526000602082015160e0602085015261422e60e08501826141db565b905060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015184820360c0860152613eb882826141db565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156142c857603f198786030184526142b3858351614207565b94506020938401939190910190600101614297565b50929695505050505050565b602080825282518282018190526000918401906040840190835b8181101561433857835180516001600160a01b03168452602080820151818601526040808301519086015260609182015191850191909152909301926080909201916001016142ee565b509095945050505050565b60006020828403121561435557600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061439057634e487b7160e01b600052602160045260246000fd5b9052565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156142c857603f198786030184528151805161016087526143e4610160880182614207565b905060208201516143f86020890182614372565b50604082015161441360408901826001600160a01b03169052565b50606082015161442e60608901826001600160a01b03169052565b506080820151608088015260a082015160a088015260c082015160c088015260e082015160e088015261010082015161010088015261012082015161447861012089018215159052565b50610140820151915061449061014088018315159052565b95505060209384019391909101906001016143bc565b600080604083850312156144b957600080fd5b823591506144c960208401614180565b90509250929050565b6001600160a01b038816815260e0602082018190526000906144f6908301896141db565b8760408401528660608401528560808401528460a084015282810360c084015261452081856141db565b9a9950505050505050505050565b6000806040838503121561454157600080fd5b61454a83614180565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561459057614590614558565b60405290565b60405160c081016001600160401b038111828210171561459057614590614558565b604051601f8201601f191681016001600160401b03811182821017156145e0576145e0614558565b604052919050565b6000806000606084860312156145fd57600080fd5b83356001600160401b0381111561461357600080fd5b8401601f8101861361462457600080fd5b80356001600160401b0381111561463d5761463d614558565b61464c60208260051b016145b8565b8082825260208201915060208360061b85010192508883111561466e57600080fd5b6020840193505b828410156146b6576040848a03121561468d57600080fd5b61469561456e565b84358152602080860135818301529083526040909401939190910190614675565b98602088013598506040909701359695505050505050565b600082601f8301126146df57600080fd5b81356001600160401b038111156146f8576146f8614558565b61470b601f8201601f19166020016145b8565b81815284602083860101111561472057600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561474f57600080fd5b614757614596565b905081356001600160401b0381111561476f57600080fd5b61477b848285016146ce565b8252506020828101359082015260408083013590820152606080830135908201526080808301359082015260a08201356001600160401b038111156147bf57600080fd5b6147cb848285016146ce565b60a08301525092915050565b600080604083850312156147ea57600080fd5b8235915060208301356001600160401b0381111561480757600080fd5b6148138582860161473d565b9150509250929050565b6101608152600061483261016083018e614207565b9050614841602083018d614372565b6001600160a01b039a8b1660408301529890991660608a0152608089019690965260a088019490945260c087019290925260e0860152610100850152151561012084015215156101409092019190915292915050565b6000602082840312156148a957600080fd5b81356001600160401b038111156148bf57600080fd5b6148cb8482850161473d565b949350505050565b60208152600061347f6020830184614207565b6000806000606084860312156148fb57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061493c57607f821691505b60208210810361348f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115613f0657613f0661495c565b60006020828403121561499757600080fd5b8151801515811461347f57600080fd5b81810381811115613f0657613f0661495c565b8082028115828204841417613f0657613f0661495c565b601f82111561131b57806000526020600020601f840160051c810160208510156149f85750805b601f840160051c820191505b81811015614a185760008155600101614a04565b5050505050565b81516001600160401b03811115614a3857614a38614558565b614a4c81614a468454614928565b846149d1565b6020601f821160018114614a805760008315614a685750848201515b600019600385901b1c1916600184901b178455614a18565b600084815260208120601f198516915b82811015614ab05787850151825560209485019460019092019101614a90565b5084821015614ace5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b600060018201614aef57614aef61495c565b5060010190565b634e487b7160e01b600052603160045260246000fd5b600060208284031215614b1e57600080fd5b5051919050565b600082614b4257634e487b7160e01b600052601260045260246000fd5b500490565b60008251614b598184602087016141b7565b919091019291505056fea26469706673582212203141084495fa07b9790337f02dc2ffabc3fffed7741f731a28478f69206e165f64736f6c634300081a0033",
      sourceMap:
        "449:15330:36:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1637:489;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4516:511;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;864:46::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;3552:25:37;;;3540:2;3525:18;864:46:36;3406:177:37;1012:45:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3849:14:37;;3842:22;3824:41;;3812:2;3797:18;1012:45:36;3684:187:37;916:25:36;;;;;-1:-1:-1;;;;;916:25:36;;;;;;-1:-1:-1;;;;;4040:32:37;;;4022:51;;4010:2;3995:18;916:25:36;3876:203:37;5308:90:36;5385:5;;-1:-1:-1;;;;;5385:5:36;5308:90;;715:25;;;;;;:::i;:::-;;:::i;947:58::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4027:483;;;;;;:::i;:::-;;:::i;3087:468::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1064:46::-;;1104:6;1064:46;;11160:338;;;;;;:::i;:::-;;:::i;:::-;;5702:145;;;;;;:::i;:::-;;:::i;10188:966::-;;;;;;:::i;:::-;;:::i;2132:488::-;;;;;;:::i;:::-;;:::i;8282:260::-;;;;;;:::i;:::-;;:::i;831:26::-;;;;;;:::i;:::-;;:::i;7284:336::-;;;;;;:::i;:::-;;:::i;558:43::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;5404:171::-;;;;;;:::i;:::-;;:::i;13682:254::-;;;;;;:::i;:::-;;:::i;8548:1634::-;;;;;;:::i;:::-;;:::i;7626:650::-;;;;;;:::i;:::-;;:::i;11504:963::-;;;;;;:::i;:::-;;:::i;2626:455::-;;;;;;:::i;:::-;;:::i;670:39::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;6639:639::-;;;;;;:::i;:::-;;:::i;5853:780::-;;;;;;:::i;:::-;;:::i;:::-;;;;14174:25:37;;;14230:2;14215:18;;14208:34;;;;14258:18;;;14251:34;14162:2;14147:18;5853:780:36;13972:319:37;1524:107:36;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1116:54::-;;1160:10;1116:54;;777:48;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;777:48:36;;;;;;;;;;;;-1:-1:-1;;;;;14810:32:37;;;14792:51;;14874:2;14859:18;;14852:34;;;;14902:18;;;14895:34;14960:2;14945:18;;14938:34;14779:3;14764:19;777:48:36;14561:417:37;5033:269:36;;;;;;:::i;:::-;;:::i;3561:460::-;;;;;;:::i;:::-;;:::i;13942:272::-;;;:::i;607:27::-;;;;;;:::i;:::-;;:::i;13157:266::-;;;:::i;13429:247::-;;;:::i;12473:678::-;;;;;;:::i;:::-;;:::i;1637:489::-;1702:16;1730:20;1760:26;1803:10;:17;;;;-1:-1:-1;;;;;1789:32:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;1760:61;;1836:9;1831:263;1855:10;:17;1851:21;;1831:263;;;1893:22;1918:8;:23;1927:10;1938:1;1927:13;;;;;;;;:::i;:::-;;;;;;;;;1918:23;;;;;;;;;;;1893:48;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1893:48:36;-1:-1:-1;;;;;1893:48:36;-1:-1:-1;;;;;1893:48:36;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1977:4;-1:-1:-1;;;;;1959:22:36;:7;:14;;;-1:-1:-1;;;;;1959:22:36;;1955:129;;2027:7;2001:9;2011:12;2001:23;;;;;;;;:::i;:::-;;;;;;;;;;:33;2052:17;2068:1;2052:17;;:::i;:::-;;;1955:129;-1:-1:-1;1874:3:36;;1831:263;;;-1:-1:-1;2110:9:36;1637:489;-1:-1:-1;;;1637:489:36:o;4516:511::-;4577:15;4604:19;4637:24;4677:9;:16;;;;-1:-1:-1;;;;;4664:30:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4664:30:36;;;;;;;;;;;;;;;;;4637:57;;4709:9;4704:292;4728:9;:16;4724:20;;4704:292;;;4765:20;4788:14;:28;4803:9;4813:1;4803:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;4788:28;;;;;;;;;;;;;;;4765:51;;;;;;;;;-1:-1:-1;;;;;4765:51:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4834:22:36;;;;;;:53;;;4886:1;4860:6;:23;;;:27;4834:53;4830:156;;;4931:6;4907:8;4916:11;4907:21;;;;;;;;:::i;:::-;;;;;;;;;;:30;4955:16;4970:1;4955:16;;:::i;:::-;;;4830:156;-1:-1:-1;4746:3:36;;4704:292;;715:25;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;715:25:36;:::o;4027:483::-;4091:15;4118:19;4151:24;4191:9;:16;;;;-1:-1:-1;;;;;4178:30:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4178:30:36;;;;;;;;;;;;;;;;;4151:57;;4223:9;4218:261;4242:9;:16;4238:20;;4218:261;;;4279:20;4302:14;:28;4317:9;4327:1;4317:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;4302:28;;;;;;;;;;;;;;;4279:51;;;;;;;;;-1:-1:-1;;;;;4279:51:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4348:22:36;;;;4344:125;;4414:6;4390:8;4399:11;4390:21;;;;;;;;:::i;:::-;;;;;;;;;;:30;4438:16;4453:1;4438:16;;:::i;:::-;;;4344:125;-1:-1:-1;4260:3:36;;4218:261;;3087:468;3153:14;3179:18;3211:22;3248:8;:15;;;;-1:-1:-1;;;;;3236:28:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;3211:53;;3279:9;3274:251;3298:8;:15;3294:19;;3274:251;;;3334:18;3355:6;:19;3362:8;3371:1;3362:11;;;;;;;;:::i;:::-;;;;;;;;;;;;;3355:19;;;;;;;;;;;;;;;3334:40;;;;;;;;;;-1:-1:-1;;;;;3334:40:36;;;;;;;;;;;;;;;3355:19;;3334:40;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3334:40:36;;;;-1:-1:-1;;;3334:40:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;3334:40:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3392:13;;:20;3334:40;;-1:-1:-1;3392:28:36;;;;;;3388:127;;3462:5;3440:7;3448:10;3440:19;;;;;;;;:::i;:::-;;;;;;;;;;:27;3485:15;3499:1;3485:15;;:::i;:::-;;;3388:127;-1:-1:-1;3315:3:36;;3274:251;;11160:338;11261:19;11283:10;;;:6;:10;;;;;11325:13;;;;;;;-1:-1:-1;;;;;11325:13:36;11311:10;:27;11303:36;;;;;;11373:18;11357:12;;;;;;:34;;;;;;;;:::i;:::-;;11349:96;;;;-1:-1:-1;;;11349:96:36;;16435:2:37;11349:96:36;;;16417:21:37;16474:2;16454:18;;;16447:30;16513:34;16493:18;;;16486:62;-1:-1:-1;;;16564:18:37;;;16557:47;16621:19;;11349:96:36;;;;;;;;;11455:12;;:36;;-1:-1:-1;;11455:36:36;11470:21;11455:36;;;-1:-1:-1;11160:338:36:o;5702:145::-;5771:10;;-1:-1:-1;;;;;5763:18:36;;;5771:10;;5763:18;5755:49;;;;-1:-1:-1;;;5755:49:36;;16853:2:37;5755:49:36;;;16835:21:37;16892:2;16872:18;;;16865:30;-1:-1:-1;;;16911:18:37;;;16904:48;16969:18;;5755:49:36;16651:342:37;5755:49:36;-1:-1:-1;;;;;5814:19:36;;;;;:13;:19;;;;;:26;;-1:-1:-1;;5814:26:36;5836:4;5814:26;;;5702:145::o;10188:966::-;10322:18;10343:10;;;:6;:10;;;;;;10322:31;;;;;;;;;;-1:-1:-1;;;;;10322:31:36;;;;;;;;;;;;;;;10343:10;;10322:31;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;10322:31:36;;;;-1:-1:-1;;;10322:31:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;10322:31:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10431:11;;;;10322:31;;-1:-1:-1;;;10417:10:36;:25;;;;:63;;-1:-1:-1;10460:13:36;;:20;-1:-1:-1;;;;;10446:34:36;:10;:34;10417:63;10396:154;;;;-1:-1:-1;;;10396:154:36;;17200:2:37;10396:154:36;;;17182:21:37;17239:2;17219:18;;;17212:30;17278:34;17258:18;;;17251:62;-1:-1:-1;;;17329:18:37;;;17322:42;17381:19;;10396:154:36;16998:408:37;10396:154:36;10581:18;10565:5;:12;;;:34;;;;;;;;:::i;:::-;;:89;;;;;10638:15;1104:6;10604:5;:15;;;:31;;;;:::i;:::-;:49;10565:89;10561:137;;;-1:-1:-1;10683:4:36;10561:137;10727:21;10711:5;:12;;;:37;;;;;;;;:::i;:::-;;:82;;;;;10778:15;10752:5;:23;;;:41;10711:82;10707:130;;;-1:-1:-1;10822:4:36;10707:130;10864:13;;:20;-1:-1:-1;;;;;10850:34:36;:10;:34;10846:82;;-1:-1:-1;10913:4:36;10846:82;10941:10;10937:186;;;10982:21;10967:12;;;:36;11067:11;;;;11094:17;;;;11080:11;;;;11048:64;;11067:11;11080:31;;;:::i;:::-;11048:5;;-1:-1:-1;;;;;11048:5:36;;:64;:18;:64::i;:::-;11132:15;11144:2;11132:11;:15::i;:::-;10230:924;;10188:966;:::o;2132:488::-;2196:16;2224:20;2254:26;2297:10;:17;;;;-1:-1:-1;;;;;2283:32:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;2254:61;;2330:9;2325:263;2349:10;:17;2345:21;;2325:263;;;2387:22;2412:8;:23;2421:10;2432:1;2421:13;;;;;;;;:::i;:::-;;;;;;;;;2412:23;;;;;;;;;;;2387:48;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2387:48:36;-1:-1:-1;;;;;2387:48:36;-1:-1:-1;;;;;2387:48:36;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:4;-1:-1:-1;;;;;2453:22:36;:7;:14;;;-1:-1:-1;;;;;2453:22:36;;2449:129;;2521:7;2495:9;2505:12;2495:23;;;;;;;;:::i;:::-;;;;;;;;;;:33;2546:17;2562:1;2546:17;;:::i;:::-;;;2449:129;-1:-1:-1;2368:3:36;;2325:263;;8282:260;8383:19;8405:10;;;:6;:10;;;;;8433:20;;-1:-1:-1;;;;;8433:20:36;8457:10;8433:34;8425:77;;;;-1:-1:-1;;;8425:77:36;;17613:2:37;8425:77:36;;;17595:21:37;17652:2;17632:18;;;17625:30;17691:32;17671:18;;;17664:60;17741:18;;8425:77:36;17411:354:37;8425:77:36;8512:13;;:23;;-1:-1:-1;;;;;8512:23:36;;;;;-1:-1:-1;;;;;;8512:23:36;;;;;;;;;-1:-1:-1;8282:260:36:o;831:26::-;;;;;;;;;;;;7284:336;7383:22;7408:12;;;:8;:12;;;;;;;;7383:37;;;;;;;;;;-1:-1:-1;;;;;7383:37:36;;;;;;;;;;7408:12;7383:37;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;7383:37:36;;;;-1:-1:-1;;7438:14:36;;7383:37;;-1:-1:-1;;;;;;;7438:28:36;7456:10;7438:28;7430:71;;;;-1:-1:-1;;;7430:71:36;;17972:2:37;7430:71:36;;;17954:21:37;18011:2;17991:18;;;17984:30;18050:32;18030:18;;;18023:60;18100:18;;7430:71:36;17770:354:37;7430:71:36;7535:1;7519:7;:13;;;:17;7511:46;;;;-1:-1:-1;;;7511:46:36;;18331:2:37;7511:46:36;;;18313:21:37;18370:2;18350:18;;;18343:30;-1:-1:-1;;;18389:18:37;;;18382:46;18445:18;;7511:46:36;18129:340:37;7511:46:36;7567:17;7581:2;7567:13;:17::i;:::-;7601:12;;;;:8;:12;;;;;;;7594:19;;-1:-1:-1;;;;;;7594:19:36;;;7601:12;;7594:19;;;;7601:12;7594:19;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;7328:292;7284:336;:::o;558:43::-;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;558:43:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5404:171::-;5494:10;;-1:-1:-1;;;;;5494:10:36;5480;:24;5472:55;;;;-1:-1:-1;;;5472:55:36;;16853:2:37;5472:55:36;;;16835:21:37;16892:2;16872:18;;;16865:30;-1:-1:-1;;;16911:18:37;;;16904:48;16969:18;;5472:55:36;16651:342:37;5472:55:36;5537:5;;:31;;-1:-1:-1;;;5537:31:36;;-1:-1:-1;;;;;18666:32:37;;;5537:31:36;;;18648:51:37;18715:18;;;18708:34;;;5537:5:36;;;;:14;;18621:18:37;;5537:31:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;13682:254::-;13778:10;;-1:-1:-1;;;;;13778:10:36;13764;:24;13756:75;;;;-1:-1:-1;;;13756:75:36;;19237:2:37;13756:75:36;;;19219:21:37;19276:2;19256:18;;;19249:30;19315:34;19295:18;;;19288:62;-1:-1:-1;;;19366:18:37;;;19359:36;19412:19;;13756:75:36;19035:402:37;13756:75:36;13841:21;13865:26;;;:14;:26;;;;;13901:23;;;:28;;13865:26;;13928:1;;13901:28;;13928:1;;13901:28;:::i;:::-;;;;-1:-1:-1;;;;;13682:254:36:o;8548:1634::-;8673:19;;8702:1401;8726:6;:13;8722:1;:17;8702:1401;;;8760:32;8795:6;8802:1;8795:9;;;;;;;;:::i;:::-;;;;;;;;;;;;8852:15;;8818:22;8843:25;;;:8;:25;;;;;;;8818:50;;;;;;;;;;-1:-1:-1;;;;;8818:50:36;;;;;;;;8795:9;;-1:-1:-1;8818:22:36;;:50;;8843:25;;8818:50;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8907:1;8891:7;:13;;;:17;8883:52;;;;-1:-1:-1;;;8883:52:36;;19777:2:37;8883:52:36;;;19759:21:37;19816:2;19796:18;;;19789:30;-1:-1:-1;;;19835:18:37;;;19828:52;19897:18;;8883:52:36;19575:346:37;8883:52:36;8957:14;;8975:10;-1:-1:-1;;;;;8957:28:36;;;;8949:68;;;;-1:-1:-1;;;8949:68:36;;20128:2:37;8949:68:36;;;20110:21:37;20167:2;20147:18;;;20140:30;20206:29;20186:18;;;20179:57;20253:18;;8949:68:36;19926:351:37;8949:68:36;9058:12;:21;;;9039:7;:16;;;:40;9031:78;;;;-1:-1:-1;;;9031:78:36;;20484:2:37;9031:78:36;;;20466:21:37;20523:2;20503:18;;;20496:30;20562:27;20542:18;;;20535:55;20607:18;;9031:78:36;20282:349:37;9031:78:36;9160:21;;;9179:1;9160:21;;;;;;;;;9124:33;;9160:21;;;;-1:-1:-1;;;;;;;;;;;;;;;;;9160:21:36;;;;;;;;;;;;;;;9124:57;;9212:12;9195:11;9207:1;9195:14;;;;;;;;:::i;:::-;;;;;;:29;;;;9239:14;9255:16;9273;9293:35;9305:11;9318:3;9323:4;9293:11;:35::i;:::-;9238:90;;-1:-1:-1;9238:90:36;-1:-1:-1;9238:90:36;-1:-1:-1;9357:17:36;9238:90;;9357:17;:::i;:::-;9342:32;;;;:::i;:::-;;;9389:18;9410:498;;;;;;;;9443:7;9410:498;;;;9476:18;9410:498;;;;;;;;:::i;:::-;;;9529:1;9410:498;;;;;;;;9556:10;9410:498;;;;9594:21;;;9410:498;;;;;;;;;;;;;;;;9714:15;9410:498;;;;;;9785:28;1160:10;9785:8;:28;:::i;:::-;9766:48;;:15;:48;:::i;:::-;9410:498;;9850:5;9410:498;;;;;;;;;;;9922:16;;;:21;;9389:519;;-1:-1:-1;9410:498:36;;9922:21;;9410:498;;9922:21;:::i;:::-;;;-1:-1:-1;9966:15:36;;9957:25;;;;:8;:25;;;;;;;;:35;;;;-1:-1:-1;;;;;;9957:35:36;-1:-1:-1;;;;;9957:35:36;;;;;;;;;;;;:25;:35;;;;;;;:::i;:::-;-1:-1:-1;9957:35:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;10014:7:36;;10007:15;;;;:6;:15;;;;;;;;:23;;;;;;-1:-1:-1;;;;;;10007:23:36;-1:-1:-1;;;;;10007:23:36;;;;;;;;;;;;-1:-1:-1;10007:15:36;;:23;:15;;-1:-1:-1;10007:23:36;;;;;;;:::i;:::-;-1:-1:-1;10007:23:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;10007:23:36;;;;;;;;;-1:-1:-1;;10007:23:36;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;10007:23:36;;;;;;;;;-1:-1:-1;;;;;;10007:23:36;;-1:-1:-1;;;;;10007:23:36;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;10007:23:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10007:23:36;;;;;;-1:-1:-1;;10007:23:36;;;;;;;;;;;;;;;10058:7;;;10044:8;:22;;-1:-1:-1;10044:22:36;;;;;-1:-1:-1;10044:22:36;;;;;;;;;;-1:-1:-1;10058:7:36;10080:12;;-1:-1:-1;;10080:12:36;:::i;:::-;;;;-1:-1:-1;;8741:3:36;;;;;-1:-1:-1;8702:1401:36;;-1:-1:-1;;;;;;8702:1401:36;;-1:-1:-1;10113:5:36;;:62;;-1:-1:-1;;;;;10113:5:36;10136:10;10156:4;10163:11;10113:22;:62::i;7626:650::-;7807:22;7832:12;;;:8;:12;;;;;;;;7807:37;;;;;;;;;;-1:-1:-1;;;;;7807:37:36;;;;;;;;;;7832:12;7807:37;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;7807:37:36;;;;-1:-1:-1;;7862:14:36;;7807:37;;-1:-1:-1;;;;;;;7862:28:36;7880:10;7862:28;7854:71;;;;-1:-1:-1;;;7854:71:36;;23135:2:37;7854:71:36;;;23117:21:37;23174:2;23154:18;;;23147:30;23213:32;23193:18;;;23186:60;23263:18;;7854:71:36;22933:354:37;7854:71:36;7964:269;;;;;;;;7994:10;7964:269;;8024:13;;7964:269;;;;;;;8058:14;;;;7964:269;;;;8091:12;;;;7964:269;;;;;;;;8123:13;;;7964:269;;;;;;;;8160:17;;;7964:269;;;;;;;;8203:19;;;7964:269;;;;-1:-1:-1;8243:12:36;;;:8;:12;;;;;;;;:26;;;;-1:-1:-1;;;;;;8243:26:36;-1:-1:-1;;;;;8243:26:36;;;;;;;;7964:269;;;;8243:26;;;;;;;;:::i;:::-;-1:-1:-1;8243:26:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;;7626:650:36:o;11504:963::-;11650:18;11671:10;;;:6;:10;;;;;;11650:31;;;;;;;;;;-1:-1:-1;;;;;11650:31:36;;;;;;;;;;;;;;;11671:10;;11650:31;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;11650:31:36;;;;-1:-1:-1;;;11650:31:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;11650:31:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11713:13;;;;11650:31;;-1:-1:-1;11699:10:36;:27;;;;:56;;;11744:5;:11;;;-1:-1:-1;;;;;11730:25:36;:10;-1:-1:-1;;;;;11730:25:36;;11699:56;11691:110;;;;-1:-1:-1;;;11691:110:36;;23494:2:37;11691:110:36;;;23476:21:37;23533:2;23513:18;;;23506:30;23572:34;23552:18;;;23545:62;-1:-1:-1;;;23623:18:37;;;23616:39;23672:19;;11691:110:36;23292:405:37;11691:110:36;11835:21;11819:5;:12;;;:37;;;;;;;;:::i;:::-;;11811:89;;;;-1:-1:-1;;;11811:89:36;;23904:2:37;11811:89:36;;;23886:21:37;23943:2;23923:18;;;23916:30;23982:34;23962:18;;;23955:62;-1:-1:-1;;;24033:18:37;;;24026:37;24080:19;;11811:89:36;23702:403:37;11811:89:36;11928:13;;;;-1:-1:-1;;;;;11914:27:36;:10;:27;11910:175;;11982:4;11957:22;;;:29;11910:175;;;12021:11;;;;-1:-1:-1;;;;;12007:25:36;:10;:25;12003:82;;12070:4;12048:19;;;:26;12003:82;12099:5;:22;;;:45;;;;;12125:5;:19;;;12099:45;12095:313;;;12212:13;;:20;12234:11;;;;12193:5;;:53;;-1:-1:-1;;;;;12193:5:36;;;;:18;:53::i;:::-;12313:13;;;;12328:17;;;;12294:5;;:52;;-1:-1:-1;;;;;12294:5:36;;;;:18;:52::i;:::-;12376:21;12361:12;;;:36;12095:313;12417:10;;;;:6;:10;;;;;;;;:18;;;;;;-1:-1:-1;;;;;;12417:18:36;-1:-1:-1;;;;;12417:18:36;;;;;;;;;;;;;:10;;-1:-1:-1;12417:18:36;;;;;;;:::i;:::-;-1:-1:-1;12417:18:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;12417:18:36;;;;;;;;;-1:-1:-1;;12417:18:36;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;12417:18:36;;;;;;;;;-1:-1:-1;;;;;;12417:18:36;;-1:-1:-1;;;;;12417:18:36;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;12417:18:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12417:18:36;;;;;;-1:-1:-1;;12417:18:36;;;;;;;;;;;;;;;12445:15;12457:2;12445:11;:15::i;:::-;11547:920;11504:963;:::o;2626:455::-;2688:14;2714:18;2746:22;2783:8;:15;;;;-1:-1:-1;;;;;2771:28:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;2746:53;;2814:9;2809:242;2833:8;:15;2829:19;;2809:242;;;2869:18;2890:6;:19;2897:8;2906:1;2897:11;;;;;;;;:::i;:::-;;;;;;;;;;;;;2890:19;;;;;;;;;;;;;;;2869:40;;;;;;;;;;-1:-1:-1;;;;;2869:40:36;;;;;;;;;;;;;;;2890:19;;2869:40;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2869:40:36;;;;-1:-1:-1;;;2869:40:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;2869:40:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2927:11;;;;2869:40;;-1:-1:-1;2927:19:36;;;;;;2923:118;;2988:5;2966:7;2974:10;2966:19;;;;;;;;:::i;:::-;;;;;;;;;;:27;3011:15;3025:1;3011:15;;:::i;:::-;;;2923:118;-1:-1:-1;2850:3:36;;2809:242;;670:39;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;670:39:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;670:39:36;;;;-1:-1:-1;;;670:39:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;670:39:36;;;;;;;;;;;;;;;;;;;:::o;6639:639::-;6790:4;6773:7;:13;;;:21;;6765:47;;;;-1:-1:-1;;;6765:47:36;;24312:2:37;6765:47:36;;;24294:21:37;24351:2;24331:18;;;24324:30;-1:-1:-1;;;24370:18:37;;;24363:43;24423:18;;6765:47:36;24110:337:37;6765:47:36;6849:1;6830:7;:16;;;:20;6822:49;;;;-1:-1:-1;;;6822:49:36;;24654:2:37;6822:49:36;;;24636:21:37;24693:2;24673:18;;;24666:30;-1:-1:-1;;;24712:18:37;;;24705:46;24768:18;;6822:49:36;24452:340:37;6822:49:36;6909:263;;;;;;;;6939:10;6909:263;;6969:12;;6909:263;;;;;;;7002:13;;;;6909:263;;;;7034:11;;;;6909:263;;;;;;;;7065:12;;;6909:263;;;;;;;;7101:16;;;6909:263;;;;;;;;7143:18;;;6909:263;;;;-1:-1:-1;7191:9:36;;7182:19;;:8;:19;;;;;;;;:32;;;;-1:-1:-1;;;;;;7182:32:36;-1:-1:-1;;;;;7182:32:36;;;;;;;;6909:263;;;;7182:32;;;;;;;;:::i;:::-;-1:-1:-1;7182:32:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;7240:9:36;;;7224:10;:26;;;;;;;;;;;;;;;7240:9;-1:-1:-1;7240:9:36;7260:11;7240:9;7260:11;:::i;:::-;;;;;;6700:578;6639:639;:::o;5853:780::-;5975:19;;;;6051:576;6075:7;:14;6071:1;:18;6051:576;;;6110:32;6145:7;6153:1;6145:10;;;;;;;;:::i;:::-;;;;;;;;;;;;6203:15;;6169:22;6194:25;;;:8;:25;;;;;;;6169:50;;;;;;;;;;-1:-1:-1;;;;;6169:50:36;;;;;;;;6145:10;;-1:-1:-1;6169:22:36;;:50;;6194:25;;6169:50;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6266:1;6242:12;:21;;;:25;6234:75;;;;-1:-1:-1;;;6234:75:36;;25139:2:37;6234:75:36;;;25121:21:37;25178:2;25158:18;;;25151:30;25217:34;25197:18;;;25190:62;-1:-1:-1;;;25268:18:37;;;25261:35;25313:19;;6234:75:36;24937:401:37;6234:75:36;6331:14;;-1:-1:-1;;;;;6331:28:36;6323:56;;;;-1:-1:-1;;;6323:56:36;;25545:2:37;6323:56:36;;;25527:21:37;25584:2;25564:18;;;25557:30;-1:-1:-1;;;25603:18:37;;;25596:45;25658:18;;6323:56:36;25343:339:37;6323:56:36;6424:7;:16;;;6408:7;:13;;;:32;;;;:::i;:::-;6393:47;;;;:::i;:::-;;;6465:72;6500:3;6505:4;6511:7;:11;;;6524:7;:12;;;6465:34;:72::i;:::-;6454:83;;6568:48;6589:8;6599:7;:16;;;6568:20;:48::i;:::-;6551:65;;;;:::i;:::-;;-1:-1:-1;;;6091:3:36;;6051:576;;;;5853:780;;;;;;;:::o;1524:107::-;1579:14;;:::i;:::-;1612:12;;;;:8;:12;;;;;;;;;1605:19;;;;;;;;;;-1:-1:-1;;;;;1605:19:36;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1524:107;;;:::o;5033:269::-;-1:-1:-1;;;;;5138:17:36;;5096:7;5138:17;;;:11;:17;;;;;;5169:12;;:27;-1:-1:-1;5165:131:36;;;5234:12;5219;;:27;;;;:::i;:::-;5212:34;5033:269;-1:-1:-1;;;5033:269:36:o;5165:131::-;-1:-1:-1;5284:1:36;;5033:269;-1:-1:-1;;5033:269:36:o;5165:131::-;5105:197;5033:269;;;:::o;3561:460::-;3626:14;3652:18;3684:22;3721:8;:15;;;;-1:-1:-1;;;;;3709:28:36;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;3684:53;;3752:9;3747:244;3771:8;:15;3767:19;;3747:244;;;3807:18;3828:6;:19;3835:8;3844:1;3835:11;;;;;;;;:::i;:::-;;;;;;;;;;;;;3828:19;;;;;;;;;;;;;;;3807:40;;;;;;;;;;-1:-1:-1;;;;;3807:40:36;;;;;;;;;;;;;;;3828:19;;3807:40;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3807:40:36;;;;-1:-1:-1;;;3807:40:36;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;3807:40:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3865:13;;;;3807:40;;-1:-1:-1;3865:21:36;;;;;;3861:120;;3928:5;3906:7;3914:10;3906:19;;;;;;;;:::i;:::-;;;;;;;;;;:27;3951:15;3965:1;3951:15;;:::i;:::-;;;3861:120;-1:-1:-1;3788:3:36;;3747:244;;13942:272;14026:10;13999:38;;;;:26;:38;;;;;;;;13991:65;;;;-1:-1:-1;;;13991:65:36;;25889:2:37;13991:65:36;;;25871:21:37;25928:2;25908:18;;;25901:30;-1:-1:-1;;;25947:18:37;;;25940:44;26001:18;;13991:65:36;25687:338:37;13991:65:36;14066:13;14082:30;14101:10;14082:18;:30::i;:::-;14148:12;;14134:10;14122:23;;;;:11;:23;;;;;:38;;;;14170:5;;14066:46;;-1:-1:-1;14170:37:36;;-1:-1:-1;;;;;14170:5:36;;14066:46;14170:18;:37::i;:::-;13981:233;13942:272::o;607:27::-;;;;;;;;;;;;13157:266;13242:10;13215:38;;;;:26;:38;;;;;;;;13214:39;13206:70;;;;-1:-1:-1;;;13206:70:36;;26232:2:37;13206:70:36;;;26214:21:37;26271:2;26251:18;;;26244:30;-1:-1:-1;;;26290:18:37;;;26283:48;26348:18;;13206:70:36;26030:342:37;13206:70:36;13312:12;;13298:10;13286:23;;;;:11;:23;;;;;;;;:38;;;;13334:26;:38;;;;;:45;;-1:-1:-1;;13334:45:36;13375:4;13334:45;;;;;;13389:22;:27;;13375:4;;13389:22;;:27;;13375:4;;13389:27;:::i;:::-;;;;-1:-1:-1;;13157:266:36:o;13429:247::-;13515:10;13488:38;;;;:26;:38;;;;;;;;13480:65;;;;-1:-1:-1;;;13480:65:36;;25889:2:37;13480:65:36;;;25871:21:37;25928:2;25908:18;;;25901:30;-1:-1:-1;;;25947:18:37;;;25940:44;26001:18;;13480:65:36;25687:338:37;13480:65:36;13613:10;13627:5;13586:38;;;:26;:38;;;;;:46;;-1:-1:-1;;13586:46:36;;;13642:22;:27;;13586:46;;13627:5;13642:27;;13586:46;;13642:27;:::i;12473:678::-;12590:22;12615:20;;;:8;:20;;;;;;;;12590:45;;;;;;;;;;-1:-1:-1;;;;;12590:45:36;;;;;;;;;;12615:20;12590:45;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12721:7;:14;;;-1:-1:-1;;;;;12707:28:36;:10;-1:-1:-1;;;;;12707:28:36;;12699:70;;;;-1:-1:-1;;;12699:70:36;;26579:2:37;12699:70:36;;;26561:21:37;26618:2;26598:18;;;26591:30;26657:31;26637:18;;;26630:59;26706:18;;12699:70:36;26377:353:37;12699:70:36;12806:1;12787:7;:16;;;:20;12779:54;;;;-1:-1:-1;;;12779:54:36;;26937:2:37;12779:54:36;;;26919:21:37;26976:2;26956:18;;;26949:30;-1:-1:-1;;;26995:18:37;;;26988:51;27056:18;;12779:54:36;26735:345:37;12779:54:36;12859:13;12843:12;;:29;;;;;;;:::i;:::-;;;;-1:-1:-1;;12911:176:36;;;;;;;;12941:10;12911:176;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12882:26:36;;;:14;:26;;;;;;:205;;;;-1:-1:-1;;;;;;12882:205:36;-1:-1:-1;;;;;12882:205:36;;;;;;;;-1:-1:-1;12882:205:36;;;;;;;;;;;;;;;;;;;;;;;13112:8;;;13097:9;:24;;;;;;;;;;;;;;;13112:8;;-1:-1:-1;13131:13:36;;-1:-1:-1;;13131:13:36;:::i;:::-;;;;-1:-1:-1;;;;;;12473:678:36:o;1303:160:24:-;1412:43;;-1:-1:-1;;;;;18666:32:37;;;1412:43:24;;;18648:51:37;18715:18;;;18708:34;;;1385:71:24;;1405:5;;1427:14;;;;;18621:18:37;;1412:43:24;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1412:43:24;;;;;;;;;;;1385:19;:71::i;14799:315:36:-;14850:13;;14873:158;14897:8;:15;14893:19;;14873:158;;;14952:2;14937:8;14946:1;14937:11;;;;;;;;:::i;:::-;;;;;;;;;:17;14933:88;;14982:1;14974:9;;15001:5;;14933:88;14914:3;;14873:158;;;-1:-1:-1;15058:8:36;15067:15;;15058:25;;:::i;:::-;;;;;;;;;15040:8;15049:5;15040:15;;;;;;;;:::i;:::-;;;;;;;;;;:43;15093:8;:14;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;14840:274;14799:315;:::o;15120:329::-;15173:13;;15196:162;15220:10;:17;15216:21;;15196:162;;;15279:2;15262:10;15273:1;15262:13;;;;;;;;:::i;:::-;;;;;;;;;:19;15258:90;;15309:1;15301:9;;15328:5;;15258:90;15239:3;;15196:162;;;-1:-1:-1;15387:10:36;15398:17;;15387:29;;:::i;:::-;;;;;;;;;15367:10;15378:5;15367:17;;;;;;;;:::i;:::-;;;;;;;;;;:49;15426:10;:16;;;;;;;:::i;1702:188:24:-;1829:53;;-1:-1:-1;;;;;27437:32:37;;;1829:53:24;;;27419:51:37;27506:32;;;27486:18;;;27479:60;27555:18;;;27548:34;;;1802:81:24;;1822:5;;1844:18;;;;;27392::37;;1829:53:24;27217:371:37;14273:241:36;14453:43;;-1:-1:-1;;;14453:43:36;;;;;27824:25:37;;;27865:18;;;27858:34;;;27908:18;;;27901:34;;;27951:18;;;27944:34;;;14415:7:36;;14500;;14453:9;;:19;;27796::37;;14453:43:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;14445:62;;;;:::i;:::-;14438:69;14273:241;-1:-1:-1;;;;;14273:241:36:o;14520:273::-;14608:7;14627:20;14669:8;14650:16;;:27;;;;:::i;:::-;14627:50;-1:-1:-1;14627:50:36;14761:4;14731:23;14746:8;14627:50;14731:23;:::i;:::-;:27;;14757:1;14731:27;:::i;:::-;:34;;;;:::i;:::-;14723:43;;;;:::i;:::-;;-1:-1:-1;;;14520:273:36;;;;;:::o;4059:629:24:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:24;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:24;;-1:-1:-1;;;;;4040:32:37;;4631:40:24;;;4022:51:37;3995:18;;4631:40:24;3876:203:37;2705:151:25;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:25;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:25:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:25;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:25;;-1:-1:-1;;;;;4040:32:37;;5121:24:25;;;4022:51:37;3995:18;;5121:24:25;3876:203:37;5041:119:25;-1:-1:-1;5180:10:25;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:25;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:173:37:-;82:20;;-1:-1:-1;;;;;131:31:37;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;492:250::-;577:1;587:113;601:6;598:1;595:13;587:113;;;677:11;;;671:18;658:11;;;651:39;623:2;616:10;587:113;;;-1:-1:-1;;734:1:37;716:16;;709:27;492:250::o;747:271::-;789:3;827:5;821:12;854:6;849:3;842:19;870:76;939:6;932:4;927:3;923:14;916:4;909:5;905:16;870:76;:::i;:::-;1000:2;979:15;-1:-1:-1;;975:29:37;966:39;;;;1007:4;962:50;;747:271;-1:-1:-1;;747:271:37:o;1023:662::-;1138:1;1134;1129:3;1125:11;1121:19;1113:5;1107:12;1103:38;1098:3;1091:51;1073:3;1188:4;1181:5;1177:16;1171:23;1226:4;1219;1214:3;1210:14;1203:28;1252:47;1293:4;1288:3;1284:14;1270:12;1252:47;:::i;:::-;1240:59;;1348:4;1341:5;1337:16;1331:23;1324:4;1319:3;1315:14;1308:47;1404:4;1397:5;1393:16;1387:23;1380:4;1375:3;1371:14;1364:47;1460:4;1453:5;1449:16;1443:23;1436:4;1431:3;1427:14;1420:47;1516:4;1509:5;1505:16;1499:23;1492:4;1487:3;1483:14;1476:47;1571:4;1564:5;1560:16;1554:23;1619:3;1613:4;1609:14;1602:4;1597:3;1593:14;1586:38;1640:39;1674:4;1658:14;1640:39;:::i;1690:822::-;1884:4;1932:2;1921:9;1917:18;1962:2;1951:9;1944:21;1985:6;2020;2014:13;2051:6;2043;2036:22;2089:2;2078:9;2074:18;2067:25;;2151:2;2141:6;2138:1;2134:14;2123:9;2119:30;2115:39;2101:53;;2189:2;2181:6;2177:15;2210:1;2220:263;2234:6;2231:1;2228:13;2220:263;;;2327:2;2323:7;2311:9;2303:6;2299:22;2295:36;2290:3;2283:49;2355:48;2396:6;2387;2381:13;2355:48;:::i;:::-;2345:58;-1:-1:-1;2438:2:37;2461:12;;;;2426:15;;;;;2256:1;2249:9;2220:263;;;-1:-1:-1;2500:6:37;;1690:822;-1:-1:-1;;;;;;1690:822:37:o;2517:884::-;2757:2;2769:21;;;2839:13;;2742:18;;;2861:22;;;2709:4;;2940:15;;;2914:2;2899:18;;;2709:4;2983:392;2997:6;2994:1;2991:13;2983:392;;;3056:13;;3098:9;;-1:-1:-1;;;;;3094:35:37;3082:48;;3178:2;3170:11;;;3164:18;3150:12;;;3143:40;3231:2;3223:11;;;3217:18;3203:12;;;3196:40;3286:4;3278:13;;;3272:20;3256:14;;;3249:44;;;;3350:15;;;;3322:4;3313:14;;;;3126:1;3012:9;2983:392;;;-1:-1:-1;3392:3:37;;2517:884;-1:-1:-1;;;;;2517:884:37:o;4084:226::-;4143:6;4196:2;4184:9;4175:7;4171:23;4167:32;4164:52;;;4212:1;4209;4202:12;4164:52;-1:-1:-1;4257:23:37;;4084:226;-1:-1:-1;4084:226:37:o;4315:127::-;4376:10;4371:3;4367:20;4364:1;4357:31;4407:4;4404:1;4397:15;4431:4;4428:1;4421:15;4447:239;4530:1;4523:5;4520:12;4510:143;;4575:10;4570:3;4566:20;4563:1;4556:31;4610:4;4607:1;4600:15;4638:4;4635:1;4628:15;4510:143;4662:18;;4447:239::o;4691:1888::-;4881:4;4929:2;4918:9;4914:18;4959:2;4948:9;4941:21;4982:6;5017;5011:13;5048:6;5040;5033:22;5086:2;5075:9;5071:18;5064:25;;5148:2;5138:6;5135:1;5131:14;5120:9;5116:30;5112:39;5098:53;;5186:2;5178:6;5174:15;5207:1;5217:1333;5231:6;5228:1;5225:13;5217:1333;;;5324:2;5320:7;5308:9;5300:6;5296:22;5292:36;5287:3;5280:49;5358:6;5352:13;5404:2;5398:9;5435:6;5427;5420:22;5469:60;5521:6;5513;5509:19;5495:12;5469:60;:::i;:::-;5455:74;;5578:2;5574;5570:11;5564:18;5595:60;5651:2;5643:6;5639:15;5623:14;5595:60;:::i;:::-;;5704:2;5700;5696:11;5690:18;5721:51;5768:2;5760:6;5756:15;5740:14;-1:-1:-1;;;;;449:31:37;437:44;;383:104;5721:51;;5821:4;5817:2;5813:13;5807:20;5840:53;5887:4;5879:6;5875:17;5859:14;-1:-1:-1;;;;;449:31:37;437:44;;383:104;5840:53;;5946:4;5942:2;5938:13;5932:20;5925:4;5917:6;5913:17;5906:47;6006:4;6002:2;5998:13;5992:20;5985:4;5977:6;5973:17;5966:47;6066:4;6062:2;6058:13;6052:20;6045:4;6037:6;6033:17;6026:47;6126:4;6122:2;6118:13;6112:20;6105:4;6097:6;6093:17;6086:47;6188:6;6184:2;6180:15;6174:22;6165:6;6157;6153:19;6146:51;6246:6;6242:2;6238:15;6232:22;6267:52;6311:6;6303;6299:19;6283:14;3658:13;3651:21;3639:34;;3588:91;6267:52;;6368:6;6364:2;6360:15;6354:22;6332:44;;6389:52;6433:6;6425;6421:19;6405:14;3658:13;3651:21;3639:34;;3588:91;6389:52;6464:6;-1:-1:-1;;6505:2:37;6528:12;;;;6493:15;;;;;5253:1;5246:9;5217:1333;;6584:300;6652:6;6660;6713:2;6701:9;6692:7;6688:23;6684:32;6681:52;;;6729:1;6726;6719:12;6681:52;6774:23;;;-1:-1:-1;6840:38:37;6874:2;6859:18;;6840:38;:::i;:::-;6830:48;;6584:300;;;;;:::o;6889:765::-;-1:-1:-1;;;;;7222:32:37;;7204:51;;7291:3;7286:2;7271:18;;7264:31;;;-1:-1:-1;;7318:46:37;;7344:19;;7336:6;7318:46;:::i;:::-;7400:6;7395:2;7384:9;7380:18;7373:34;7443:6;7438:2;7427:9;7423:18;7416:34;7487:6;7481:3;7470:9;7466:19;7459:35;7531:6;7525:3;7514:9;7510:19;7503:35;7587:9;7579:6;7575:22;7569:3;7558:9;7554:19;7547:51;7615:33;7641:6;7633;7615:33;:::i;:::-;7607:41;6889:765;-1:-1:-1;;;;;;;;;;6889:765:37:o;7659:300::-;7727:6;7735;7788:2;7776:9;7767:7;7763:23;7759:32;7756:52;;;7804:1;7801;7794:12;7756:52;7827:29;7846:9;7827:29;:::i;:::-;7817:39;7925:2;7910:18;;;;7897:32;;-1:-1:-1;;;7659:300:37:o;7964:127::-;8025:10;8020:3;8016:20;8013:1;8006:31;8056:4;8053:1;8046:15;8080:4;8077:1;8070:15;8096:257;8168:4;8162:11;;;8200:17;;-1:-1:-1;;;;;8232:34:37;;8268:22;;;8229:62;8226:88;;;8294:18;;:::i;:::-;8330:4;8323:24;8096:257;:::o;8358:253::-;8430:2;8424:9;8472:4;8460:17;;-1:-1:-1;;;;;8492:34:37;;8528:22;;;8489:62;8486:88;;;8554:18;;:::i;8616:275::-;8687:2;8681:9;8752:2;8733:13;;-1:-1:-1;;8729:27:37;8717:40;;-1:-1:-1;;;;;8772:34:37;;8808:22;;;8769:62;8766:88;;;8834:18;;:::i;:::-;8870:2;8863:22;8616:275;;-1:-1:-1;8616:275:37:o;8896:1541::-;9027:6;9035;9043;9096:2;9084:9;9075:7;9071:23;9067:32;9064:52;;;9112:1;9109;9102:12;9064:52;9152:9;9139:23;-1:-1:-1;;;;;9177:6:37;9174:30;9171:50;;;9217:1;9214;9207:12;9171:50;9240:22;;9293:4;9285:13;;9281:27;-1:-1:-1;9271:55:37;;9322:1;9319;9312:12;9271:55;9362:2;9349:16;-1:-1:-1;;;;;9380:6:37;9377:30;9374:56;;;9410:18;;:::i;:::-;9450:42;9486:4;9477:6;9474:1;9470:14;9466:25;9450:42;:::i;:::-;9514:3;9538:6;9533:3;9526:19;9570:4;9565:3;9561:14;9554:21;;9627:4;9617:6;9614:1;9610:14;9606:2;9602:23;9598:34;9584:48;;9655:7;9647:6;9644:19;9641:39;;;9676:1;9673;9666:12;9641:39;9708:4;9704:2;9700:13;9689:24;;9722:475;9738:6;9733:3;9730:15;9722:475;;;9820:4;9814:3;9805:7;9801:17;9797:28;9794:48;;;9838:1;9835;9828:12;9794:48;9868:22;;:::i;:::-;9943:17;;9973:22;;10070:4;10061:14;;;10048:28;10096:16;;;10089:33;10135:18;;;9764:4;9755:14;;;;10173;;;;;9722:475;;;10216:5;10294:4;10279:20;;10266:34;;-1:-1:-1;10399:4:37;10384:20;;;10371:34;;8896:1541;-1:-1:-1;;;;;;8896:1541:37:o;10442:559::-;10485:5;10538:3;10531:4;10523:6;10519:17;10515:27;10505:55;;10556:1;10553;10546:12;10505:55;10596:6;10583:20;-1:-1:-1;;;;;10618:6:37;10615:30;10612:56;;;10648:18;;:::i;:::-;10692:59;10739:2;10716:17;;-1:-1:-1;;10712:31:37;10745:4;10708:42;10692:59;:::i;:::-;10776:6;10767:7;10760:23;10830:3;10823:4;10814:6;10806;10802:19;10798:30;10795:39;10792:59;;;10847:1;10844;10837:12;10792:59;10912:6;10905:4;10897:6;10893:17;10886:4;10877:7;10873:18;10860:59;10968:1;10939:20;;;10961:4;10935:31;10928:42;;;;10943:7;10442:559;-1:-1:-1;;;10442:559:37:o;11006:1023::-;11067:5;11115:4;11103:9;11098:3;11094:19;11090:30;11087:50;;;11133:1;11130;11123:12;11087:50;11155:22;;:::i;:::-;11146:31;;11213:9;11200:23;-1:-1:-1;;;;;11238:6:37;11235:30;11232:50;;;11278:1;11275;11268:12;11232:50;11305:46;11347:3;11338:6;11327:9;11323:22;11305:46;:::i;:::-;11291:61;;-1:-1:-1;11425:2:37;11410:18;;;11397:32;11445:14;;;11438:31;11542:2;11527:18;;;11514:32;11562:14;;;11555:31;11659:2;11644:18;;;11631:32;11679:14;;;11672:31;11776:3;11761:19;;;11748:33;11797:15;;;11790:32;11875:3;11860:19;;11847:33;-1:-1:-1;;;;;11892:32:37;;11889:52;;;11937:1;11934;11927:12;11889:52;11974:48;12018:3;12007:8;11996:9;11992:24;11974:48;:::i;:::-;11968:3;11961:5;11957:15;11950:73;;11006:1023;;;;:::o;12034:474::-;12135:6;12143;12196:2;12184:9;12175:7;12171:23;12167:32;12164:52;;;12212:1;12209;12202:12;12164:52;12257:23;;;-1:-1:-1;12355:2:37;12340:18;;12327:32;-1:-1:-1;;;;;12371:30:37;;12368:50;;;12414:1;12411;12404:12;12368:50;12437:65;12494:7;12485:6;12474:9;12470:22;12437:65;:::i;:::-;12427:75;;;12034:474;;;;;:::o;12513:1089::-;12978:3;12967:9;12960:22;12941:4;12999:54;13048:3;13037:9;13033:19;13025:6;12999:54;:::i;:::-;12991:62;;13062:55;13113:2;13102:9;13098:18;13090:6;13062:55;:::i;:::-;-1:-1:-1;;;;;13153:32:37;;;13148:2;13133:18;;13126:60;13222:32;;;;13217:2;13202:18;;13195:60;13286:3;13271:19;;13264:35;;;;13173:3;13315:19;;13308:35;;;;13374:3;13359:19;;13352:35;;;;13418:3;13403:19;;13396:35;13462:3;13447:19;;13440:35;13519:14;13512:22;13506:3;13491:19;;13484:51;13579:15;13572:23;13566:3;13551:19;;;13544:52;;;;12513:1089;;-1:-1:-1;;12513:1089:37:o;13607:360::-;13699:6;13752:2;13740:9;13731:7;13727:23;13723:32;13720:52;;;13768:1;13765;13758:12;13720:52;13808:9;13795:23;-1:-1:-1;;;;;13833:6:37;13830:30;13827:50;;;13873:1;13870;13863:12;13827:50;13896:65;13953:7;13944:6;13933:9;13929:22;13896:65;:::i;:::-;13886:75;13607:360;-1:-1:-1;;;;13607:360:37:o;14296:260::-;14477:2;14466:9;14459:21;14440:4;14497:53;14546:2;14535:9;14531:18;14523:6;14497:53;:::i;14983:466::-;15060:6;15068;15076;15129:2;15117:9;15108:7;15104:23;15100:32;15097:52;;;15145:1;15142;15135:12;15097:52;-1:-1:-1;;15190:23:37;;;15310:2;15295:18;;15282:32;;-1:-1:-1;15413:2:37;15398:18;;;15385:32;;14983:466;-1:-1:-1;14983:466:37:o;15454:127::-;15515:10;15510:3;15506:20;15503:1;15496:31;15546:4;15543:1;15536:15;15570:4;15567:1;15560:15;15586:380;15665:1;15661:12;;;;15708;;;15729:61;;15783:4;15775:6;15771:17;15761:27;;15729:61;15836:2;15828:6;15825:14;15805:18;15802:38;15799:161;;15882:10;15877:3;15873:20;15870:1;15863:31;15917:4;15914:1;15907:15;15945:4;15942:1;15935:15;15971:127;16032:10;16027:3;16023:20;16020:1;16013:31;16063:4;16060:1;16053:15;16087:4;16084:1;16077:15;16103:125;16168:9;;;16189:10;;;16186:36;;;16202:18;;:::i;18753:277::-;18820:6;18873:2;18861:9;18852:7;18848:23;18844:32;18841:52;;;18889:1;18886;18879:12;18841:52;18921:9;18915:16;18974:5;18967:13;18960:21;18953:5;18950:32;18940:60;;18996:1;18993;18986:12;19442:128;19509:9;;;19530:11;;;19527:37;;;19544:18;;:::i;20636:168::-;20709:9;;;20740;;20757:15;;;20751:22;;20737:37;20727:71;;20778:18;;:::i;20935:518::-;21037:2;21032:3;21029:11;21026:421;;;21073:5;21070:1;21063:16;21117:4;21114:1;21104:18;21187:2;21175:10;21171:19;21168:1;21164:27;21158:4;21154:38;21223:4;21211:10;21208:20;21205:47;;;-1:-1:-1;21246:4:37;21205:47;21301:2;21296:3;21292:12;21289:1;21285:20;21279:4;21275:31;21265:41;;21356:81;21374:2;21367:5;21364:13;21356:81;;;21433:1;21419:16;;21400:1;21389:13;21356:81;;;21360:3;;20935:518;;;:::o;21629:1299::-;21755:3;21749:10;-1:-1:-1;;;;;21774:6:37;21771:30;21768:56;;;21804:18;;:::i;:::-;21833:97;21923:6;21883:38;21915:4;21909:11;21883:38;:::i;:::-;21877:4;21833:97;:::i;:::-;21979:4;22010:2;21999:14;;22027:1;22022:649;;;;22715:1;22732:6;22729:89;;;-1:-1:-1;22784:19:37;;;22778:26;22729:89;-1:-1:-1;;21586:1:37;21582:11;;;21578:24;21574:29;21564:40;21610:1;21606:11;;;21561:57;22831:81;;21992:930;;22022:649;20882:1;20875:14;;;20919:4;20906:18;;-1:-1:-1;;22058:20:37;;;22176:222;22190:7;22187:1;22184:14;22176:222;;;22272:19;;;22266:26;22251:42;;22379:4;22364:20;;;;22332:1;22320:14;;;;22206:12;22176:222;;;22180:3;22426:6;22417:7;22414:19;22411:201;;;22487:19;;;22481:26;-1:-1:-1;;22570:1:37;22566:14;;;22582:3;22562:24;22558:37;22554:42;22539:58;22524:74;;22411:201;-1:-1:-1;;;;22658:1:37;22642:14;;;22638:22;22625:36;;-1:-1:-1;21629:1299:37:o;24797:135::-;24836:3;24857:17;;;24854:43;;24877:18;;:::i;:::-;-1:-1:-1;24924:1:37;24913:13;;24797:135::o;27085:127::-;27146:10;27141:3;27137:20;27134:1;27127:31;27177:4;27174:1;27167:15;27201:4;27198:1;27191:15;27989:183;28058:6;28111:2;28099:9;28090:7;28086:23;28082:32;28079:52;;;28127:1;28124;28117:12;28079:52;-1:-1:-1;28150:16:37;;27989:183;-1:-1:-1;27989:183:37:o;28177:217::-;28217:1;28243;28233:132;;28287:10;28282:3;28278:20;28275:1;28268:31;28322:4;28319:1;28312:15;28350:4;28347:1;28340:15;28233:132;-1:-1:-1;28379:9:37;;28177:217::o;28399:287::-;28528:3;28566:6;28560:13;28582:66;28641:6;28636:3;28629:4;28621:6;28617:17;28582:66;:::i;:::-;28664:16;;;;;28399:287;-1:-1:-1;;28399:287:37:o",
      linkReferences: {
        "src/Haversine.sol": { Haversine: [{ start: 15952, length: 20 }] },
      },
    },
    methodIdentifiers: {
      "CANCELTIMEOUT()": "36eaa78d",
      "EXPECTEDTIMEPERKM()": "bb508c3d",
      "advertIds(uint256)": "76707301",
      "advertJury()": "1e78e673",
      "advertisements(uint256)": "bcea610e",
      "advertsPaid(address)": "07f15ac1",
      "assignCarrier(uint256,address)": "6cb66575",
      "buyProducts((uint256,uint256)[],int256,int256)": "92b61b1e",
      "cancelOrder(uint256)": "514fcac7",
      "claimAdvertRevenue()": "c7de8900",
      "createAdvertisement(uint256,uint256,uint256)": "f2390a85",
      "faucet(address,uint256)": "7b56c2b2",
      "getAdvertClaimable(address)": "bf122028",
      "getAdvertsCreated(address)": "24a19d57",
      "getAdvertsFeed(address)": "076087b6",
      "getBoughtOrders(address)": "a4b0f178",
      "getBuyableProducts(address)": "039be2c8",
      "getListedProducts(address)": "62ae710c",
      "getOrdersFromVendor(address)": "273eb702",
      "getOrdersToDeliver(address)": "c68b8c97",
      "getProduct(uint256)": "b9db15b4",
      "getToken()": "21df0da7",
      "listProduct((string,uint256,int256,int256,uint256,string))": "ab9a130a",
      "markAdvertViewed(uint256,address)": "86964259",
      "markDelivery(uint256)": "a2283ed4",
      "orderIds(uint256)": "23722084",
      "orders(uint256)": "a85c38ef",
      "productIds(uint256)": "cb51bba9",
      "products(uint256)": "7acc0b20",
      "quoteOrders((uint256,uint256)[],int256,int256)": "ad362d25",
      "registeredAdvertReciepient(address)": "2466ed8d",
      "startDelivery(uint256)": "385fe0a9",
      "subscribeToAdverts()": "d5311cba",
      "unSubscribeToAdverts()": "d5d3c322",
      "unlistProduct(uint256)": "76c13c13",
      "updateProduct(uint256,(string,uint256,int256,int256,uint256,string))":
        "9b062c37",
      "verifiedusers(address)": "1553cc52",
      "verifyUser(address)": "4d813120",
    },
    rawMetadata:
      '{"compiler":{"version":"0.8.26+commit.8a97fa7a"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[],"name":"AdvertPaid","type":"event"},{"anonymous":false,"inputs":[],"name":"AdvertSubscribed","type":"event"},{"anonymous":false,"inputs":[],"name":"AdvertUnsubscribed","type":"event"},{"anonymous":false,"inputs":[],"name":"CarrierAssigned","type":"event"},{"anonymous":false,"inputs":[],"name":"DeliveryCompleted","type":"event"},{"anonymous":false,"inputs":[],"name":"DeliveryStarted","type":"event"},{"anonymous":false,"inputs":[],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"ProductBought","type":"event"},{"anonymous":false,"inputs":[],"name":"ProductListed","type":"event"},{"anonymous":false,"inputs":[],"name":"ProductUnlisted","type":"event"},{"anonymous":false,"inputs":[],"name":"ProductUpdated","type":"event"},{"inputs":[],"name":"CANCELTIMEOUT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EXPECTEDTIMEPERKM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"advertIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"advertJury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"advertisements","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint256","name":"amountPerView","type":"uint256"},{"internalType":"uint256","name":"totalImpressions","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"advertsPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"carrier","type":"address"}],"name":"assignCarrier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"internalType":"struct IOrderManager.OrderRequest[]","name":"_order","type":"tuple[]"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"}],"name":"buyProducts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAdvertRevenue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountPerView","type":"uint256"},{"internalType":"uint256","name":"totalImpressions","type":"uint256"},{"internalType":"uint256","name":"_productId","type":"uint256"}],"name":"createAdvertisement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reciever","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAdvertClaimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAdvertsCreated","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint256","name":"amountPerView","type":"uint256"},{"internalType":"uint256","name":"totalImpressions","type":"uint256"}],"internalType":"struct IOrderManager.Advert[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAdvertsFeed","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint256","name":"amountPerView","type":"uint256"},{"internalType":"uint256","name":"totalImpressions","type":"uint256"}],"internalType":"struct IOrderManager.Advert[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getBoughtOrders","outputs":[{"components":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product","name":"product","type":"tuple"},{"internalType":"enum IOrderManager.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"carrier","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"deliveryFee","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"deliveryTimestamp","type":"uint256"},{"internalType":"bool","name":"carrierDelivered","type":"bool"},{"internalType":"bool","name":"buyerRecieved","type":"bool"}],"internalType":"struct IOrderManager.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getBuyableProducts","outputs":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getListedProducts","outputs":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getOrdersFromVendor","outputs":[{"components":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product","name":"product","type":"tuple"},{"internalType":"enum IOrderManager.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"carrier","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"deliveryFee","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"deliveryTimestamp","type":"uint256"},{"internalType":"bool","name":"carrierDelivered","type":"bool"},{"internalType":"bool","name":"buyerRecieved","type":"bool"}],"internalType":"struct IOrderManager.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getOrdersToDeliver","outputs":[{"components":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product","name":"product","type":"tuple"},{"internalType":"enum IOrderManager.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"carrier","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"deliveryFee","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"deliveryTimestamp","type":"uint256"},{"internalType":"bool","name":"carrierDelivered","type":"bool"},{"internalType":"bool","name":"buyerRecieved","type":"bool"}],"internalType":"struct IOrderManager.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProduct","outputs":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.ProductRequest","name":"product","type":"tuple"}],"name":"listProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productId","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"markAdvertViewed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"markDelivery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orderIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"components":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.Product","name":"product","type":"tuple"},{"internalType":"enum IOrderManager.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"carrier","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"deliveryFee","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"deliveryTimestamp","type":"uint256"},{"internalType":"bool","name":"carrierDelivered","type":"bool"},{"internalType":"bool","name":"buyerRecieved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"productIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"products","outputs":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"internalType":"struct IOrderManager.OrderRequest[]","name":"_orders","type":"tuple[]"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"}],"name":"quoteOrders","outputs":[{"internalType":"uint256","name":"totalamount","type":"uint256"},{"internalType":"uint256","name":"totalDelivery","type":"uint256"},{"internalType":"uint256","name":"distance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredAdvertReciepient","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"startDelivery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"subscribeToAdverts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unSubscribeToAdverts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"unlistProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"int256","name":"lat","type":"int256"},{"internalType":"int256","name":"long","type":"int256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"productURI","type":"string"}],"internalType":"struct IOrderManager.ProductRequest","name":"_product","type":"tuple"}],"name":"updateProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"verifiedusers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"verifyUser","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"author":"Mfon Stephen Nwa","errors":{"AddressEmptyCode(address)":[{"details":"There\'s no code at `target` (it is not a contract)."}],"AddressInsufficientBalance(address)":[{"details":"The ETH balance of the account is not enough to perform the operation."}],"FailedInnerCall()":[{"details":"A call to an address target failed. The target may have reverted."}],"SafeERC20FailedOperation(address)":[{"details":"An operation with an ERC20 token failed."}]},"kind":"dev","methods":{},"title":"The main contract thet handles transactions","version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/OrderManager.sol":"OrderManager"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":prb-math/=lib/solidity-trigonometry/lib/prb-math/contracts/",":solidity-trigonometry/=lib/solidity-trigonometry/src/"]},"sources":{"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/Script.sol":{"keccak256":"0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2","license":"MIT","urls":["bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c","dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0x1e2c73d51d6b0d1101f3a4cf0e6def9818a891d6aa8d306f2b127943a69dca2d","license":"MIT","urls":["bzz-raw://0ab436d74b405f890e2634c6077df15cc196b4032ec1bdabaaf021ef209e68db","dweb:/ipfs/Qmbb1Qgtdn6S4aqrnpg3y9TDX7erFFcRir9GN62Y7QazaY"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0xb72f3519e0bf7d31df5d68557525f4fc55d861c3fb3b0f7793144ef7c94cbeb7","license":"MIT","urls":["bzz-raw://f3456d0f78e6f61203fa7871ba2df0d35925f10db3baee14be623ce2a35b84e2","dweb:/ipfs/QmWE6QQSBvJifHMraisBTrf1x4WCwrDoTPLX8UKajTiApc"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x62bed173cb126f6d5006706cf249bac8a2d51bfa18f773f314784ff18adc622d","license":"MIT","urls":["bzz-raw://5acc33dddbf2492e37dc32e89cd56ce917272d303a6874805f3a5768a6bfbf54","dweb:/ipfs/QmTsgFhcpUf16gAVazUXU3WspgX8nHke2hzVCvoqS25WEp"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0xb91ab24383a5872b894fc93325eef1add6cbbf981628f18e860068bf88bb7dcc","license":"MIT","urls":["bzz-raw://2651e33b9ac8fc5803ed0a43078c1bf4fa90a0b0347aafd95776b02daccdcc57","dweb:/ipfs/QmbdRyPuGJdZgnCuMnp7c1WsBo1Spf7j1KMmws1Z5rd4BQ"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x4a5853bb9688c4e1c65626036cddd8ea2af84ef1046b704ddc3782d84a892410","license":"MIT","urls":["bzz-raw://09c1024e6aac9657312fcfcf5c3dee62c22edf9f74a1065e6924c4ec710ecafa","dweb:/ipfs/QmRNURoTUkd6DiZnf8yY8o3stJpVQBifopdSpQgP9RhvRr"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0x7121b5b99c4baefb34fdc1f3cc7235aac7138bbc2265344571709417623f5029","license":"MIT OR Apache-2.0","urls":["bzz-raw://3866315b5f89f81746192969834b5932b30c62d7e86ad646e99b6055bdc0ca74","dweb:/ipfs/QmRLhuB96iRxeF5pX4FdsizAaqgDaH2eCWFqfEXbdz9v7n"]},"lib/forge-std/src/console.sol":{"keccak256":"0xf61cb43a94d8318049d0a7f567af8c0aa952b5762a43851b130b90b3fcde0c6a","license":"MIT","urls":["bzz-raw://53a52c6c3aeb22f7a18f53fca16af590308a8e3e5507e74df9b8e2561c932194","dweb:/ipfs/QmaaXuY8mC66YoE2xyZdWuLHXqAxLjbnNxiofx8BTP1MRn"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x3b8fe79f48f065a4e4d35362171304a33784c3a90febae5f2787805a438de12f","license":"MIT","urls":["bzz-raw://61de63af08803549299e68b6e6e88d40f3c5afac450e4ee0a228c66a61ba003d","dweb:/ipfs/QmWVoQ5rrVxnczD4ZZoPbD4PC9Z3uExJtzjD4awTqd14MZ"]},"lib/forge-std/src/interfaces/IERC165.sol":{"keccak256":"0x414b2861b1acbf816ccb7346d3f16cf6c1e002e9e5e40d2f1f26fa5ddc2ea600","license":"MIT","urls":["bzz-raw://698352fb240868ea8f1d1fe389993035eeab930f10d06934f80ccfb2b6ccbfbc","dweb:/ipfs/QmT6WLHAgXxFhh12kWym895oTzXid1326iZiwT3pyfggoT"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]},"lib/forge-std/src/interfaces/IERC721.sol":{"keccak256":"0xf069262a264fdb69f8f37a10d2df7374649e9ba73f8414c9c8a3b51184625f15","license":"MIT","urls":["bzz-raw://924a41ca82a68ffbd503a5faf2f76d13e9938f10501a71094716f12bb64b4b7f","dweb:/ipfs/QmdWnqfKc5ZGhmxNPTde4zrFchnv9Yk9MpCMb2rdhXE5gm"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/mocks/MockERC20.sol":{"keccak256":"0xadbdfc6639edec00ba94bb1133a0fd8de31ccafe45c2ef5df9b3ca61b60b559b","license":"MIT","urls":["bzz-raw://bc766f01bccf669abac8cc7b2096cc1352a66471ca3772ae61b1801dedc4ed4f","dweb:/ipfs/QmNigaPj1LYkP7Z5xr4ijkUxr2K66fDGeoifG3WoM9ruyw"]},"lib/forge-std/src/mocks/MockERC721.sol":{"keccak256":"0xbfbb755bb379f58b97699f7cda0e9a2b9113daaa072e41b280a5ce6a3bff44c9","license":"MIT","urls":["bzz-raw://5ae0c31d29db14d6a0e9b62d33d550feb307f48a6f45068901a013321f337f87","dweb:/ipfs/QmX25DVXW6XZDvRm6SNBGCWrZQ6oNhdq5CmgtVocvsUdwv"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbef9786cb49d3eade757bad87568c49c8c8f35721f0193c95ffb055d9e466e11","license":"MIT","urls":["bzz-raw://3bafd2b0b2d28068d329f95ea8a1fbce3719c257fcb863fc01abcbafd8d531ab","dweb:/ipfs/QmUeaFjKWTVDBsHVfSob4mwt6A5hTnKDz22HaUXeZhypa3"]},"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7","license":"MIT","urls":["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f","dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80","license":"MIT","urls":["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229","dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70","license":"MIT","urls":["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c","dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2","license":"MIT","urls":["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850","dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff","license":"MIT","urls":["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d","dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386","license":"MIT","urls":["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0","dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721","license":"MIT","urls":["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245","dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d","license":"MIT","urls":["bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875","dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"]},"lib/solidity-trigonometry/lib/prb-math/contracts/PRBMath.sol":{"keccak256":"0xe981069ba1d98749de50dec3983d023a996575d2e7e983f9eb4a33601f655766","license":"Unlicense","urls":["bzz-raw://2804382c50036b38925399624a1a271b50f77ac5476d93fa703266bb60e70de8","dweb:/ipfs/QmXbw6xZc3tBt8MEwSymL9H842xPcnHVu9pwNzf5wAgCoH"]},"lib/solidity-trigonometry/lib/prb-math/contracts/PRBMathSD59x18.sol":{"keccak256":"0x1886d687eace717c05b7dcc20e43a088df0e549df86b453c2222961b520308f0","license":"Unlicense","urls":["bzz-raw://e62bb6764ac875e7e241a8621bbbd32ae7a4c98d681c250efc04fa467ec6da6e","dweb:/ipfs/QmWk5VQSTP3JiCNJ8NGF39nReD1hcCgTvAQH8RBPpXrDfH"]},"lib/solidity-trigonometry/src/InverseTrigonometry.sol":{"keccak256":"0x2d5c39539af884550e6efa9d17718008e35fe65e4ff8fbca18e5332e07036d92","license":"MIT","urls":["bzz-raw://576785251df3efc715969fda357c6523c34230692e44cad59f52124c2aaf0db9","dweb:/ipfs/QmQsYqV42J1fdbu9SLmXrd75aVibMu2CktP5bDFxWKEvFq"]},"lib/solidity-trigonometry/src/Trigonometry.sol":{"keccak256":"0x72e21ad115613078b5ae270b1e684efa51b622b1c7ae66a68ebcd4fca235522b","license":"MIT","urls":["bzz-raw://22ae3e982a2a7e46c3474fb437f1dfebdd7a63f908b96d5d1f6665fbd761cef7","dweb:/ipfs/Qmb8WTNbQqLKxCcDnC9sw5gPGKQt4zHVMuuUuNKw8pwn1g"]},"src/DayOnesToken.sol":{"keccak256":"0x6ba01beb54fcb92de661f522246cac89e2c883017cef92c58c24b172e5bc9726","license":"UNLICENCED","urls":["bzz-raw://3614b8e119af207df00852fcb83e0e00e6685e09c1905fa800429707500b6801","dweb:/ipfs/QmUY5m7WMPLmPRZEdPcBjkfbwoqWE8qKuy8TwqFwiYYZE7"]},"src/Haversine.sol":{"keccak256":"0x11166328fda466c0273dcb44e33c35f08a66a4d96abc57f8e8fff5c3ebe52bfd","license":"UNLICENCED","urls":["bzz-raw://b34836a39b2b8a3d0678b780f7ec6bcacbd61a46ba80d7a7a98b665ac8b9cece","dweb:/ipfs/QmbjBKSbcjScC2yDKxFSMt1zya5VFyAWscapguzK5cqVfa"]},"src/IOrderManager.sol":{"keccak256":"0x80af1a47bea56d4250429e3add66b3aefc84d27e9bd8b25f05e7644eceb6bec2","license":"UNLICENCED","urls":["bzz-raw://d291c3191b5ecf620547e50349a0c597ce270ca67be0774420c962e8e7f15a05","dweb:/ipfs/QmcvgmQwVFnEe1bGH79hLhQ7bSBcvh5csuJFfuqxpr7Pdp"]},"src/OrderManager.sol":{"keccak256":"0x9b89868e81d39d7446315607a2028f39d40c699d26059247f99e2d0a8d5c7758","license":"UNLICENCED","urls":["bzz-raw://05fd903314d92796da56a8b8334cf8351a5e60b20917a8ce4939fce7e0154153","dweb:/ipfs/QmUmnh3FkPvCfJmkW4ce6Bymw8MrEK3AipEkByV9PgLFJv"]}},"version":1}',
    metadata: {
      compiler: { version: "0.8.26+commit.8a97fa7a" },
      language: "Solidity",
      output: {
        abi: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            type: "error",
            name: "AddressEmptyCode",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            type: "error",
            name: "AddressInsufficientBalance",
          },
          { inputs: [], type: "error", name: "FailedInnerCall" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            type: "error",
            name: "SafeERC20FailedOperation",
          },
          { inputs: [], type: "event", name: "AdvertPaid", anonymous: false },
          {
            inputs: [],
            type: "event",
            name: "AdvertSubscribed",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "AdvertUnsubscribed",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "CarrierAssigned",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "DeliveryCompleted",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "DeliveryStarted",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "OrderCancelled",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "ProductBought",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "ProductListed",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "ProductUnlisted",
            anonymous: false,
          },
          {
            inputs: [],
            type: "event",
            name: "ProductUpdated",
            anonymous: false,
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "CANCELTIMEOUT",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "EXPECTEDTIMEPERKM",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "advertIds",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "advertJury",
            outputs: [{ internalType: "address", name: "", type: "address" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "advertisements",
            outputs: [
              { internalType: "address", name: "creator", type: "address" },
              { internalType: "uint256", name: "productId", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountPerView",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalImpressions",
                type: "uint256",
              },
            ],
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
            name: "advertsPaid",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [
              { internalType: "uint256", name: "id", type: "uint256" },
              { internalType: "address", name: "carrier", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "assignCarrier",
          },
          {
            inputs: [
              {
                internalType: "struct IOrderManager.OrderRequest[]",
                name: "_order",
                type: "tuple[]",
                components: [
                  { internalType: "uint256", name: "id", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                ],
              },
              { internalType: "int256", name: "lat", type: "int256" },
              { internalType: "int256", name: "long", type: "int256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "buyProducts",
          },
          {
            inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "cancelOrder",
          },
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
            name: "claimAdvertRevenue",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountPerView",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalImpressions",
                type: "uint256",
              },
              { internalType: "uint256", name: "_productId", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "createAdvertisement",
          },
          {
            inputs: [
              { internalType: "address", name: "reciever", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "faucet",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getAdvertClaimable",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getAdvertsCreated",
            outputs: [
              {
                internalType: "struct IOrderManager.Advert[]",
                name: "",
                type: "tuple[]",
                components: [
                  { internalType: "address", name: "creator", type: "address" },
                  {
                    internalType: "uint256",
                    name: "productId",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amountPerView",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalImpressions",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getAdvertsFeed",
            outputs: [
              {
                internalType: "struct IOrderManager.Advert[]",
                name: "",
                type: "tuple[]",
                components: [
                  { internalType: "address", name: "creator", type: "address" },
                  {
                    internalType: "uint256",
                    name: "productId",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amountPerView",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalImpressions",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getBoughtOrders",
            outputs: [
              {
                internalType: "struct IOrderManager.Order[]",
                name: "",
                type: "tuple[]",
                components: [
                  {
                    internalType: "struct IOrderManager.Product",
                    name: "product",
                    type: "tuple",
                    components: [
                      {
                        internalType: "address",
                        name: "vendor",
                        type: "address",
                      },
                      { internalType: "string", name: "name", type: "string" },
                      {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                      },
                      { internalType: "int256", name: "lat", type: "int256" },
                      { internalType: "int256", name: "long", type: "int256" },
                      {
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256",
                      },
                      {
                        internalType: "string",
                        name: "productURI",
                        type: "string",
                      },
                    ],
                  },
                  {
                    internalType: "enum IOrderManager.OrderStatus",
                    name: "status",
                    type: "uint8",
                  },
                  { internalType: "address", name: "carrier", type: "address" },
                  { internalType: "address", name: "buyer", type: "address" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryFee",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "carrierDelivered",
                    type: "bool",
                  },
                  { internalType: "bool", name: "buyerRecieved", type: "bool" },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getBuyableProducts",
            outputs: [
              {
                internalType: "struct IOrderManager.Product[]",
                name: "",
                type: "tuple[]",
                components: [
                  { internalType: "address", name: "vendor", type: "address" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getListedProducts",
            outputs: [
              {
                internalType: "struct IOrderManager.Product[]",
                name: "",
                type: "tuple[]",
                components: [
                  { internalType: "address", name: "vendor", type: "address" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getOrdersFromVendor",
            outputs: [
              {
                internalType: "struct IOrderManager.Order[]",
                name: "",
                type: "tuple[]",
                components: [
                  {
                    internalType: "struct IOrderManager.Product",
                    name: "product",
                    type: "tuple",
                    components: [
                      {
                        internalType: "address",
                        name: "vendor",
                        type: "address",
                      },
                      { internalType: "string", name: "name", type: "string" },
                      {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                      },
                      { internalType: "int256", name: "lat", type: "int256" },
                      { internalType: "int256", name: "long", type: "int256" },
                      {
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256",
                      },
                      {
                        internalType: "string",
                        name: "productURI",
                        type: "string",
                      },
                    ],
                  },
                  {
                    internalType: "enum IOrderManager.OrderStatus",
                    name: "status",
                    type: "uint8",
                  },
                  { internalType: "address", name: "carrier", type: "address" },
                  { internalType: "address", name: "buyer", type: "address" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryFee",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "carrierDelivered",
                    type: "bool",
                  },
                  { internalType: "bool", name: "buyerRecieved", type: "bool" },
                ],
              },
            ],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
            name: "getOrdersToDeliver",
            outputs: [
              {
                internalType: "struct IOrderManager.Order[]",
                name: "",
                type: "tuple[]",
                components: [
                  {
                    internalType: "struct IOrderManager.Product",
                    name: "product",
                    type: "tuple",
                    components: [
                      {
                        internalType: "address",
                        name: "vendor",
                        type: "address",
                      },
                      { internalType: "string", name: "name", type: "string" },
                      {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                      },
                      { internalType: "int256", name: "lat", type: "int256" },
                      { internalType: "int256", name: "long", type: "int256" },
                      {
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256",
                      },
                      {
                        internalType: "string",
                        name: "productURI",
                        type: "string",
                      },
                    ],
                  },
                  {
                    internalType: "enum IOrderManager.OrderStatus",
                    name: "status",
                    type: "uint8",
                  },
                  { internalType: "address", name: "carrier", type: "address" },
                  { internalType: "address", name: "buyer", type: "address" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryFee",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deliveryTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "carrierDelivered",
                    type: "bool",
                  },
                  { internalType: "bool", name: "buyerRecieved", type: "bool" },
                ],
              },
            ],
          },
          {
            inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "getProduct",
            outputs: [
              {
                internalType: "struct IOrderManager.Product",
                name: "",
                type: "tuple",
                components: [
                  { internalType: "address", name: "vendor", type: "address" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "getToken",
            outputs: [{ internalType: "address", name: "", type: "address" }],
          },
          {
            inputs: [
              {
                internalType: "struct IOrderManager.ProductRequest",
                name: "product",
                type: "tuple",
                components: [
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "listProduct",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_productId", type: "uint256" },
              { internalType: "address", name: "", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "markAdvertViewed",
          },
          {
            inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "markDelivery",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "orderIds",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "orders",
            outputs: [
              {
                internalType: "struct IOrderManager.Product",
                name: "product",
                type: "tuple",
                components: [
                  { internalType: "address", name: "vendor", type: "address" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
              {
                internalType: "enum IOrderManager.OrderStatus",
                name: "status",
                type: "uint8",
              },
              { internalType: "address", name: "carrier", type: "address" },
              { internalType: "address", name: "buyer", type: "address" },
              { internalType: "uint256", name: "quantity", type: "uint256" },
              { internalType: "uint256", name: "deliveryFee", type: "uint256" },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              {
                internalType: "uint256",
                name: "deliveryTimestamp",
                type: "uint256",
              },
              { internalType: "bool", name: "carrierDelivered", type: "bool" },
              { internalType: "bool", name: "buyerRecieved", type: "bool" },
            ],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "productIds",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "products",
            outputs: [
              { internalType: "address", name: "vendor", type: "address" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "int256", name: "lat", type: "int256" },
              { internalType: "int256", name: "long", type: "int256" },
              { internalType: "uint256", name: "quantity", type: "uint256" },
              { internalType: "string", name: "productURI", type: "string" },
            ],
          },
          {
            inputs: [
              {
                internalType: "struct IOrderManager.OrderRequest[]",
                name: "_orders",
                type: "tuple[]",
                components: [
                  { internalType: "uint256", name: "id", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                ],
              },
              { internalType: "int256", name: "lat", type: "int256" },
              { internalType: "int256", name: "long", type: "int256" },
            ],
            stateMutability: "view",
            type: "function",
            name: "quoteOrders",
            outputs: [
              { internalType: "uint256", name: "totalamount", type: "uint256" },
              {
                internalType: "uint256",
                name: "totalDelivery",
                type: "uint256",
              },
              { internalType: "uint256", name: "distance", type: "uint256" },
            ],
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
            name: "registeredAdvertReciepient",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "startDelivery",
          },
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
            name: "subscribeToAdverts",
          },
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
            name: "unSubscribeToAdverts",
          },
          {
            inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "unlistProduct",
          },
          {
            inputs: [
              { internalType: "uint256", name: "id", type: "uint256" },
              {
                internalType: "struct IOrderManager.ProductRequest",
                name: "_product",
                type: "tuple",
                components: [
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "int256", name: "lat", type: "int256" },
                  { internalType: "int256", name: "long", type: "int256" },
                  {
                    internalType: "uint256",
                    name: "quantity",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "productURI",
                    type: "string",
                  },
                ],
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "updateProduct",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
            name: "verifiedusers",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "verifyUser",
          },
        ],
        devdoc: { kind: "dev", methods: {}, version: 1 },
        userdoc: { kind: "user", methods: {}, version: 1 },
      },
      settings: {
        remappings: [
          "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
          "ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
          "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
          "forge-std/=lib/forge-std/src/",
          "openzeppelin-contracts/=lib/openzeppelin-contracts/",
          "prb-math/=lib/solidity-trigonometry/lib/prb-math/contracts/",
          "solidity-trigonometry/=lib/solidity-trigonometry/src/",
        ],
        optimizer: { enabled: true, runs: 200 },
        metadata: { bytecodeHash: "ipfs" },
        compilationTarget: { "src/OrderManager.sol": "OrderManager" },
        evmVersion: "paris",
        libraries: {},
      },
      sources: {
        "lib/forge-std/src/Base.sol": {
          keccak256:
            "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
          urls: [
            "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
            "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/Script.sol": {
          keccak256:
            "0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2",
          urls: [
            "bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c",
            "dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdChains.sol": {
          keccak256:
            "0x1e2c73d51d6b0d1101f3a4cf0e6def9818a891d6aa8d306f2b127943a69dca2d",
          urls: [
            "bzz-raw://0ab436d74b405f890e2634c6077df15cc196b4032ec1bdabaaf021ef209e68db",
            "dweb:/ipfs/Qmbb1Qgtdn6S4aqrnpg3y9TDX7erFFcRir9GN62Y7QazaY",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdCheats.sol": {
          keccak256:
            "0xb72f3519e0bf7d31df5d68557525f4fc55d861c3fb3b0f7793144ef7c94cbeb7",
          urls: [
            "bzz-raw://f3456d0f78e6f61203fa7871ba2df0d35925f10db3baee14be623ce2a35b84e2",
            "dweb:/ipfs/QmWE6QQSBvJifHMraisBTrf1x4WCwrDoTPLX8UKajTiApc",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdJson.sol": {
          keccak256:
            "0x62bed173cb126f6d5006706cf249bac8a2d51bfa18f773f314784ff18adc622d",
          urls: [
            "bzz-raw://5acc33dddbf2492e37dc32e89cd56ce917272d303a6874805f3a5768a6bfbf54",
            "dweb:/ipfs/QmTsgFhcpUf16gAVazUXU3WspgX8nHke2hzVCvoqS25WEp",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdMath.sol": {
          keccak256:
            "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
          urls: [
            "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
            "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdStorage.sol": {
          keccak256:
            "0xb91ab24383a5872b894fc93325eef1add6cbbf981628f18e860068bf88bb7dcc",
          urls: [
            "bzz-raw://2651e33b9ac8fc5803ed0a43078c1bf4fa90a0b0347aafd95776b02daccdcc57",
            "dweb:/ipfs/QmbdRyPuGJdZgnCuMnp7c1WsBo1Spf7j1KMmws1Z5rd4BQ",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdStyle.sol": {
          keccak256:
            "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
          urls: [
            "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
            "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/StdUtils.sol": {
          keccak256:
            "0x4a5853bb9688c4e1c65626036cddd8ea2af84ef1046b704ddc3782d84a892410",
          urls: [
            "bzz-raw://09c1024e6aac9657312fcfcf5c3dee62c22edf9f74a1065e6924c4ec710ecafa",
            "dweb:/ipfs/QmRNURoTUkd6DiZnf8yY8o3stJpVQBifopdSpQgP9RhvRr",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/Vm.sol": {
          keccak256:
            "0x7121b5b99c4baefb34fdc1f3cc7235aac7138bbc2265344571709417623f5029",
          urls: [
            "bzz-raw://3866315b5f89f81746192969834b5932b30c62d7e86ad646e99b6055bdc0ca74",
            "dweb:/ipfs/QmRLhuB96iRxeF5pX4FdsizAaqgDaH2eCWFqfEXbdz9v7n",
          ],
          license: "MIT OR Apache-2.0",
        },
        "lib/forge-std/src/console.sol": {
          keccak256:
            "0xf61cb43a94d8318049d0a7f567af8c0aa952b5762a43851b130b90b3fcde0c6a",
          urls: [
            "bzz-raw://53a52c6c3aeb22f7a18f53fca16af590308a8e3e5507e74df9b8e2561c932194",
            "dweb:/ipfs/QmaaXuY8mC66YoE2xyZdWuLHXqAxLjbnNxiofx8BTP1MRn",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/console2.sol": {
          keccak256:
            "0x3b8fe79f48f065a4e4d35362171304a33784c3a90febae5f2787805a438de12f",
          urls: [
            "bzz-raw://61de63af08803549299e68b6e6e88d40f3c5afac450e4ee0a228c66a61ba003d",
            "dweb:/ipfs/QmWVoQ5rrVxnczD4ZZoPbD4PC9Z3uExJtzjD4awTqd14MZ",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/interfaces/IERC165.sol": {
          keccak256:
            "0x414b2861b1acbf816ccb7346d3f16cf6c1e002e9e5e40d2f1f26fa5ddc2ea600",
          urls: [
            "bzz-raw://698352fb240868ea8f1d1fe389993035eeab930f10d06934f80ccfb2b6ccbfbc",
            "dweb:/ipfs/QmT6WLHAgXxFhh12kWym895oTzXid1326iZiwT3pyfggoT",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/interfaces/IERC20.sol": {
          keccak256:
            "0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947",
          urls: [
            "bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7",
            "dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/interfaces/IERC721.sol": {
          keccak256:
            "0xf069262a264fdb69f8f37a10d2df7374649e9ba73f8414c9c8a3b51184625f15",
          urls: [
            "bzz-raw://924a41ca82a68ffbd503a5faf2f76d13e9938f10501a71094716f12bb64b4b7f",
            "dweb:/ipfs/QmdWnqfKc5ZGhmxNPTde4zrFchnv9Yk9MpCMb2rdhXE5gm",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/interfaces/IMulticall3.sol": {
          keccak256:
            "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
          urls: [
            "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
            "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/mocks/MockERC20.sol": {
          keccak256:
            "0xadbdfc6639edec00ba94bb1133a0fd8de31ccafe45c2ef5df9b3ca61b60b559b",
          urls: [
            "bzz-raw://bc766f01bccf669abac8cc7b2096cc1352a66471ca3772ae61b1801dedc4ed4f",
            "dweb:/ipfs/QmNigaPj1LYkP7Z5xr4ijkUxr2K66fDGeoifG3WoM9ruyw",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/mocks/MockERC721.sol": {
          keccak256:
            "0xbfbb755bb379f58b97699f7cda0e9a2b9113daaa072e41b280a5ce6a3bff44c9",
          urls: [
            "bzz-raw://5ae0c31d29db14d6a0e9b62d33d550feb307f48a6f45068901a013321f337f87",
            "dweb:/ipfs/QmX25DVXW6XZDvRm6SNBGCWrZQ6oNhdq5CmgtVocvsUdwv",
          ],
          license: "MIT",
        },
        "lib/forge-std/src/safeconsole.sol": {
          keccak256:
            "0xbef9786cb49d3eade757bad87568c49c8c8f35721f0193c95ffb055d9e466e11",
          urls: [
            "bzz-raw://3bafd2b0b2d28068d329f95ea8a1fbce3719c257fcb863fc01abcbafd8d531ab",
            "dweb:/ipfs/QmUeaFjKWTVDBsHVfSob4mwt6A5hTnKDz22HaUXeZhypa3",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
          keccak256:
            "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
          urls: [
            "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
            "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
          keccak256:
            "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
          urls: [
            "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
            "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
          keccak256:
            "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
          urls: [
            "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
            "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":
          {
            keccak256:
              "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
            urls: [
              "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
              "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV",
            ],
            license: "MIT",
          },
        "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":
          {
            keccak256:
              "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
            urls: [
              "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
              "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi",
            ],
            license: "MIT",
          },
        "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":
          {
            keccak256:
              "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
            urls: [
              "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
              "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3",
            ],
            license: "MIT",
          },
        "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
          keccak256:
            "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
          urls: [
            "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
            "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
          keccak256:
            "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
          urls: [
            "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
            "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF",
          ],
          license: "MIT",
        },
        "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
          keccak256:
            "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
          urls: [
            "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
            "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L",
          ],
          license: "MIT",
        },
        "lib/solidity-trigonometry/lib/prb-math/contracts/PRBMath.sol": {
          keccak256:
            "0xe981069ba1d98749de50dec3983d023a996575d2e7e983f9eb4a33601f655766",
          urls: [
            "bzz-raw://2804382c50036b38925399624a1a271b50f77ac5476d93fa703266bb60e70de8",
            "dweb:/ipfs/QmXbw6xZc3tBt8MEwSymL9H842xPcnHVu9pwNzf5wAgCoH",
          ],
          license: "Unlicense",
        },
        "lib/solidity-trigonometry/lib/prb-math/contracts/PRBMathSD59x18.sol": {
          keccak256:
            "0x1886d687eace717c05b7dcc20e43a088df0e549df86b453c2222961b520308f0",
          urls: [
            "bzz-raw://e62bb6764ac875e7e241a8621bbbd32ae7a4c98d681c250efc04fa467ec6da6e",
            "dweb:/ipfs/QmWk5VQSTP3JiCNJ8NGF39nReD1hcCgTvAQH8RBPpXrDfH",
          ],
          license: "Unlicense",
        },
        "lib/solidity-trigonometry/src/InverseTrigonometry.sol": {
          keccak256:
            "0x2d5c39539af884550e6efa9d17718008e35fe65e4ff8fbca18e5332e07036d92",
          urls: [
            "bzz-raw://576785251df3efc715969fda357c6523c34230692e44cad59f52124c2aaf0db9",
            "dweb:/ipfs/QmQsYqV42J1fdbu9SLmXrd75aVibMu2CktP5bDFxWKEvFq",
          ],
          license: "MIT",
        },
        "lib/solidity-trigonometry/src/Trigonometry.sol": {
          keccak256:
            "0x72e21ad115613078b5ae270b1e684efa51b622b1c7ae66a68ebcd4fca235522b",
          urls: [
            "bzz-raw://22ae3e982a2a7e46c3474fb437f1dfebdd7a63f908b96d5d1f6665fbd761cef7",
            "dweb:/ipfs/Qmb8WTNbQqLKxCcDnC9sw5gPGKQt4zHVMuuUuNKw8pwn1g",
          ],
          license: "MIT",
        },
        "src/DayOnesToken.sol": {
          keccak256:
            "0x6ba01beb54fcb92de661f522246cac89e2c883017cef92c58c24b172e5bc9726",
          urls: [
            "bzz-raw://3614b8e119af207df00852fcb83e0e00e6685e09c1905fa800429707500b6801",
            "dweb:/ipfs/QmUY5m7WMPLmPRZEdPcBjkfbwoqWE8qKuy8TwqFwiYYZE7",
          ],
          license: "UNLICENCED",
        },
        "src/Haversine.sol": {
          keccak256:
            "0x11166328fda466c0273dcb44e33c35f08a66a4d96abc57f8e8fff5c3ebe52bfd",
          urls: [
            "bzz-raw://b34836a39b2b8a3d0678b780f7ec6bcacbd61a46ba80d7a7a98b665ac8b9cece",
            "dweb:/ipfs/QmbjBKSbcjScC2yDKxFSMt1zya5VFyAWscapguzK5cqVfa",
          ],
          license: "UNLICENCED",
        },
        "src/IOrderManager.sol": {
          keccak256:
            "0x80af1a47bea56d4250429e3add66b3aefc84d27e9bd8b25f05e7644eceb6bec2",
          urls: [
            "bzz-raw://d291c3191b5ecf620547e50349a0c597ce270ca67be0774420c962e8e7f15a05",
            "dweb:/ipfs/QmcvgmQwVFnEe1bGH79hLhQ7bSBcvh5csuJFfuqxpr7Pdp",
          ],
          license: "UNLICENCED",
        },
        "src/OrderManager.sol": {
          keccak256:
            "0x9b89868e81d39d7446315607a2028f39d40c699d26059247f99e2d0a8d5c7758",
          urls: [
            "bzz-raw://05fd903314d92796da56a8b8334cf8351a5e60b20917a8ce4939fce7e0154153",
            "dweb:/ipfs/QmUmnh3FkPvCfJmkW4ce6Bymw8MrEK3AipEkByV9PgLFJv",
          ],
          license: "UNLICENCED",
        },
      },
      version: 1,
    },
    id: 36,
  },
];

export default DAY1_ABI;
