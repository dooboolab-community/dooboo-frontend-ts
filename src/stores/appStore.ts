import { observable, action } from 'mobx';
import { setSessionStorage, getSessionStorage } from '@utils/Functions';
import Localization from '@models/Localization';

class Store {
  @observable public loggedIn: boolean;
  @observable public userId: string;
  @observable public userPwd: string;
  @observable private locale: Localization;

  constructor() {
    this.loggedIn;
    this.userId;
    this.userPwd;
    this.locale;

    this.setLocale = this.setLocale.bind(this);
    this.getString = this.getString.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
  }

  public setLocale(param: Localization) {
    this.locale = param;
  }

  public getString(param: string) {
    return this.locale.getString(param);
  }

  public checkLoginStatus() {
    this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
    this.userId = getSessionStorage('userId');
    this.userPwd = getSessionStorage('userPwd');
    // console.log(this.userId, this.userPwd);
  }

  public logIn() {
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public logOut() {
    setSessionStorage('loggedIn', false);
    return this.checkLoginStatus();
  }

  public saveProfile(id: string, password: string) {
    setSessionStorage('userDd', id);
    setSessionStorage('userPwd', password);
    return this.checkLoginStatus();
  }
}

export default Store;
