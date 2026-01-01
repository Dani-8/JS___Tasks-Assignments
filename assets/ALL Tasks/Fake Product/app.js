let allProducts = [];
let cart = [];

window.onload = async () => {
    await fetchCategories();
    await fetchProducts();
};



async function fetchCategories() {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await res.json();
        const list = document.getElementById('categoryList');
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = "category-btn";
            btn.textContent = cat;
            btn.onclick = () => filterCategory(cat, btn);
            list.appendChild(btn);
        });
    } catch (e) { console.error(e); }
}

async function fetchProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        allProducts = data.sort(() => Math.random() - 0.5);
        renderProducts(allProducts);
    } catch (e) { console.error(e); }
}




function renderProducts(products) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
                <div class="product-card">
                    <div class="img-container">
                        <img src="${p.image}" alt="${p.title}">
                        <span class="tag">${p.category}</span>
                    </div>
                    <h4 class="product-title">${p.title}</h4>
                    <div class="product-footer">
                        <span class="price">$${p.price.toFixed(2)}</span>
                        <button onclick="addToCart(${p.id})" class="add-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
}



function filterCategory(cat, btn) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    else document.querySelector('.category-btn').classList.add('active');

    if (cat === 'all') renderProducts(allProducts);
    else renderProducts(allProducts.filter(p => p.category === cat));
}



function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    document.getElementById('cartSidebar').classList.add('open');
}



function updateCartUI() {
    document.getElementById('cartCount').textContent = cart.length;
    const itemsCont = document.getElementById('cartItems');
    itemsCont.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}">
                    <div class="cart-item-info">
                        <h5 class="cart-item-title">${item.title}</h5>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeItem(${index})" class="remove-item-btn">✕</button>
                </div>
            `).join('');

    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}



function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}



function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
}