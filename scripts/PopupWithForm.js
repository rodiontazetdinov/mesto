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
        const items = [];
        const item = {
                name: inputValues[0],
                link: inputValues[1]
                };    
        items.push(item);
        
        return items;
    }

    setInputValues(data) {
        this._popupFormInputs.forEach((input, idx) => {
            input.value = data[idx];
        });

    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submitter);
    }

    close() {
        super.close();
        if (this._popup.classList.contains('popup_type_card-add')) {
            this._popupForm.reset();
        }
    }
}