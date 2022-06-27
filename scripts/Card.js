// import {popupImageShow, popupImageShowPicture, popupImageShowText} from './index.js';
import { openPopup, addEscCloser, closePopup } from './utils.js';
export class Card {
    constructor(title, url, templateSelector, handleCardClick) {
        this._title = title;
        this._url = url;

        this._card = document.querySelector(templateSelector)
        .content.querySelector('.cards-list__card-container')
        .cloneNode(true);
        
        this._image = this._card.querySelector('.cards-list__card-image');
        this._subtitle = this._card.querySelector('.cards-list__name');
        this._likeBtn = this._card.querySelector('.cards-list__like');
        this._trashBtn = this._card.querySelector('.cards-list__card-bin');

        this._handleCardClick = handleCardClick;
    }

    _setImageClickListener() {
        this._image.addEventListener('click', this._handleCardClick); //() => //{
            //popupImageShowPicture.src = this._image.src;
            //popupImageShowPicture.alt = this._image.alt;
            //popupImageShowText.textContent = this._subtitle.textContent;
            //openPopup(popupImageShow);
            
        //});
    }
    _setTrashBtnListener() {
        this._trashBtn.addEventListener('click', (evt) => {
            evt.target.closest('.cards-list__card-container').remove();
        });
    }

    _setLikeBtnListener() {
        this._likeBtn.addEventListener('click', () => {
            this._likeBtn.classList.toggle('cards-list__like_active');
        });
    }

    _setEventListeners() {
        this._setImageClickListener();
        this._setTrashBtnListener();
        this._setLikeBtnListener();
    }

    formCard() {
        this._image.src = this._url;
        this._subtitle.textContent = this._title;
        this._image.alt = `Изображение места в ${this._title}`;

        this._setEventListeners();

        return this._card;
    }
}