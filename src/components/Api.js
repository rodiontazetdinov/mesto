export default class Api {
    constructor(options) {
       this._baseUrl = options.baseUrl;
       this._token = options.headers.authorization;
       this._headers = options.headers;
    }

    getInitialCards() {

    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        });  
    }

    
    
    patchUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
            }
        )
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        }); 
    }

    postNewCard() {

    }

    deleteMyCard() {

    }

    increaseLike() {

    }

    decreaseLike() {

    }

    setAvatar() {

    }
}