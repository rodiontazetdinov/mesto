// import {openPopup, switchLike} from './index.js';

export class Card {
    constructor(title, url, templateSelector) {
        this._title = title;
        this._url = url;
        this._element = document.querySelector(templateSelector)
        .content.querySelector('.cards-list__card-container');
    }

    _formCard() {
        const card = this._element.cloneNode(true),
              image = card.querySelector('.cards-list__card-image'),
              name = card.querySelector('.cards-list__name');
            //   trash = card.querySelector('.cards-list__card-bin'),
            //   like = card.querySelector('.cards-list__like');

        image.src = this._url;
        name.textContent = this._title;
        image.alt = `Изображение места в ${this._title}`;

        // this._setEventListeners(image, trash, like, name);

        return card;
    }

    // _setEventListeners(image, trash, like, name) {
    //     const popupImageShow = document.querySelector('.popup_type_show-image'),
    //           popupImageShowPicture = popupImageShow.querySelector('.popup__image'),
    //           popupImageShowText = popupImageShow.querySelector('.popup__text');

    //     image.addEventListener('click', () => {
    //     popupImageShowPicture.src = image.src;
    //     popupImageShowPicture.alt = image.alt;
    //     popupImageShowText.textContent = name.textContent;

    //     openPopup(popupImageShow);
    //     });

    //     trash.addEventListener('click', (event) => {
    //         event.target.closest('.cards-list__card-container').remove();
    //     });
    
    //     like.addEventListener('click', () => {
    //         switchLike(like);
    //     });
        
        
    // }

    getCard() {
        const card =this._formCard();
        return card;
    }
}

