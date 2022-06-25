import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCloseBtn = this._popup.querySelector('.popup__close');
        this._popupImageShowPicture = this._popup.querySelector('.popup__image');
        this._popupImageShowText = this._popup.querySelector('.popup__text');
    }

    open() {
        super.open();
        this._popupImageShowPicture.src = this._image.src; //взять value из формы создания карточки
        this._popupImageShowPicture.alt = this._image.alt; //взять value из формы создания карточки
        this._popupImageShowText.textContent = this._subtitle.textContent; //взять value из формы создания карточки
    }


}