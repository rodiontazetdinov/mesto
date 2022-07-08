import {Card} from './Card.js';
import { imagePopup, userInfo, confirmForm, api } from '../pages/index.js';

export function createCard (item) {
    const card = new Card(
        item,
        '#card',
        (evt) => {
            imagePopup.open(item.link, item.name);
        },
        () => {
            confirmForm.open();
        }
    ).formCard();
    return card;
}

export function getProfile (api) {
    api.getProfile()
        .then(data => {
            userInfo.setUserInfo(data);
        })
        .catch(err => {
            console.log(err);
        });
}