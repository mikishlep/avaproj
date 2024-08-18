function isElectron() {
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        console.log('Started with electron');
        return true;
    }

    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        console.log('Started with electron');
        return true;
    }

    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        console.log('Started with electron');
        return true;
    }

    console.log('Started with browser');
    return false;
}

window.onload = function() {
    const button = document.getElementById('mainButton');
    const buttonText = document.getElementById('buttonText');

    if (isElectron()) {
        buttonText.innerText = 'ИГРАТЬ';
        button.onclick = function() {
            window.location.href = 'https://play.avasuka.monster/';
        };
    }
};