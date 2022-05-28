'use strict';

import {Card} from './Card.js';

const body = document.querySelector('body'),
    cardsList = body.querySelector('.cards-list'),
    profileEditBtn = body.querySelector('.profile__edit'),
    cardAddBtn = body.querySelector('.profile__add-button'),
    btnsClose = body.querySelectorAll('.popup__close'),
    personName = body.querySelector('.profile__person'),
    personJob = body.querySelector('.profile__job'),
    popups = body.querySelectorAll('.popup'),
    popupEditProfile = document.querySelector('.popup_type_profile-edit'),
    popupAddCard = document.querySelector('.popup_type_card-add'),
    popupImageShow = document.querySelector('.popup_type_show-image'),
    popupImageShowPicture = popupImageShow.querySelector('.popup__image'),
    popupImageShowText = popupImageShow.querySelector('.popup__text'),
    // template = document.querySelector('#card').content.querySelector('.cards-list__card-container'),
    popupAddCardForm = popupAddCard.querySelector('.popup__form'),
    popupAddCardFormTitle = popupAddCardForm.querySelector('.popup__input_type_place-name'),
    popupAddCardFormUrl = popupAddCardForm.querySelector('.popup__input_type_image-url'),
    popupAddCardFormSubmit = popupAddCardForm.querySelector('.popup__button'),
    popupEditProfileForm = popupEditProfile.querySelector('.popup__form'),
    popupEditProfileFormName = popupEditProfileForm.querySelector('.popup__input_type_user-name'),
    popupEditProfileFormNameJob = popupEditProfileForm.querySelector('.popup__input_type_user-job'),
    templateSelector = '#card';

//отрисовываются 6 карточек

for (let i = 0; i < initialCards.length; i++) {
    addNewCard(initialCards[i].name, initialCards[i].link, templateSelector);
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

    addNewCard(title, url, templateSelector);

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


// функции

function addEscCloser(evt) {
    if (evt.key === 'Escape') {
        const popup = body.querySelector('.popup_opened');
            if (popup) {
                closePopup(popup);
            }
        }
}


function addNewCard(title, url, templateSelector) {
    const newCard = new Card(title, url, templateSelector).getCard();
    setImageBtnListener(newCard);
    setTrashBtnListener(newCard);
    setLikeBtnListener(newCard);
    cardsList.prepend(newCard);
}

function setTrashBtnListener (newCard) {
    const trash = newCard.querySelector('.cards-list__card-bin');
    trash.addEventListener('click', (event) => {
        event.target.closest('.cards-list__card-container').remove();
    });
}

function setLikeBtnListener (newCard) {
    const like = newCard.querySelector('.cards-list__like');
    like.addEventListener('click', () => {
        switchLike(like);
    });
}

function setImageBtnListener (newCard) {
    const image = newCard.querySelector('.cards-list__card-image');

    image.addEventListener('click', () => {
        popupImageShowPicture.src = image.src;
        popupImageShowPicture.alt = image.alt;
        popupImageShowText.textContent = name.textContent;

        openPopup(popupImageShow);
    });

}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', addEscCloser);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', addEscCloser);
}

function switchLike(likeBtn) {
    likeBtn.classList.toggle('cards-list__like_active');
}