import { observable, action } from 'mobx';

import { setSessionStorage, getSessionStorage } from '@utils/Functions';
import Localization from '@models/Localization';
import User from '@models/User';

class Store {
  // todo - make variable properties in the class to private and add getter and setter for those
  @observable public user: User;
  @observable private locale: Localization;
  @observable private isDesktop: boolean;
  @observable private isOpen: boolean;

  constructor() {
    this.user = new User();
    this.locale = new Localization();
    this.isDesktop = false;
    this.isOpen = false;
  }

  public get $isDesktop(): boolean {
    return this.isDesktop;
  }

  public set $isDesktop(value: boolean) {
    this.isDesktop = value;
  }

  public get $locale(): Localization {
    return this.locale;
  }

  public set $locale(value: Localization) {
    this.locale = value;
  }

  public get $isOpen(): boolean {
    return this.isOpen;
  }

  public set $isOpen(value: boolean) {
    this.isOpen = value;
  }

  public getString = (param: string) => {
    return this.locale.getString(param);
  }
}

export default Store;
