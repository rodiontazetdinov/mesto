export default class UserInfo {
    constructor(userSelector, infoSelector) {
        this._user = document.querySelector(userSelector);
        this._info = document.querySelector(infoSelector);
    }

    getUserInfo() {
        const userInfo = [];
        userInfo.push(this._user.textContent);
        userInfo.push(this._info.textContent);
        // userInfo.user = this._user.textContent;
        // userInfo.info = this._info.textContent;
        return userInfo;
    }

    setUserInfo( {user, info} ) {
        this._user.textContent = user;
        this._info.textContent = info;
    }

}