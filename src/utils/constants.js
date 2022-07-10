import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {createCard} from './functions.js';


//попап демонстрации картинок
export const imagePopup = new PopupWithImage('.popup_type_show-image');

//API
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
    authorization: '31ceb449-7f5f-494e-b20d-eecaa293257f',
    'Content-Type': 'application/json'
  }
});

//экземляр класса управления данными профиля
export const userInfo = new UserInfo('.profile__person', '.profile__job', '.profile__avatar');

//экземляр класса отрисовки начальных карточек
export const cardSection = new Section({
    items: [],
    renderer: (item) => {
        return createCard(item);
    }
}, '.cards-list');

//попап добавления карточек
export const cardForm = new PopupWithForm(
    '.popup_type_card-add',
    () => {
        cardForm.changeText('Сохранение...');
        const cardValues = cardForm.getInputValues();
        api.postNewCard(cardValues)
        .then(cardData => {
            const card = createCard(cardData);
            cardSection.addItem(card);
            cardForm.close();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            cardForm.changeText('Сохранить');
            
        });
    }
);

//попап редактирования профиля
export const profileForm = new PopupWithForm(
    '.popup_type_profile-edit',
    (evt) => {
        //evt.preventDefault();
        profileForm.changeText('Сохранение...');
        const profileData = profileForm.getInputValues();
        api.patchUserInfo(profileData)
        .then(data => {
            userInfo.setUserInfo(data);
            profileForm.close();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            profileForm.changeText('Сохранить');
            
        });
    }
);

//попап изменения аватара
export const avatarForm = new PopupWithForm(
    '.popup_type_avatar-save',
    (evt) => {
        //evt.preventDefault();
        avatarForm.changeText('Сохранение...');
        const avatarData = avatarForm.getInputValues();
        api.setAvatar(avatarData)
        .then(data => {
            userInfo.setAvatarSrc(data);
            avatarForm.close();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            avatarForm.changeText('Сохранить');
            
        });
    }
);

//попап подтверждения удаления карточкчи
export const confirmForm = new PopupWithForm('.popup_type_confirm');

//конфиг для создания экземпляра валидации
export const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
};

//формы для валидации
export const popupAddCardForm = document.querySelector('.popup_type_card-add .popup__form');
export const popupEditProfileForm = document.querySelector('.popup_type_profile-edit .popup__form');
export const popupEditAvatarForm = document.querySelector('.popup_type_avatar-save .popup__form');

//экземляр класса валидации формы редактирования профиля
export const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

//экземляр класса валидации формы добавления карточек
export const popupAddCardFormValidator = new FormValidator(validationConfig, popupAddCardForm); 

//экземляр класса валидации формы обновления аватара 
export const popupEditAvatarFormValidator = new FormValidator(validationConfig, popupEditAvatarForm);

//кнопки профиля и добавления карточек
export const profileEditBtn = document.querySelector('.profile__edit');
export const cardAddBtn = document.querySelector('.profile__add-button');
export const avatarBtn = document.querySelector('.profile__avatar-update');




