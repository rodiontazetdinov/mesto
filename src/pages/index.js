'use strict';
import './index.css';
import {initialCards as items} from '../components/cards.js';
import {Card} from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import createCard from '../components/utils.js';

//попап демонстрации картинок
export const imagePopup = new PopupWithImage('.popup_type_show-image');
      
//экземляр класса управления данными профиля
const userInfo = new UserInfo('.profile__person', '.profile__job');

//экземляр класса отрисовки начальных карточек
const startSection = new Section({
    items: items,
    renderer: (item) => {
        return createCard(item);
    }
}, '.cards-list');

//попап добавления карточек
const cardForm = new PopupWithForm(
    '.popup_type_card-add',
    (evt) => {
        evt.preventDefault();
        const item = cardForm.getInputValues();
        const card = createCard(item);
        startSection.addItem(card);
        cardForm.close();
    }
);

//попап редактирования профиля
const profileForm = new PopupWithForm(
    '.popup_type_profile-edit',
    (evt) => {
        evt.preventDefault();
        
        const inputValues = profileForm.getInputValues();
        userInfo.setUserInfo(
            {
                user: inputValues[0].name,
                info: inputValues[0].link
            }
        );
        profileForm.close();
    }
);

//формы для валидации
const popupAddCardForm = document.querySelector('.popup_type_card-add .popup__form');
const popupEditProfileForm = document.querySelector('.popup_type_profile-edit .popup__form');

//экземляр класса валидации формы редактирования профиля
const popupEditProfileFormValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}, popupEditProfileForm);

//экземляр класса валидации формы добавления карточек
const popupAddCardFormValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
}, popupAddCardForm); 

//кнопки профиля и добавления карточек
const profileEditBtn = document.querySelector('.profile__edit');
const cardAddBtn = document.querySelector('.profile__add-button');


//обработчики
imagePopup.setEventListeners();
profileForm.setEventListeners();
cardForm.setEventListeners();

cardAddBtn.addEventListener('click', () => {
    cardForm.open();
});

profileEditBtn.addEventListener('click', () => {
    profileForm.open();
    const data = userInfo.getUserInfo();
        profileForm.setInputValues(data);
    
});

//включаем валидацию
popupEditProfileFormValidator.enableValidation();
popupAddCardFormValidator.enableValidation();

//отрисовываем начальные карточки
startSection.renderItems();