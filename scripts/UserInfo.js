export default class UserInfo {
    constructor( { user, info } ) {
        this._user = document.querySelector(user);
        this._info = document.querySelector(info);
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.user = this._user.value;
        userInfo.info = this._info.value;
        return userInfo;
    }

    setUserInfo( {user, info} ) {
        this._user = user.value;
        this._info = info.value;
    }

}