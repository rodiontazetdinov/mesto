export default class UserInfo {
    constructor(userSelector, infoSelector, avatarSelector) {
        this._name = document.querySelector(userSelector);
        this._about = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.about = this._about.textContent;

        return userInfo;
    }

    setUserInfo( {name, about} ) {
        this._name.textContent = name;
        this._about.textContent = about;
    }

    setAvatarSrc({ avatar }) {
        this._avatar.src = avatar;
    }

}