'use strict';

const forms = document.querySelectorAll('.popup__form');

forms.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll('.popup__input'));
    const btn = form.querySelector('.popup__button');
    setValidation(inputList, btn);
});

function showInputError (evt, btn) {
    evt.target.nextSibling.nextSibling.textContent = evt.target.validationMessage;
    evt.target.classList.add('popup__input_error');
    disableBtn(btn);
}

function hideInputError (evt, btn, inputList) {
    evt.target.nextSibling.nextSibling.textContent = '';
    evt.target.classList.remove('popup__input_error');
    if (isValid(inputList)) {
        activateBtn(btn);
    }
}

function disableBtn (btn) {
    btn.classList.add('popup__button_disabled');
    btn.setAttribute('disabled', 'disabled');
}

function activateBtn (btn) {
    btn.classList.remove('popup__button_disabled');
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
