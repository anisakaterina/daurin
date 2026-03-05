// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Cart Functionality
let cart = []
function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}
function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    let items = document.getElementById('cart-items');
    items.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        items.innerHTML += `<p>${item.name} - Rp ${item.price} <button onclick="removeFromCart(${index})">Hapus</button></p>`;
        total += item.price;
    });
    document.getElementById('total').textContent = total;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
function checkout() {
    if (cart.length === 0) return alert('Keranjang kosong!');
    let message = 'Pesanan: ' + cart.map(item => item.name).join(', ') + ' Total: Rp ' + document.getElementById('total').textContent;
    window.location.href = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`; // Ganti nomor WA
}

// Search Products
document.getElementById('search').addEventListener('input', (e) => {
    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = product.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? 'block' : 'none';
    });
});

// Contact Form Submit (Simulasi)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan terkirim! Terima kasih.');
});