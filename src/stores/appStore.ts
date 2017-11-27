import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import { setSessionStorage, getSessionStorage } from '@utils/Functions';

@autobind
class Store {
  @observable public loggedIn: boolean;
  @observable public grey: boolean = false;

  public checkLoginStatus() {
    return this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
  }

  public logIn() {
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public logOut() {
    setSessionStorage('loggedIn', false);
    return this.checkLoginStatus();
  }

  public appColorChange() {
    this.grey = !this.grey;
  }
}

export default Store;
