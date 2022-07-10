import {Card} from './Card.js';
import { imagePopup, api, confirmForm, userInfo } from '../pages/index.js';

export function createCard (item) {
    const card = new Card(
        item,
        '#card',
        userInfo.getUserId(),
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

        },
        (id) => {  
            api.increaseLike(id, item.likes)
            .then(res => {
                card.setLikes(res.likes);
            })
            .catch(err => {
            });
        },
        (id) => {  
            api.decreaseLike(id)
            .then(res => {
                card.setLikes(res.likes);
                
            })
            .catch(err => {
                console.log(err);
            });
        });
    
    return card.formCard();   
}