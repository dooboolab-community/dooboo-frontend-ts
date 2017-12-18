import { observable, action } from 'mobx';

import { setSessionStorage, getSessionStorage } from '@utils/Functions';
import Localization from '@models/Localization';
import User from '../models/User';

class Store {
  // todo - make variable properties in the class to private and add getter and setter for those
  @observable public user: User;
  @observable private locale: Localization;

  constructor() {
    this.user = new User();
    this.locale = new Localization();
  }

  public setLocale(param: Localization) {
    this.locale = param;
  }

  public getString = (param: string) => {
    return this.locale.getString(param);
  }
}

export default Store;
