var xhr2 = new XMLHttpRequest();
var url2 ='./products.json';

xhr2.open('GET', url2, true);
xhr2.responseType = 'json';

xhr2.onload = function() {
    var products = xhr2.response.products;
    var productsDiv = document.getElementById('products');

    products.forEach(function(product) {
        var productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        var prodId = document.createElement('h2');
        prodId.textContent = `Product id: ${product.id}`;

        var prodName = document.createElement('p');
        prodName.textContent = `Product name: ${product.name}`;

        var prodPrice = document.createElement('p');
        prodPrice.textContent = `Product price: $${product.price}`;

        var prodStock = document.createElement('p');
        prodStock.textContent = `Inventory: ${product.stock}`;

        productDiv.appendChild(prodId);
        productDiv.appendChild(prodName);
        productDiv.appendChild(prodPrice);
        productDiv.appendChild(prodStock);

        productsDiv.appendChild(productDiv);
    });
}
xhr2.send();