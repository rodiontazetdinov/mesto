'use strict';

const popup = document.querySelector('.popup'),
      editBtn = document.querySelector('.profile__edit'),
      popupClose = document.querySelector('.popup__close'),
      formName = document.querySelector('.popup__name'),
      formJob = document.querySelector('.popup__job'),
      personName = document.querySelector('.profile__person'),
      personJob = document.querySelector('.profile__job'),
      form = document.querySelector('.popup__form');



function popupToggle() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
        
        formName.value = personName.textContent;
        formJob.value = personJob.textContent;
    }
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
