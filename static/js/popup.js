const button = document.getElementById('mainButton');
const modal = document.getElementById('reg');
const modalContent = document.querySelector('.reg-popup');

const forgotButton = document.getElementById('forgotPass');
const forgotModal = document.getElementById('forgot');
const forgotModalContent = document.querySelector('.forgot-popup');

const mailButton = document.getElementById('setMail');
const mailModal = document.getElementById('mail');
const mailModalContent = document.querySelector('.mail-popup');

const deleteButton = document.getElementById('deleteAcc');
const deleteModal = document.getElementById('delete');
const deleteModalContent = document.querySelector('.delete-popup');

if (button) {
    button.onclick = function() {
        modal.classList.add('open');
    };
}

if (modal) {
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    };
}

// reset pass

if (forgotButton) {
    forgotButton.onclick = function(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.remove('open');
        }
        forgotModal.classList.add('open');
    };
}

if (forgotModal) {
    forgotModal.onclick = function(event) {
        if (event.target === forgotModal) {
            forgotModal.classList.remove('open');
        }
    };
}

// reset pass

// set mail

if (mailButton) {
    mailButton.onclick = function(event) {
        event.preventDefault();
        mailModal.classList.add('open');
    };
}

if (mailModal) {
    mailModal.onclick = function(event) {
        if (event.target === mailModal) {
            mailModal.classList.remove('open');
        }
    };
}

// set mail

// delete acc

if (deleteButton) {
    deleteButton.onclick = function(event) {
        event.preventDefault();
        deleteModal.classList.add('open');
    };
}

if (deleteModal) {
    deleteModal.onclick = function(event) {
        if (event.target === deleteModal) {
            deleteModal.classList.remove('open');
        }
    };
}

// delete acc

