# frontend design

## core functionalities
- login(signin with ethereum or google); all
- signup(email, connect wallet); all

- list product(id, name, price, lat, long, carrier, weight, delivery time, quantity, uri); vendor contract[status]
- unlist product(id); vendor
- update product(id, name, price, lat, long, carrier, weight, delivery time, quantity, uri); vendor
- assign carrier to product(userId); vendor
- set default carrier(userId); vendor

<!-- - rate product(star rating, comment); buyer -->
- add product to cart(productId); buyer
- checkout(lat, long, productId/s); buyer
- remove product from cart(userId, productId); buyer
- cancel purchase(userId, productId); buyer 

- mark delivered(userId, productId); carrier, buyer

- start delivery(userId, productId); carrier

- create advertisement

- subscribe to advertisement

- claim advert revenue

<!-- - faucet(userId) -->

## screens
- home(login, signup)
- profile(set default carrier, add phone no)
- products(add to cart); default filter product by, 
- product(assign carrier, unlist, mark delivered, start delivery, cancel purchase)
- list product
- update product
- rate product
- assign carrier to products
- checkout(purchase product/s, set location)
- advertisement
- cart(increase quantity, remove form cart)

### deliveries
- profile(email, phone no)
- products
- product(other images, description, keywords, delivery fee, status[none, pending, in-transit, cancelled, delivered, conflict], storage location, carrier, map[optional])

### sales
- profile
- products(only ones listed)
- product

### purchases
- profile
- products
- product(ratings, reviews, description, price, quantity, category, tags, delivery time, delivery fee)
- cart

# info for creating advert

- name
- age
- address
- sex
- email
- employment status
- marrrige status
- hobbies
- income level


## caveats
- cannot patronize self!!!
- cannot be in pending for too long
- cannot be in transit for too long
- cannot transfer nft
- buyer can only cancel purchase when pending
- not accounting for the difference in locations when delivering


# database design
the main thing the backend does is 

1. authenticate - user table
2. sign in with web3
<!-- 2. send and store files -->
3. fetch and filter products - products table
4. manage the cart - cart table
5. tracks ratings - ratings table

- users(int userid, bool verified, string email, string name, string address)
- carts
- product tags
- products(int id, Status status)

# smart contracts
- ordererc1155
- token

## abi
- quote product
- quote products(lat, long)
- purchase product(lat, long)
- purchase products(lat, long)
- start delivery
- mark delivered
- list products
- unlist products
- update product