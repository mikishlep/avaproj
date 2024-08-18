document.addEventListener('DOMContentLoaded', function() {
    const oneMonthButton = document.getElementById('one-month-btn');
    const foreverButton = document.getElementById('forever-btn');
    const moderLink = document.getElementById('moder-link');
    const priceElement = document.getElementById('moder-price');

    function updateSelection(selected) {
        if (selected === 'one-month') {
            oneMonthButton.classList.add('underline');
            foreverButton.classList.remove('underline');
            moderLink.href = 'firstML'; // Замените на фактическую ссылку
            priceElement.textContent = '449₽';
        } else {
            oneMonthButton.classList.remove('underline');
            foreverButton.classList.add('underline');
            moderLink.href = 'secML'; // Замените на фактическую ссылку
            priceElement.textContent = '999₽';
        }
    }

    oneMonthButton.addEventListener('click', function() {
        updateSelection('one-month');
    });

    foreverButton.addEventListener('click', function() {
        updateSelection('forever');
    });

    // Устанавливаем начальное состояние
    updateSelection('one-month');
});