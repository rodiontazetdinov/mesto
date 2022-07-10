import {Card} from '../components/Card.js';
import {userInfo, imagePopup, confirmPopup, api} from './constants.js';


//функция создания карточки
export function createCard (item) {
    const card = new Card(
        item,
        '#card',
        userInfo.getUserId(),
        (evt) => {
            imagePopup.open(item.link, item.name);
        },
        (id) => {
            confirmPopup.open();
            confirmPopup.getSubmitter(() => {
                api.removeMyCard(id)
                .then(res => {
                    card.removeCard();
                    confirmPopup.close();
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
                card.toggleLikeBtn();
            })
            .catch(err => {
                console.log(err);
            });
        },
        (id) => {  
            api.decreaseLike(id)
            .then(res => {
                card.setLikes(res.likes);
                card.toggleLikeBtn();
            })
            .catch(err => {
                console.log(err);
            });
        });
    
    return card.formCard();   
}