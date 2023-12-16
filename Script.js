

let shoppingCart = [];

function buyItem(itemName, price) {
    
    shoppingCart.push({ name: itemName, price: price });

    
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    
    cartItemsElement.innerHTML = '';

    
    shoppingCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    
    const total = shoppingCart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

function checkout() {
    
    alert('Checkout complete! Total: $' + shoppingCart.reduce((sum, item) => sum + item.price, 0).toFixed(2));

    
    shoppingCart = [];
    displayCart();
}