'use strict';
import {initialCards} from './cards.js';
import {Card} from './Card.js';
import FormValidator from './FormValidator.js';

const body = document.querySelector('body'),
    profileEditBtn = body.querySelector('.profile__edit'),
    cardAddBtn = body.querySelector('.profile__add-button'),
    btnsClose = body.querySelectorAll('.popup__close'),
    personName = body.querySelector('.profile__person'),
    personJob = body.querySelector('.profile__job'),
    popups = body.querySelectorAll('.popup'),
    popupEditProfile = document.querySelector('.popup_type_profile-edit'),
    popupAddCard = document.querySelector('.popup_type_card-add'),
    popupAddCardForm = popupAddCard.querySelector('.popup__form'),
    popupAddCardFormTitle = popupAddCardForm.querySelector('.popup__input_type_place-name'),
    popupAddCardFormUrl = popupAddCardForm.querySelector('.popup__input_type_image-url'),
    popupAddCardFormSubmit = popupAddCardForm.querySelector('.popup__button'),
    popupEditProfileForm = popupEditProfile.querySelector('.popup__form'),
    popupEditProfileFormName = popupEditProfileForm.querySelector('.popup__input_type_user-name'),
    popupEditProfileFormNameJob = popupEditProfileForm.querySelector('.popup__input_type_user-job'),
    templateSelector = '#card';

const popupEditProfileFormValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}, popupEditProfileForm);

const popupAddCardFormValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}, popupAddCardForm); 

//отрисовываются 6 карточек

for (let i = 0; i < initialCards.length; i++) {
    new Card(initialCards[i].name, initialCards[i].link, templateSelector).addCard();
}
//обработчики

profileEditBtn.addEventListener('click', () => {
    openPopup(popupEditProfile);

    popupEditProfileFormName.value = personName.textContent;
    popupEditProfileFormNameJob.value = personJob.textContent;
    
});

cardAddBtn.addEventListener('click', () => {
    openPopup(popupAddCard);
    disableBtn(popupAddCardFormSubmit, {
        inactiveButtonClass: 'popup__button_disabled'
    });
});

btnsClose.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        closePopup(event.target.closest('.popup'));
    });
});

popupAddCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = popupAddCardFormTitle.value,
    url = popupAddCardFormUrl.value;

    const card = new Card(title, url, templateSelector);
    card.addCard();

    closePopup(popupAddCard);

    event.currentTarget.reset();
});

popupEditProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    personName.textContent = popupEditProfileFormName.value;
    personJob.textContent = popupEditProfileFormNameJob.value;

    closePopup(popupEditProfile);
});

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    });
});



popupEditProfileFormValidator.enableValidation();
popupAddCardFormValidator.enableValidation();

// функции

function addEscCloser(evt) {
    if (evt.key === 'Escape') {
        const popup = body.querySelector('.popup_opened');
            if (popup) {
                closePopup(popup);
            }
        }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', addEscCloser);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', addEscCloser);
}

function disableBtn (btn, validationConfig) {
    btn.classList.add(validationConfig.inactiveButtonClass);
    btn.setAttribute('disabled', 'disabled');
}