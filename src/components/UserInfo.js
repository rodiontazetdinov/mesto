export default class UserInfo {
    constructor(userSelector, infoSelector) {
        this._name = document.querySelector(userSelector);
        this._about = document.querySelector(infoSelector);
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

}