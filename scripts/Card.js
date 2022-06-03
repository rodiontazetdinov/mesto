export class Card {
    constructor(title, url, templateSelector) {
        this._title = title;
        this._url = url;
        this._card = document.querySelector(templateSelector)
        .content.querySelector('.cards-list__card-container')
        .cloneNode(true);

        this._cardsList = document.querySelector('.cards-list');

        this._image = this._card.querySelector('.cards-list__card-image');
        this._subtitle = this._card.querySelector('.cards-list__name');
        this._likeBtn = this._card.querySelector('.cards-list__like');
        this._trashBtn = this._card.querySelector('.cards-list__card-bin');

        this._popupImageShow = document.querySelector('.popup_type_show-image');
        this._popupImageShowPicture = this._popupImageShow.querySelector('.popup__image');
        this._popupImageShowText = this._popupImageShow.querySelector('.popup__text');
    }

    _openPopup() {
        this._popupImageShow.classList.add('popup_opened');
        window.addEventListener('keydown', this._addEscCloser);
    }

    _closePopup() {
        this._popupImageShow.classList.remove('popup_opened');
        window.removeEventListener('keydown', this._addEscCloser);
    }

    _setImageClickListener() {
        this._image.addEventListener('click', () => {
            this._popupImageShowPicture.src = this._image.src;
            this._popupImageShowPicture.alt = this._image.alt;
            this._popupImageShowText.textContent = this._subtitle.textContent;
            this._openPopup();
        });
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

    _formCard() {
        this._image.src = this._url;
        this._subtitle.textContent = this._title;
        this._image.alt = `Изображение места в ${this._title}`;

        this._setEventListeners();

        return this._card;
    }

    addCard() {
        this._cardsList.prepend(this._formCard());
    }

    _addEscCloser = (evt) => {
        if (evt.key === 'Escape') {
            this._closePopup();
            }
    }
}