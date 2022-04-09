'use strict';

const popup = document.querySelector('.popup'),
      editBtn = document.querySelector('.profile__edit'),
      popupClose = document.querySelector('.popup__close'),
      formName = document.querySelector('.popup__name'),
      formJob = document.querySelector('.popup__job'),
      saveBtn = document.querySelector('.popup__button'),
      personName = document.querySelector('.profile__person'),
      personJob = document.querySelector('.profile__job');

editBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
});

popupClose.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
});

saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (formName.value && formJob.value) {
        personName.textContent = formName.value;
        personJob.textContent = formJob.value;
        popup.classList.toggle('popup_opened');
    } else {
        popup.classList.toggle('popup_opened');
    }
});
