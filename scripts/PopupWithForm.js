import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitter) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupImageShowPicture = this._popup.querySelector('.popup__image');
        this._popupImageShowText = this._popup.querySelector('.popup__text');
        this._submitter = submitter;
        this._popupFormInputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        const inputValues = [];
        this._popupFormInputs.forEach(input => {
            inputValues.push(input.value);
        });
        
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submitter);
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}