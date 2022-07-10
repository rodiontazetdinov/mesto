import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        
        this._submitButton = this._popup.querySelector('.popup__button');
    }

    getSubmitter(submitter) {
        this._submitter = submitter;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', () => {
            this._submitter();
        }
        );
    }
}