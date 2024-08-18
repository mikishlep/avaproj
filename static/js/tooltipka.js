tippy('#lang', {
    trigger: 'click',
    theme: 'light',
    content: 
    `<div>
    <button id="tooltipButton" class="russian">
    Русский
    </button> / 
    <button id="tooltipButton" class="english">
    English
    </button> / 
    <button id="tooltipButton" class="spanish">
    Espanol
    </button> / 
    <button id="tooltipButton" class="polish">
    Polski
    </button> / 
    <button id="tooltipButton" class="turkish">
    Türkçe
    </button>
    </div>`,
    allowHTML: true,
    interactive: true
});

document.addEventListener('click', function(e) {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'ru');
        console.log('Default language set to Russian');
    }

    document.addEventListener('click', function(event) {
        const targetClass = event.target.className;

        switch (targetClass) {
            case 'russian':
                localStorage.setItem('lang', 'ru');
                console.log('Language set to Russian');
                break;
            case 'english':
                localStorage.setItem('lang', 'en');
                console.log('Language set to English');
                break;
            case 'spanish':
                localStorage.setItem('lang', 'es');
                console.log('Language set to Spanish');
                break;
            case 'polish':
                localStorage.setItem('lang', 'pl');
                console.log('Language set to Polish');
                break;
            case 'turkish':
                localStorage.setItem('lang', 'tr');
                console.log('Language set to Turkish');
                break;
            default:
                break;
        }
    });
})