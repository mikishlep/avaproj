document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.getElementById('price');
    const shopLink = document.getElementById('shop-link');
    
    document.querySelectorAll('.radio-button').forEach(radio => {
        radio.addEventListener('change', (event) => {
            const value = event.target.id;

            switch (value) {
                case 'fifteen':
                    priceElement.textContent = '99₽';
                    shopLink.href = 'link-for-x15';
                    break;
                case 'thirtyfive':
                    priceElement.textContent = '199₽';
                    shopLink.href = 'link-for-x35';
                    break;
                case 'hundred':
                    priceElement.textContent = '449₽';
                    shopLink.href = 'link-for-x100';
                    break;
                case 'threehundred':
                    priceElement.textContent = '1399₽';
                    shopLink.href = 'link-for-x350';
                    break;
            }
        });
    });
});