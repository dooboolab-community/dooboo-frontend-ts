import { observable, action } from 'mobx';

import { setSessionStorage, getSessionStorage } from '../utils/Functions';
import Localization from '../models/Localization';
import User from '../models/User';

class Store {
  // todo - make variable properties in the class to private and add getter and setter for those
  @observable private _user: User;
  @observable private _locale: Localization;

  constructor() {
    this.user = new User();
    this.locale = new Localization();
  }

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  public get locale(): Localization {
    return this._locale;
  }

  public set locale(value: Localization) {
    this._locale = value;
  }

  public getString = (param: string) => {
    return this.locale.getString(param);
  }
}

export default Store;
