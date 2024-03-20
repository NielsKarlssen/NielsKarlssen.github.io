

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energidryck Webshop</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
            width: 100%;
        }

        main {
            max-width: 800px;
            margin: 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .product {
            position: relative; 
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            width: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .product:hover .product-info {
            opacity: 1;
        }

        .product-info {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border-radius: 5px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        button {
            background-color: #333;
            color: white;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 3px;
            margin-top: 10px;
        }

        .product img {
            width: 100%;
            max-height: 1500px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 10px;
        }

        .cart-items {
            list-style: none;
            padding: 0;
            width: 100%;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            padding: 5px;
        }
        .cart-icon {
            position: absolute;
            top: 40px;
            right: 10px;
            cursor: pointer;
            font-size: 24px;
        }
        .image-container {
            width: 48%;
            margin: 0 10px;
        }
        .scrolling-image {
            position: fixed;
            top: 50%;
            right: 10px;
            transform: translateY(-60%);
            max-height: 80vh;
            overflow: ;
            border-radius: px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
       
    </style>
</head>
<body>

    <header>
        <h1>LegitHemsida.se</h1>
        <div class="cart-icon" onclick="toggleCart()">🛒</div>
        <div class="cart" id="cart">
            <h2>Varukorg</h2>
            <ul class="cart-items" id="cart-items"></ul>
            <p>Totalt: <span id="total">0</span> kr</p>
            <button onclick="checkout()">Gå till kassan</button>
        </div>
    </header>
    <div class="top-ad">
        <img src="redbullad.png" alt="Red Bull Original">
    </div>
    <main>
        <div class="product" id="product1">
            <div class="product-info">
                <h2>Red Bull Original</h2>
                <p>24x250ml</p>
                <p>253,74 kr</p>
                <button onclick="addToCart('Red Bull Original', 253.74, 'redbull2.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbull2.jpg" alt="Red Bull Original">
        </div>

        <div class="product" id="product2">
            <div class="product-info">
                <h2>Red Bull White Edition</h2>
                <p>24x250ml</p>
                <p>284,65 kr</p>
                <button onclick="addToCart('Red Bull White Edition', 284.65, 'redbullwhite.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbullwhite.jpg" alt="Red Bull White Edition">
        </div>

        <div class="product" id="product3">
            <div class="product-info">
                <h2>Red Bull Winter Edition</h2>
                <p>24x250ml</p>
                <p>278,65 kr</p>
                <button onclick="addToCart('Red Bull Vinterpäron Winter Edition', 278.65, 'redbullwinter.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbullwinter.jpg" alt="Red Bull Vinterpäron Winter Edition">
        </div>

        <div class="product" id="product4">
            <div class="product-info">
                <h2>Red Bull Green Edition</h2>
                <p>24x250ml</p>
                <p>284,65 kr</p>
                <button onclick="addToCart('Red Bull Green Edition', 284.65, 'redbullgreen.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbullgreen.jpg" alt="Red Bull Green Edition">
        </div>

        <div class="product" id="product5">
            <div class="product-info">
                <h2>Red Bull Apricot Edition</h2>
                <p>24x250ml</p>
                <p>284,65 kr</p>
                <button onclick="addToCart('Red Bull Apricot Edition', 284.65, 'redbullsummer.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbullsummer.jpg" alt="Red Bull Apricot Edition">
        </div>

        <div class="product" id="product6">
            <div class="product-info">
                <h2>Red Bull Blue Edition</h2>
                <p>24x250ml</p>
                <p>284,65 kr</p>
                <button onclick="addToCart('Red Bull Blue Edition', 284.65, 'redbullblue.jpg')">Lägg till i varukorgen</button>
            </div>
            <img src="redbullblue.jpg" alt="Red Bull Blue Edition">
        </div>
        
        <div class="image-container">
            <div class="scrolling-image">
                <img src="ad.png" alt="Avlång Bild">
            </div>
        </div>
    </main>

    <script>
        let cart = [];

        function addToCart(productName, price, image) {
            const existingProductIndex = cart.findIndex(item => item.name === productName);

            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({ name: productName, price: price, image: image, quantity: 1 });
            }

            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItemsElement = document.getElementById('cart-items');
            const totalElement = document.getElementById('total');

            cartItemsElement.innerHTML = '';

            let total = 0;
            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('cart-item');
                listItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 5px;">
                    <span>${item.name} - ${item.price} kr x ${item.quantity}</span>
                    <button onclick="removeFromCart(${index})">Ta bort</button>
                `;
                cartItemsElement.appendChild(listItem);

                total += item.price * item.quantity;
            });

            totalElement.textContent = total;
        }

        function checkout() {
            cart = [];
            updateCart();

            alert('Tack för ditt köp!');
        }

        function toggleCart() {
            const cartElement = document.getElementById('cart');
            cartElement.style.display = cartElement.style.display === 'none' ? 'flex' : 'none';
        }
    </script>
    <footer>
        <p>&copy; 2024 LegitHemsida.se Alla rättigheter förbehållna.</p>
    </footer>
</body>
</html>
