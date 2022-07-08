export default class Api {
    constructor(options) {
       this._baseUrl = options.baseUrl;
       this._token = options.headers.authorization;
       this._headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        });
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

    postNewCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
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

    removeMyCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
    
                return Promise.reject(`Ошибка: ${res.status}`);
            });    
    }

    increaseLike(id, likes) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify({
                likes: likes,

            })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
    
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    decreaseLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
    
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    

    setAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
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
}