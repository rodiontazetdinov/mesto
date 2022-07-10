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

    disableBtn () {
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

    _showInputError (input) {
        const errorElement = document.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);
        this.disableBtn();
    }
    
    _hideInputError (input) {
        const errorElement = document.querySelector(`#${input.id}-error`);
        errorElement.textContent = '';
        input.classList.remove(this._inputErrorClass);
        if (this._isValid()) {
            this._activateBtn();
        }
    }

    _handleInput (input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        }
        if (!input.validity.valid) {
            this._showInputError(input);
        }
    }

    _setValidation () {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._handleInput(input);
            });   
        });
    }

    enableValidation() {
        this._setValidation();
    }

    resetValidation() {
        this.disableBtn();
        this._inputList.forEach((input) => {
            
            this._hideInputError(input);
        });
      }
}