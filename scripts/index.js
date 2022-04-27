'use strict';

const popup = document.querySelector('.popup'),
      editBtn = document.querySelector('.profile__edit'),
      popupClose = document.querySelector('.popup__close'),
      formName = document.querySelector('.popup__name'),
      formJob = document.querySelector('.popup__job'),
      personName = document.querySelector('.profile__person'),
      personJob = document.querySelector('.profile__job'),
      form = document.querySelector('.popup__form');

// const cardTemplate = document.querySelector('#card').content,
//       cardElement = cardTemplate.cloneNode(true),
//       cardImage = cardElement.querySelector('.cards-list__card-image'),
//       cardTitle = cardElement.querySelector('.cards-list__name');


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


function cardAdd(name, link, alt='изображение места') {
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

function popupToggle() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
        
        formName.value = personName.textContent;
        formJob.value = personJob.textContent;
    }
}

for (let i = 0; i < initialCards.length; i++) {
    cardAdd(initialCards[i].name, initialCards[i].link, initialCards[i].alt);
}

editBtn.addEventListener('click', () => {
    popupToggle();
});

popupClose.addEventListener('click', () => {
    popupToggle();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    personName.textContent = formName.value;
    personJob.textContent = formJob.value;

    popupToggle();
});

cardAdd('Альбатрос', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Thalassarche_bulleri_-_SE_Tasmania.jpg/1280px-Thalassarche_bulleri_-_SE_Tasmania.jpg', 'изображение места');