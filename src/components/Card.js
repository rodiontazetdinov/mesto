export class Card {
    constructor( { name, link, likes, _id, owner }, templateSelector, _myId, handleCardClick, handleDeleteClick, plusLikeClick, minusLikeClick) {
        this._name = name;
        this._link = link;
        this._likes = likes.length;
        this._likesArr = likes;
        this._id = _id;
        this._ownerId = owner._id;
        this._myId = _myId;

        this._card = document.querySelector(templateSelector)
        .content.querySelector('.cards-list__card-container')
        .cloneNode(true);
        
        this._image = this._card.querySelector('.cards-list__card-image');
        this._subname = this._card.querySelector('.cards-list__name');
        this._likeBtn = this._card.querySelector('.cards-list__like');
        this._trashBtn = this._card.querySelector('.cards-list__card-bin');
        this._likesElement = this._card.querySelector('.cards-list__like-counter');

        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._plusLikeClick = plusLikeClick;
        this._minusLikeClick = minusLikeClick;
    }

    _setImageClickListener() {
        this._image.addEventListener('click', this._handleCardClick);
    }

    _setTrashBtnListener() {
        this._trashBtn.addEventListener('click', () => {
            this._handleDeleteClick(this._id);
        });
    }

    _setLikeBtnListener() {
        this._likeBtn.addEventListener('click', () => {
            this.toggleLikeBtn();
            if (this._likeBtn.classList.contains('cards-list__like_active')) {
                this._plusLikeClick(this._id);
                
            } else if (!this._likeBtn.classList.contains('cards-list__like_active')) {
                this._minusLikeClick(this._id);
            }
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
    
    _handleDeleteBtnState() {
        if (this._ownerId !== this._myId) {
            this._trashBtn.classList.add('cards-list__card-bin_hidden');
            
        }
    }

    setLikes(likes) {
        this._likes = likes.length;
        this._likesElement.textContent = this._likes;
    }

    _checkLikes() {
        this._likesArr.forEach((like) => {
            if (like._id === this._myId) {
                this._likeBtn.classList.add('cards-list__like_active');
            }
        });
    }        

    formCard() {
        this._image.src = this._link;
        this._subname.textContent = this._name;
        this._image.alt = `Изображение места в ${this._name}`;
        this._likesElement.textContent = this._likes;
        this._checkLikes();
        this._handleDeleteBtnState();
        this._setEventListeners();

        return this._card;
    }
}