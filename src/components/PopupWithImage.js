import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageShowPicture = this._popup.querySelector('.popup__image');
        this._popupImageShowText = this._popup.querySelector('.popup__text');
    }

    open(imageSrc, imageName) {
        super.open();
        this._popupImageShowPicture.src = imageSrc;
        this._popupImageShowPicture.alt = `место в ${imageName}`;
        this._popupImageShowText.textContent = imageName;
    }
}