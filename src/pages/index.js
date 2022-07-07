'use strict';
import './index.css';
// import {initialCards as items} from '../components/cards.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {createCard, getProfile} from '../components/utils.js';
import Api from '../components/Api.js';

//попап демонстрации картинок
export const imagePopup = new PopupWithImage('.popup_type_show-image');

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
    authorization: '31ceb449-7f5f-494e-b20d-eecaa293257f',
    'Content-Type': 'application/json'
  }
});


const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
};

//экземляр класса управления данными профиля
export const userInfo = new UserInfo('.profile__person', '.profile__job');

//экземляр класса отрисовки начальных карточек
const cardSection = new Section({
    items: [],
    renderer: (item) => {
        return createCard(item);
    }
}, '.cards-list');

//попап добавления карточек
const cardForm = new PopupWithForm(
    '.popup_type_card-add',
    (evt) => {
        evt.preventDefault();
        cardForm.changeText('Сохранение...');
        const cardValues = cardForm.getInputValues();
        api.postNewCard(cardValues)
        .then(cardData => {
            console.log(cardData);
            const card = createCard(cardData);
            cardSection.addItem(card);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            cardForm.changeText('Сохранить');
            cardForm.close();
        });
        // const card = createCard(cardValues);
        // cardSection.addItem(card);
        // cardForm.close();
    }
);

//попап редактирования профиля
const profileForm = new PopupWithForm(
    '.popup_type_profile-edit',
    (evt) => {
        evt.preventDefault();
        profileForm.changeText('Сохранение...');
        const profileData = profileForm.getInputValues();
        api.patchUserInfo(profileData)
        .then(data => {
            userInfo.setUserInfo(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            profileForm.changeText('Сохранить');
            profileForm.close();
        });
    }
);

//формы для валидации
const popupAddCardForm = document.querySelector('.popup_type_card-add .popup__form');
const popupEditProfileForm = document.querySelector('.popup_type_profile-edit .popup__form');

//экземляр класса валидации формы редактирования профиля
const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

//экземляр класса валидации формы добавления карточек
const popupAddCardFormValidator = new FormValidator(validationConfig, popupAddCardForm); 

//кнопки профиля и добавления карточек
const profileEditBtn = document.querySelector('.profile__edit');
const cardAddBtn = document.querySelector('.profile__add-button');


//обработчики
imagePopup.setEventListeners();
profileForm.setEventListeners();
cardForm.setEventListeners();

cardAddBtn.addEventListener('click', () => {
    cardForm.open();
    popupAddCardFormValidator.disableBtn();
});

profileEditBtn.addEventListener('click', () => {
    profileForm.open();
    const data = userInfo.getUserInfo();
    profileForm.setInputValues(data);
    
});

//заполняем начальные данные профиля
api.getProfile()
        .then(data => {
            userInfo.setUserInfo(data);
        })
        .catch(err => {
            console.log(err);
        });

//включаем валидацию
popupEditProfileFormValidator.enableValidation();
popupAddCardFormValidator.enableValidation();

//отрисовываем начальные карточки
api.getInitialCards()
        .then(data => {
            cardSection.renderItems(data);
        })
        .catch(err => console.log(err));