'use strict';

const popup = document.querySelector('.popup'),
      editBtn = document.querySelector('.profile__edit'),
      popupClose = document.querySelector('.popup__close'),
      formName = document.querySelector('.popup__name'),
      formJob = document.querySelector('.popup__job'),
      personName = document.querySelector('.profile__person'),
      personJob = document.querySelector('.profile__job'),
      form = document.querySelector('.popup__form');

formName.value = 'Жак-Ив Кусто';
formJob.value = 'Исследователь океана';

function popupToggle() {
    popup.classList.toggle('popup_opened');
}

editBtn.addEventListener('click', () => {
    popupToggle();
    // popup.classList.toggle('popup_opened');
});

popupClose.addEventListener('click', () => {
    popupToggle();
    // popup.classList.toggle('popup_opened');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formName.value && formJob.value) {
        personName.textContent = formName.value;
        personJob.textContent = formJob.value;
    }
    popupToggle();
});
