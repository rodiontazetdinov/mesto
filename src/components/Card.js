export class Card {
    constructor(title, url, likeCount, templateSelector, handleCardClick) {
        this._title = title;
        this._url = url;
        this._likeCount = likeCount;

        this._card = document.querySelector(templateSelector)
        .content.querySelector('.cards-list__card-container')
        .cloneNode(true);
        
        this._image = this._card.querySelector('.cards-list__card-image');
        this._subtitle = this._card.querySelector('.cards-list__name');
        this._likeBtn = this._card.querySelector('.cards-list__like');
        this._trashBtn = this._card.querySelector('.cards-list__card-bin');
        this._likeCountElement = this._card.querySelector('.cards-list__like-counter');

        this._handleCardClick = handleCardClick;
    }

    _setImageClickListener() {
        this._image.addEventListener('click', this._handleCardClick);
    }

    _setTrashBtnListener() {
        this._trashBtn.addEventListener('click', () => {
            this.removeCard();
        });
    }

    _setLikeBtnListener() {
        this._likeBtn.addEventListener('click', () => {
            this.toggleLikeBtn();
        });
    }

    _setEventListeners() {
        this._setImageClickListener();
        this._setTrashBtnListener();
        this._setLikeBtnListener();
    }

    toggleLikeBtn() {
        this._likeBtn.classList.toggle('cards-list__like_active');
    }

    removeCard() {
        this._card.remove();
        this._card = null;
    } 

    formCard() {
        this._image.src = this._url;
        this._subtitle.textContent = this._title;
        this._image.alt = `Изображение места в ${this._title}`;
        this._likeCountElement.textContent = this._likeCount;
        this._setEventListeners();

        return this._card;
    }
}