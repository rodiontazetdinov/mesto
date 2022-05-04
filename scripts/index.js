'use strict';

const profileEdit = document.querySelector('.profile__edit'),
    cardAdd = document.querySelector('.profile__add-button'),
    closeBtns = document.querySelectorAll('.popup__close'),
    personName = document.querySelector('.profile__person'),
    personJob = document.querySelector('.profile__job'),
    popupEditProfile = document.querySelector('.popup_edit'),
    popupAddCard = document.querySelector('.popup_card-add'),
    popupImageShow = document.querySelector('.popup_show-image'),
    template = document.querySelector('#card').content.querySelector('.cards-list__card-container');


//стартовая страница



//отрисовываются 6 карточек

// for (let i = 0; i < initialCards.length; i++) {
//     addCard(initialCards[i].name, initialCards[i].link, initialCards[i].alt);
// }


//обработчики

profileEdit.addEventListener('click', () => {
    openPopup(popupEditProfile);
});

cardAdd.addEventListener('click', () => {
    openPopup(popupAddCard);
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        closePopup(event.target.closest('.popup'));
    });
});

// profileEdit.addEventListener('click', () => {
//     // const popup = popups.querySelector('.popup_edit');
//     openPopup(popupEditProfile);
// });

// cardAdd.addEventListener('click', () => {
//     const popup = document.querySelectorAll('.popup')[1];
//     openPopup(popup);
// });

// const popupCloseBtns = document.querySelectorAll('.popup__close');

// popupCloseBtns.forEach((closeBtn) => {
//     closeBtn.addEventListener('click', (event) => {
//         openPopup(closeBtn.closest('.popup'));

//     });
// });



// //функции

// function addCard(name, link, alt = `изображение места в ${name}`) {
//     const cardElement = template.cloneNode(true),
//         cardImage = cardElement.querySelector('.cards-list__card-image'),
//         cardTitle = cardElement.querySelector('.cards-list__name'),
//         cardsList = document.querySelector('.cards-list'),
//         likeBtn = cardElement.querySelector('.cards-list__like img'),
//         cardsBin = cardElement.querySelector('.cards-list__card-bin');

//     cardImage.src = link;
//     cardImage.alt = alt;
//     cardTitle.textContent = name;

//     cardsList.prepend(cardElement);

//     createPopupFromTemplate(cardImage, cardTitle);

//     likeBtn.addEventListener('click', (event) => {
//         if (event.target.src.includes('like_icon_active.svg')) {
//             event.target.src = "./images/like_icon.svg";
//         } else if (event.target.src.includes('like_icon.svg')) {
//             event.target.src = "./images/like_icon_active.svg";
//         }
//     });

//     cardsBin.addEventListener('click', (event) => {

//         const imagePopups = document.querySelectorAll('.popup');

//         imagePopups.forEach((imagePopup) => {
//             let image;
//             image = imagePopup.querySelector('.popup__image');
//             const cardImage = event.target.closest('.cards-list__card-container').querySelector('.cards-list__card-image');

//             if (image.src == cardImage.src) {
//                 imagePopup.remove();
//             }
//         });

//         event.target.closest('.cards-list__card-container').remove();

//     });

//     cardImage.addEventListener('click', (event) => {
//         showImage(event);
//     });
// }

// function openPopup(title, topPlaceholder, bottomPlaceholder, submit, name = '', job = '') {
//     const popupTemplate = document.querySelector('#popup-template').content,
//         popupElement = popupTemplate.cloneNode(true),
//         popupTitle = popupElement.querySelector('.popup__title'),
//         popupName = popupElement.querySelector('.popup__name'),
//         popupJob = popupElement.querySelector('.popup__job'),
//         popupBtn = popupElement.querySelector('.popup__button'),
//         popupClose = popupElement.querySelector('.popup__close'),
//         popupForm = popupElement.querySelector('.popup__form'),
//         personName = document.querySelector('.profile__person'),
//         personJob = document.querySelector('.profile__job'),
//         popup = popupElement.querySelector('.popup'),
//         body = document.querySelector('.page');

//     popupTitle.textContent = title;
//     popupName.value = name;
//     popupJob.value = job;
//     popupName.placeholder = topPlaceholder;
//     popupJob.placeholder = bottomPlaceholder;
//     popupBtn.textContent = submit;

//     body.append(popupElement);

//     popupForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         if (popupBtn.textContent === 'Сохранить') {
//             personName.textContent = popupName.value;
//             personJob.textContent = popupJob.value;
//         } else if (popupBtn.textContent === 'Создать') {
//             addCard(popupName.value, popupJob.value);
//         }

//         openPopup(popup);
//     });
// }

function openPopup(popup) {
        popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// function createPopupFromTemplate(cardImage, cardTitle) {
//     const popupImageTemplate = document.querySelector('#popup-template').content,
//         popupElement = popupImageTemplate.cloneNode(true),
//         imagePopupElement = popupElement.querySelector('.popup__image'),
//         textPopupElement = popupElement.querySelector('.popup__text'),
//         closePopupElement = popupElement.querySelector('.popup__icon'),
//         popup = document.querySelector('.popup'),
//         body = document.querySelector('.page');

//     imagePopupElement.src = cardImage.src;
//     textPopupElement.textContent = cardTitle.textContent;

//     closePopupElement.addEventListener('click', (event) => {
//         const popup = event.target.closest('.popup');
//         openPopup(popup);
//     });
//     body.append(popupElement);
// }

// function showImage(event) {
//     const popups = document.querySelectorAll('.popup');
//           popups.forEach((popup) => {
//             let image;
//             image = popup.querySelector('.popup__image');
//             if (image.src === event.target.src) {
//                 openPopup(image.closest('.popup'));
//             }
//           });
// }