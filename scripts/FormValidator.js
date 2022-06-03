export default class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this.submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _disableBtn () {
        this.submitButtonElement.classList.add(this._inactiveButtonClass);
        this.submitButtonElement.setAttribute('disabled', 'disabled');
    }

    _activateBtn () {
        this.submitButtonElement.classList.remove(this._inactiveButtonClass);
        this.submitButtonElement.removeAttribute('disabled');
    }
    
    _isValid () {
        return this._inputList.every((input) => {
            return input.validity.valid;
        });
        
    }

    _showInputError (evt) {
        const errorElement = document.querySelector(`#${evt.target.id}-error`);
        errorElement.textContent = evt.target.validationMessage;
        evt.target.classList.add(this._inputErrorClass);
        this._disableBtn();
    }
    
    _hideInputError (evt) {
        const errorElement = document.querySelector(`#${evt.target.id}-error`);
        errorElement.textContent = '';
        evt.target.classList.remove(this._inputErrorClass);
        if (this._isValid()) {
            this._activateBtn();
        }
    }

    _handleInput (evt) {
        if (evt.target.validity.valid) {
            this._hideInputError(evt);
        }
        if (!evt.target.validity.valid) {
            this._showInputError(evt);
        }
    }

    _setValidation () {
        this._inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._handleInput(evt);
            });   
        });
    }

    enableValidation() {
        this._setValidation();
    }
}