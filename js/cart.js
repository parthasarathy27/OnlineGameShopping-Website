function addToCart(name, price) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;  
    } else {
        cart.push({ name, price, quantity: 1 });  
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateTotal();  
    alert(`${name} added to cart! 🛒`);
    loadCart(); 
}

function removeFromCart(name) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let itemIndex = cart.findIndex(item => item.name === name);

    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;  
        } else {
            let confirmRemove = confirm(`Are you sure you want to remove ${name} from your cart?`);
            if (confirmRemove) {
                cart.splice(itemIndex, 1);  
            } else {
                return;  
            }
        }
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateTotal();  
    alert(`${name} removed from cart! ❌`);
    loadCart();  
}

function loadCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cart-items");
    
    if (cartDiv) {
        cartDiv.innerHTML = "";  
        let total = 0;

        if (cart.length === 0) {
            cartDiv.innerHTML = "<p class='text-center text-muted'>Your cart is empty 🛒</p>";
        } else {
            cart.forEach(item => {
                let div = document.createElement("div");
                div.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "p-2", "border");
                div.innerHTML = `
                    <h5>${item.name} - ₹${item.price} (x${item.quantity})</h5>
                    <div>
                        <button class="btn btn-success btn-sm" onclick="addToCart('${item.name}', ${item.price})">➕</button>
                        <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.name}')">➖</button>
                    </div>
                `;
                cartDiv.appendChild(div);
                total += item.price * item.quantity;
            });
        }
    }

    updateTotal();
}

function updateTotal() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    let totalPriceElements = document.querySelectorAll("#total-price");
    totalPriceElements.forEach(el => {
        el.innerText = `Total: ₹${total}`;
    });
}

function nextPage(page) {
    window.location.href = page;
}

function checkout() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length > 0) {
        alert("Purchase successful! 🎉");
        sessionStorage.removeItem("cart");  
        window.location.href = "page1.html";  
    } else {
        alert("Your cart is empty! 🛒");
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";  
}

if (window.location.pathname.includes("page1.html") || 
    window.location.pathname.includes("page2.html") || 
    window.location.pathname.includes("page3.html") || 
    window.location.pathname.includes("page4.html")) {
    loadCart();
}
