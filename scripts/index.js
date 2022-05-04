'use strict';

const body = document.querySelector('body'),
    cardsList = body.querySelector('.cards-list'),
    profileEditBtn = body.querySelector('.profile__edit'),
    cardAddBtn = body.querySelector('.profile__add-button'),
    closeBtns = body.querySelectorAll('.popup__close'),
    personName = body.querySelector('.profile__person'),
    personJob = body.querySelector('.profile__job'),
    popupEditProfile = document.querySelector('.popup_edit'),
    popupAddCard = document.querySelector('.popup_card-add'),
    popupImageShow = document.querySelector('.popup_show-image'),
    popupImageShowPicture = popupImageShow.querySelector('.popup__image'),
    template = document.querySelector('#card').content.querySelector('.cards-list__card-container'),
    popupAddCardForm = popupAddCard.querySelector('.popup__form'),
    popupEditProfileForm = popupEditProfile.querySelector('.popup__form'),
    popupEditProfileFormName = popupEditProfileForm.querySelector('.popup__name_type_user-name'),
    popupEditProfileFormNameJob = popupEditProfileForm.querySelector('.popup__job_type_user-job');

//отрисовываются 6 карточек

for (let i = 0; i < initialCards.length; i++) {
    addNewCard(initialCards[i].name, initialCards[i].link);
}

//обработчики

profileEditBtn.addEventListener('click', () => {
    openPopup(popupEditProfile);

    popupEditProfileFormName.value = personName.textContent;
    popupEditProfileFormNameJob.value = personJob.textContent;
    
});

cardAddBtn.addEventListener('click', () => {
    openPopup(popupAddCard);
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        closePopup(event.target.closest('.popup'));
    });
});

popupAddCardForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.querySelector('.popup__name_type_place-name').value,
    url = event.target.querySelector('.popup__job_type_image-url').value;

    addNewCard(title, url);

    closePopup(event.target.closest('.popup'));

    event.target.querySelector('.popup__name_type_place-name').value = '';
    event.target.querySelector('.popup__job_type_image-url').value = '';
});

popupEditProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.querySelector('.popup__name_type_user-name'),
    job = event.target.querySelector('.popup__job_type_user-job');

    personName.textContent = name.value;
    personJob.textContent = job.value;

    closePopup(event.target.closest('.popup'));
});




//функции

function addNewCard(title, url) {
    const newCard = formNewCard(title, url);
    cardsList.prepend(newCard);
}

function formNewCard(title, url) {
    const card = template.cloneNode(true),
    image = card.querySelector('.cards-list__card-image'),
    name = card.querySelector('.cards-list__name'),
    trash = card.querySelector('.cards-list__card-bin'),
    like = card.querySelector('.cards-list__like');

    image.src = url;
    name.textContent = title;

    image.addEventListener('click', (event) => {
        popupImageShowPicture.src = image.src;

        openPopup(popupImageShow);
    });    

    trash.addEventListener('click', (event) => {
        event.target.closest('.cards-list__card-container').remove();
    });

    like.addEventListener('click', (event) => {
        swithLike(like);
    });

    return card;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
popup.classList.remove('popup_opened');
}

function swithLike(likeBtn) {
    likeBtn.classList.toggle('cards-list__like_active');
}