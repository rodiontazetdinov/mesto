'use strict';
import './index.css';
import {
    imagePopup,
    api,
    userInfo,
    cardSection,
    profileForm,
    cardForm,
    confirmForm,
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
confirmForm.setEventListeners();
avatarForm.setEventListeners();

cardAddBtn.addEventListener('click', () => {
    cardForm.open();
    popupAddCardFormValidator.disableBtn();
});

profileEditBtn.addEventListener('click', () => {
    profileForm.open();
    const data = userInfo.getUserInfo();
    profileForm.setInputValues(data);
    
});

avatarBtn.addEventListener('click', () => {
    avatarForm.open();
    popupEditAvatarFormValidator.disableBtn();
});


//заполняем начальные данные профиля
// api.getProfile()
//         .then(data => {
//             userInfo.setUserInfo(data);
//             userInfo.setAvatarSrc(data);
//             userInfo.setUserId(data);
//         })
//         .catch(err => {
//             console.log(err);
//         });

// //включаем валидацию
// popupEditProfileFormValidator.enableValidation();
// popupAddCardFormValidator.enableValidation();
// popupEditAvatarFormValidator.enableValidation();


// //отрисовываем начальные карточки
// api.getInitialCards()
//         .then(data => {
//             cardSection.renderItems(data);
//         })
//         .catch(err => console.log(err));

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