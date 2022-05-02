'use strict';

const editBtn = document.querySelector('.profile__edit'),
    addBtn = document.querySelector('.profile__add-button'),
    personName = document.querySelector('.profile__person'),
    personJob = document.querySelector('.profile__job');

//стартовая страница
const initialCards = [{
        name: 'Нью-Йорк',
        link: './images/new_york.jpg',
        alt: 'вид с птичьего полёта на нью-йорк'
    },
    {
        name: 'Сочи',
        link: './images/sochi.jpg',
        alt: 'домики в горах сочи'
    },
    {
        name: 'Цюрих',
        link: './images/zurich.jpg',
        alt: 'улица с трамваем в Цюрихе'
    },
    {
        name: 'Москва',
        link: './images/moscow.jpg',
        alt: 'вид на МГУ в Москве'
    },
    {
        name: 'Лондон',
        link: './images/london.jpg',
        alt: 'тауэрский мост в Лондоне'
    },
    {
        name: 'Лиезен',
        link: './images/liezen.jpg',
        alt: 'дома на фоне гор в Лиезене'
    }
];

popupOpen('Редактировать профиль', 'Имя', 'О себе', 'Сохранить', personName.textContent, personJob.textContent);
popupOpen('Новое место', 'Название', 'Ссылка на картинку', 'Создать');

//отрисовываются 6 карточек

for (let i = 0; i < initialCards.length; i++) {
    cardAdd(initialCards[i].name, initialCards[i].link, initialCards[i].alt);
}


//обработчики

editBtn.addEventListener('click', () => {
    const popup = document.querySelectorAll('.popup')[0];
    popupToggle(popup);
});

addBtn.addEventListener('click', () => {
    const popup = document.querySelectorAll('.popup')[1];
    popupToggle(popup);
});

const popupCloseBtns = document.querySelectorAll('.popup__close');

popupCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (event) => {
        popupToggle(closeBtn.closest('.popup'));

    });
});



//функции

function cardAdd(name, link, alt = `изображение места в ${name}`) {
    const cardTemplate = document.querySelector('#card').content,
        cardElement = cardTemplate.cloneNode(true),
        cardImage = cardElement.querySelector('.cards-list__card-image'),
        cardTitle = cardElement.querySelector('.cards-list__name'),
        cardsList = document.querySelector('.cards-list'),
        likeBtn = cardElement.querySelector('.cards-list__like img'),
        cardsBin = cardElement.querySelector('.cards-list__card-bin');

    cardImage.src = link;
    cardImage.alt = alt;
    cardTitle.textContent = name;

    cardsList.prepend(cardElement);

    createPopupFromTemplate(cardImage, cardTitle);

    likeBtn.addEventListener('click', (event) => {
        if (event.target.src.includes('like_icon_active.svg')) {
            event.target.src = "./images/like_icon.svg";
        } else if (event.target.src.includes('like_icon.svg')) {
            event.target.src = "./images/like_icon_active.svg";
        }
    });

    cardsBin.addEventListener('click', (event) => {

        const imagePopups = document.querySelectorAll('.image-popup');

        imagePopups.forEach((imagePopup) => {
            let image;
            image = imagePopup.querySelector('.image-popup__image');
            const cardImage = event.target.closest('.cards-list__card-container').querySelector('.cards-list__card-image');

            if (image.src == cardImage.src) {
                imagePopup.remove();
            }
        });

        event.target.closest('.cards-list__card-container').remove();

    });

    cardImage.addEventListener('click', (event) => {
        showImage(event);
    });
}

function popupOpen(title, topPlaceholder, bottomPlaceholder, submit, name = '', job = '') {
    const popupTemplate = document.querySelector('#popup-template').content,
        popupElement = popupTemplate.cloneNode(true),
        popupTitle = popupElement.querySelector('.popup__title'),
        popupName = popupElement.querySelector('.popup__name'),
        popupJob = popupElement.querySelector('.popup__job'),
        popupBtn = popupElement.querySelector('.popup__button'),
        popupClose = popupElement.querySelector('.popup__close'),
        popupForm = popupElement.querySelector('.popup__form'),
        personName = document.querySelector('.profile__person'),
        personJob = document.querySelector('.profile__job'),
        popup = popupElement.querySelector('.popup'),
        body = document.querySelector('.page');

    popupTitle.textContent = title;
    popupName.value = name;
    popupJob.value = job;
    popupName.placeholder = topPlaceholder;
    popupJob.placeholder = bottomPlaceholder;
    popupBtn.textContent = submit;

    body.append(popupElement);

    popupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (popupBtn.textContent === 'Сохранить') {
            personName.textContent = popupName.value;
            personJob.textContent = popupJob.value;
        } else if (popupBtn.textContent === 'Создать') {
            cardAdd(popupName.value, popupJob.value);
        }

        popupToggle(popup);
    });
}

function popupToggle(popup) {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
    }
}

function createPopupFromTemplate(cardImage, cardTitle) {
    const popupImageTemplate = document.querySelector('#image-popup-template').content,
        popupElement = popupImageTemplate.cloneNode(true),
        imagePopupElement = popupElement.querySelector('.image-popup__image'),
        textPopupElement = popupElement.querySelector('.image-popup__text'),
        closePopupElement = popupElement.querySelector('.popup__icon'),
        popup = document.querySelector('.image-popup'),
        body = document.querySelector('.page');

    imagePopupElement.src = cardImage.src;
    textPopupElement.textContent = cardTitle.textContent;

    closePopupElement.addEventListener('click', (event) => {
        const popup = event.target.closest('.image-popup');
        popupToggle(popup);
    });
    body.append(popupElement);
}

function showImage(event) {
    const popups = document.querySelectorAll('.image-popup');
          popups.forEach((popup) => {
            let image;
            image = popup.querySelector('.image-popup__image');
            if (image.src === event.target.src) {
                popupToggle(image.closest('.image-popup'));
            }
          });
}