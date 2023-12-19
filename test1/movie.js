function addToCart(productId) {
    let productInfo = getProductInfo(productId);
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(productInfo);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount();
}

function getProductInfo(productId) {
    if (productId === 1) {
        return {
            id: 1,
            name: "Portrait of a Lady on Fire",
            image: "img/poster1.jpg",
            price: "$5.99"
        };
    } else if (productId === 2) {
        return {
            id: 2,
            name: "Furiosa",
            image: "img/poster3.jpg",
            price: "$5.99 (15% off)"
        };
    } else if (productId === 3) {
        return {
            id: 3,
            name: "Her",
            image: "img/poster9.jpg",
            price: "$3.99"
        };
    } else if (productId === 4) {
        return {
            id: 4,
            name: "Poor things",
            image: "img/poster5.jpg",
            price: "$5.99"
        };
    } else if (productId === 5) {
        return {
            id: 5,
            name: "The Worst Person in the World",
            image: "img/poster6.jpg",
            price: "$5.99"
        };
    } else if (productId === 6) {
        return {
            id: 6,
            name: "Star Wars: The Rise of Skywalker",
            image: "img/poster7.jpg",
            price: "$7.99 (15% off)"
        };
    } else if (productId === 7) {
        return {
            id: 7,
            name: "Dune: II",
            image: "img/poster8.jpg",
            price: "$10.02 (pre order)"
        };
    } else if (productId === 8) {
        return {
            id: 8,
            name: "Last Night in Soho",
            image: "img/poster4.jpg",
            price: "$4.99 (15% off)"
        };
    }
}
