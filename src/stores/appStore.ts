import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import { setSessionStorage, getSessionStorage } from '@utils/Functions';

@autobind
class Store {
  @observable public loggedIn: boolean;
  @observable public grey: boolean = false;
  @observable public userId: string;
  @observable public userPwd: string;

  public checkLoginStatus() {
    this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
    this.userId = getSessionStorage('userId');
    this.userPwd = getSessionStorage('userPwd');
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

  public appColorChange() {
    return this.grey = !this.grey;
  }
}

export default Store;
