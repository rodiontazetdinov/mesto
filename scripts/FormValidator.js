export default class FormValidator {
    constructor(config) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
    }

    _disableBtn (btn, validationConfig) {
        btn.classList.add(validationConfig.inactiveButtonClass);
        btn.setAttribute('disabled', 'disabled');
        console.log('disableBtn');
    }

    _activateBtn (btn, validationConfig) {
        btn.classList.remove(validationConfig.inactiveButtonClass);
        btn.removeAttribute('disabled');
        console.log('activateBtn');
    }
    
    _isValid (inputList) {
        return inputList.every((input) => {
            return input.validity.valid;
        });
        
    }

    _showInputError (evt, btn, validationConfig) {
        const errorElement = document.querySelector(`#${evt.target.id}-error`);
        errorElement.textContent = evt.target.validationMessage;
        evt.target.classList.add(validationConfig.inputErrorClass);
        this._disableBtn(btn, validationConfig);
    }
    
    _hideInputError (evt, btn, inputList, validationConfig) {
        const errorElement = document.querySelector(`#${evt.target.id}-error`);
        errorElement.textContent = '';
        evt.target.classList.remove(validationConfig.inputErrorClass);
        if (this._isValid(inputList)) {
            this._activateBtn(btn, validationConfig);
        }
    }

    _handleInput (evt, btn, inputList, validationConfig) {
        if (evt.target.validity.valid) {
            this._hideInputError(evt, btn, inputList, validationConfig);
        }
        if (!evt.target.validity.valid) {
            this._showInputError(evt, btn, validationConfig);
        }
    }

    _setValidation (inputList, btn, validationConfig) {
        inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._handleInput(evt, btn, inputList, validationConfig);
            });   
        });
    }

    _sayHello () {
    }

    enableValidation() {
        const forms = document.querySelectorAll(this._formSelector);

        forms.forEach((form) => {
            const inputList = Array.from(form.querySelectorAll(this._inputSelector));
            const btn = form.querySelector(this._submitButtonSelector);
            const validationConfig = {
                formSelector: this._formSelector,
                inputSelector: this._inputSelector,
                submitButtonSelector: this._submitButtonSelector,
                inactiveButtonClass: this._inactiveButtonClass,
                inputErrorClass: this._inputErrorClass
            };
            this._setValidation(inputList, btn, validationConfig);
        });
    }
}