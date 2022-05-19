'use strict';

// const validationConfig = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_error'
//     // errorClass: 'popup__error_visible'
// }

// const forms = document.querySelectorAll('.popup__form');

// forms.forEach((form) => {
//     const inputList = Array.from(form.querySelectorAll('.popup__input'));
//     const btn = form.querySelector('.popup__button');
//     setValidation(inputList, btn);
// });

function showInputError (evt, btn) {
    evt.target.nextSibling.nextSibling.textContent = evt.target.validationMessage;
    evt.target.classList.add(validationConfig.inputErrorClass);
    disableBtn(btn);
}

function hideInputError (evt, btn, inputList) {
    evt.target.nextSibling.nextSibling.textContent = '';
    evt.target.classList.remove(validationConfig.inputErrorClass);
    if (isValid(inputList)) {
        activateBtn(btn);
    }
}

function disableBtn (btn) {
    console.log('disabled');
    btn.classList.add(validationConfig.inactiveButtonClass);
    btn.setAttribute('disabled', 'disabled');
}

function activateBtn (btn) {
    btn.classList.remove(validationConfig.inactiveButtonClass);
    btn.removeAttribute('disabled');
}

function isValid (inputList) {
    return inputList.every((input) => {
        return input.validity.valid;
    });
}

function handleInput (evt, btn, inputList) {
    if (evt.target.validity.valid) {
        hideInputError(evt, btn, inputList);
    }
    if (!evt.target.validity.valid) {
        showInputError(evt, btn);
    }
}

function setValidation (inputList, btn) {
    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            handleInput(evt, btn,inputList);
        });
    });
}

function enableValidation (validationConfig) {
    const forms = document.querySelectorAll(validationConfig.formSelector);

    forms.forEach((form) => {
        const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
        const btn = form.querySelector(validationConfig.submitButtonSelector);
        setValidation(inputList, btn);
    });  
}


////////////////////////////////
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
    // errorClass: 'popup__error_visible'
}
///////////////////////////////
enableValidation(validationConfig);
