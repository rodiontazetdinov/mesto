import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitter) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupImageShowPicture = this._popup.querySelector('.popup__image');
        this._popupImageShowText = this._popup.querySelector('.popup__text');
        this._submitter = submitter;
        this._popupFormInputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._submitButton = this._popup.querySelector('.popup__button');
    }

    changeText(text) {
        this._submitButton.textContent = text;
    } 

    getNewSubmitter(newSubmitter) {
        this._submitter = newSubmitter;
    }

    getInputValues() {
        this._formValues = {};
        this._popupFormInputs.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setInputValues(data) {
        this._popupFormInputs.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitter();
        }
        );
    }

    close() {
        super.close();
        
        this._popupForm.reset();
    }
}