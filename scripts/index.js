'use strict';

const editBtn = document.querySelector('.profile__edit'),
      addBtn = document.querySelector('.profile__add-button'),
      formName = document.querySelector('.popup__name'),
      formJob = document.querySelector('.popup__job'),
      personName = document.querySelector('.profile__person'),
      personJob = document.querySelector('.profile__job');

//стартовая страница
const initialCards = [
{
    name: 'Лиезен',
    link: './images/liezen.jpg',
    alt: 'дома на фоне гор в Лиезене'
},
{
    name: 'Лондон',
    link: './images/london.jpg',
    alt: 'тауэрский мост в Лондоне'
},
{
    name: 'Москва',
    link: './images/moscow.jpg',
    alt: 'вид на МГУ в Москве'
},
{
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
}
]; 

for (let i = 0; i < initialCards.length; i++) {
    cardAdd(initialCards[i].name, initialCards[i].link, initialCards[i].alt);
}

//обработчики

editBtn.addEventListener('click', () => {
    popupOpen('Редактировать профиль', 'Имя', 'О себе', 'Сохранить', personName.textContent, personJob.textContent);
});

addBtn.addEventListener('click', () => {
    popupOpen('Новое место', 'Название', 'Ссылка на картинку', 'Создать');
});

//функции

function cardAdd(name, link, alt=`изображение места в ${name}`) {
    const cardTemplate = document.querySelector('#card').content,
          cardElement = cardTemplate.cloneNode(true),
          cardImage = cardElement.querySelector('.cards-list__card-image'),
          cardTitle = cardElement.querySelector('.cards-list__name'),
          cardsList = document.querySelector('.cards-list');

    cardImage.src = link;
    cardImage.alt = alt;
    cardTitle.textContent = name;

    cardsList.prepend(cardElement);  
}

function popupOpen(title, topPlaceholder, bottomPlaceholder, submit, name='', job='') {
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
    popupToggle(popup);

    popupClose.addEventListener('click', () => {
        popup.remove();
    });

    popupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (popupBtn.textContent === 'Сохранить') {
            personName.textContent = popupName.value;
            personJob.textContent = popupJob.value;
        } else if (popupBtn.textContent === 'Создать') {
            cardAdd(popupName.value, popupJob.value);
        }
        
        popup.remove();
    });
}

function popupToggle(popup) {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
    }
}