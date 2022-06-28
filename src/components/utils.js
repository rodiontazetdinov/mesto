export function openPopup(popup) {
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', addEscCloser);
}

export function addEscCloser(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
            if (popup) {
                closePopup(popup);
            }
        }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', addEscCloser);
}