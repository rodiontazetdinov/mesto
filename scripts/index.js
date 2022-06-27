'use strict';
import {initialCards as items} from './cards.js';
import {Card} from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import { openPopup, addEscCloser, closePopup } from './utils.js';

const imagePopup = new PopupWithImage('.popup_type_show-image');
      imagePopup.setEventListeners();


const section = new Section({
    items: items,
    renderer: (item) => {
        const card = new Card(
            item.name,
            item.link,
            '#card',
            (evt) => {
                imagePopup.open(item.link, item.name);
            }
        ).formCard();
        return card;
    }
}, '.cards-list');

section.renderItems();

const cardForm = new PopupWithForm(
    '.popup_type_card-add',
    (evt) => {
        evt.preventDefault();
        
    }
);
// const body = document.querySelector('body'),
//     profileEditBtn = body.querySelector('.profile__edit'),
//     cardAddBtn = body.querySelector('.profile__add-button'),
//     btnsClose = body.querySelectorAll('.popup__close'),
//     personName = body.querySelector('.profile__person'),
//     personJob = body.querySelector('.profile__job'),

//     popups = body.querySelectorAll('.popup'),
//     cardsList = body.querySelector('.cards-list');

//     export const  popupImageShow = document.querySelector('.popup_type_show-image');
//     export const popupImageShowPicture = popupImageShow.querySelector('.popup__image');
//     export const popupImageShowText = popupImageShow.querySelector('.popup__text');
    
//     const popupAddCard = document.querySelector('.popup_type_card-add'),
//     popupAddCardForm = popupAddCard.querySelector('.popup__form'),
//     popupAddCardFormTitle = popupAddCardForm.querySelector('.popup__input_type_place-name'),
//     popupAddCardFormUrl = popupAddCardForm.querySelector('.popup__input_type_image-url'),

//     popupEditProfile = document.querySelector('.popup_type_profile-edit'),
//     popupEditProfileForm = popupEditProfile.querySelector('.popup__form'),
//     popupEditProfileFormName = popupEditProfileForm.querySelector('.popup__input_type_user-name'),
//     popupEditProfileFormNameJob = popupEditProfileForm.querySelector('.popup__input_type_user-job'),

//     templateSelector = '#card';

// const popupEditProfileFormValidator = new FormValidator({
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_error'
// }, popupEditProfileForm);

// const popupAddCardFormValidator = new FormValidator({
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_error'
// }, popupAddCardForm); 


// // функции

// function addCard(card) {
//     cardsList.prepend(card);
// }

// function createCard(title, url, templateSelector) {
//     const card = new Card(title, url, templateSelector).formCard();
//     return card;
// }

// //обработчики

// profileEditBtn.addEventListener('click', () => {
//     openPopup(popupEditProfile);

//     popupEditProfileFormName.value = personName.textContent;
//     popupEditProfileFormNameJob.value = personJob.textContent;
    
// });

// cardAddBtn.addEventListener('click', () => {
//     openPopup(popupAddCard);
//     popupAddCardFormValidator.disableBtn();

// });

// btnsClose.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         closePopup(event.target.closest('.popup'));
//     });
// });

// popupAddCardForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const title = popupAddCardFormTitle.value,
//     url = popupAddCardFormUrl.value;

//     const card = createCard(title, url, templateSelector);
    
//     addCard(card);

//     closePopup(popupAddCard);

//     event.currentTarget.reset();
// });

// popupEditProfileForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     personName.textContent = popupEditProfileFormName.value;
//     personJob.textContent = popupEditProfileFormNameJob.value;

//     closePopup(popupEditProfile);
// });

// popups.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target === evt.currentTarget) {
//             closePopup(popup);
//         }
//     });
// });

// //отрисовываются 6 карточек

// for (let i = 0; i < initialCards.length; i++) {
//     addCard(createCard(initialCards[i].name, initialCards[i].link, templateSelector));
// }


// //включаем вадилацию

// popupEditProfileFormValidator.enableValidation();
// popupAddCardFormValidator.enableValidation();