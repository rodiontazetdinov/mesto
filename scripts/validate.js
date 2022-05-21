'use strict';

// const validationConfig = {
//     formSelector: '.popup__form',
//     addCardForm: 'popup_type_card-add',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_error',
//     profileBtn: '.profile__add-button'
// }

function showInputError (evt, btn, validationConfig) {
    const errorElement = document.querySelector(`#${evt.target.id}-error`);
    errorElement.textContent = evt.target.validationMessage;
    evt.target.classList.add(validationConfig.inputErrorClass);
    disableBtn(btn, validationConfig);
}

function hideInputError (evt, btn, inputList, validationConfig) {
    const errorElement = document.querySelector(`#${evt.target.id}-error`);
    errorElement.textContent = '';
    evt.target.classList.remove(validationConfig.inputErrorClass);
    if (isValid(inputList)) {
        activateBtn(btn, validationConfig);
    }
}

function disableBtn (btn, validationConfig) {
    btn.classList.add(validationConfig.inactiveButtonClass);
    btn.setAttribute('disabled', 'disabled');
}

function activateBtn (btn, validationConfig) {
    btn.classList.remove(validationConfig.inactiveButtonClass);
    btn.removeAttribute('disabled');
}

function isValid (inputList) {
    return inputList.every((input) => {
        return input.validity.valid;
    });
}

function handleInput (evt, btn, inputList, validationConfig) {
    if (evt.target.validity.valid) {
        hideInputError(evt, btn, inputList, validationConfig);
    }
    if (!evt.target.validity.valid) {
        showInputError(evt, btn, validationConfig);
    }
}

function setValidation (inputList, btn, validationConfig) {
    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            handleInput(evt, btn, inputList, validationConfig);
        });   
    });
}

function enableValidation (validationConfig) {
    const forms = document.querySelectorAll(validationConfig.formSelector);

    forms.forEach((form) => {
        const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
        const btn = form.querySelector(validationConfig.submitButtonSelector);
        setValidation(inputList, btn, validationConfig);
    });
}

function setCheckBtn (profileBtn, btn) {
    profileBtn.addEventListener('click', () => {
        disableBtn(btn);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
});
