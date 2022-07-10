'use strict';
import './index.css';
import {
    imagePopup,
    api,
    userInfo,
    cardSection,
    profileForm,
    cardForm,
    confirmPopup,
    avatarForm,
    cardAddBtn,
    popupAddCardFormValidator,
    profileEditBtn,
    popupEditAvatarFormValidator,
    popupEditProfileFormValidator,
    avatarBtn
} from '../utils/constants.js';


//обработчики
imagePopup.setEventListeners();
profileForm.setEventListeners();
cardForm.setEventListeners();
confirmPopup.setEventListeners();
avatarForm.setEventListeners();

cardAddBtn.addEventListener('click', () => {
    cardForm.open();
    popupAddCardFormValidator.resetValidation();
});

profileEditBtn.addEventListener('click', () => {
    profileForm.open();
    const data = userInfo.getUserInfo();
    profileForm.setInputValues(data);
    
});

avatarBtn.addEventListener('click', () => {
    avatarForm.open();
    popupEditAvatarFormValidator.resetValidation();
});


//включаем валидацию
popupEditProfileFormValidator.enableValidation();
popupAddCardFormValidator.enableValidation();
popupEditAvatarFormValidator.enableValidation();

//Получаем данные пользователя и карточек с сервера
Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData);
        userInfo.setAvatarSrc(userData);
        userInfo.setUserId(userData);

        cardSection.renderItems(cards);
    })
    .catch(err => {
    console.log(err);
    });