import {Card} from './Card.js';
import { imagePopup, userInfo } from '../pages/index.js';

export function createCard (item) {
    const card = new Card(
        item.name,
        item.link,
        item.likes.length,
        '#card',
        (evt) => {
            imagePopup.open(item.link, item.name);
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