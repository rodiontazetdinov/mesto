export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popup.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        window.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        window.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _addPopupCloser() {
        this._popupCloseBtn.addEventListener('click', () => {
            this.close();
        });
    }

    _addEmptySpaceCloser() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    }

    setEventListeners() {
        this._addPopupCloser();
        this._addEmptySpaceCloser();
    }
}