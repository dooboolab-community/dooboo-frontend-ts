import { observable, action } from 'mobx';
import { setSessionStorage, getSessionStorage } from '@utils/Functions';
import Localization from '@models/Localization';

class Store {
  // todo - make variable properties in the class to private and add getter and setter for those
  @observable public loggedIn: boolean;
  @observable private userId: string;
  @observable private userPwd: string;
  @observable private locale: Localization;

  public setLocale(param: Localization) {
    this.locale = param;
  }

  public getString(param: string) {
    return this.locale.getString(param);
  }

  public checkLoginStatus() {
    this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
    // this.userId = getSessionStorage('userId');
    // this.userPwd = getSessionStorage('userPwd');
  }

  public logIn() {
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public logOut() {
    setSessionStorage('loggedIn', false);
    console.log('log out called');
    return this.checkLoginStatus();
  }

  public saveProfile(id: string, password: string) {
    setSessionStorage('userDd', id);
    setSessionStorage('userPwd', password);
    return this.checkLoginStatus();
  }
}

export default Store;
