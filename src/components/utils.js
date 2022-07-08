import {Card} from './Card.js';
import { imagePopup, api, confirmForm } from '../pages/index.js';
//
export function createCard (item) {
    const card = new Card(
        item,
        '#card',
        (evt) => {
            imagePopup.open(item.link, item.name);
        },
        (id) => {
            confirmForm.open();
            confirmForm.getNewSubmitter(() => {
                
                
                api.removeMyCard(id)
                .then(res => {
                    card.removeCard();
                    confirmForm.close();
                })
                .catch(err => {
                    console.log(err);
                });
            });

        })
    
    return card.formCard();
}