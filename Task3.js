const products = document.querySelectorAll('.product');

products.forEach(product => {
    let inCart = false;

    product.addEventListener('click', () => {
        if (inCart) {
            product.style.backgroundColor = '#BC2E2E';
            const p = product.querySelector('#desc');
            if (p) {
                product.removeChild(p);
            }
            inCart = !inCart;
        } else {
            product.style.backgroundColor = '#00f';
            const p = document.createElement('p');
            p.textContent = '(добавлен в корзину)';
            p.style.fontSize = '1.2rem';
            p.id = 'desc'
            product.appendChild(p);
            inCart = !inCart;
        }
    });
});