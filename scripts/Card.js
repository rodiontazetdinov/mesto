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

        image.src = this._url;
        name.textContent = this._title;
        image.alt = `Изображение места в ${this._title}`;

        return card;
    }

    getCard() {
        const card =this._formCard();
        return card;
    }
}

