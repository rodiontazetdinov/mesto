import {Card} from './Card.js';
import { imagePopup } from '../pages/index.js';

export default function createCard (item) {
    const card = new Card(
        item.name,
        item.link,
        '#card',
        (evt) => {
            imagePopup.open(item.link, item.name);
        }
    ).formCard();
    return card;
}