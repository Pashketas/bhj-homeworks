const plusBtns = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const minusBtns = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
const addBtns = Array.from(document.getElementsByClassName('product__add'));

plusBtns.forEach((item) => item.addEventListener('click', () => {
	const quantity = item.previousElementSibling;
	quantity.textContent ++;
}));

minusBtns.forEach((item) => item.addEventListener('click', () => {
	const quantity = item.nextElementSibling;
	quantity.textContent --;
	if (quantity.textContent == 0) {
		quantity.textContent = 1;
	}
}));

addBtns.forEach((item, index) => item.addEventListener('click', () => {
	const product = item.closest('.product');
	const image = product.querySelector('.product__image');
	const quantity = Number(product.querySelector('.product__quantity-value').textContent);
	const cart = document.querySelector('.cart__products');
	const products = Array.from(cart.getElementsByClassName('cart__product'));
	const addedProduct = products.find((item) => item.dataset.id == product.dataset.id);
	if (addedProduct) {
		const newQuantity = Number(addedProduct.querySelector('.cart__product-count').textContent) + quantity;
		addedProduct.querySelector('.cart__product-count').textContent = newQuantity;
		} else {
			let productDiv = document.createElement('div');
			productDiv.className = 'cart__product';
			productDiv.dataset.id = `${product.dataset.id}`
			productDiv.innerHTML = 
				`<img class="cart__product-image" src="${image.src}">
				 <div class="cart__product-count">${quantity}</div>`;
			cart.append(productDiv);
			}
}));