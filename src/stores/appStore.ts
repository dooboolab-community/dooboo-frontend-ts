import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import { setSessionStorage, getSessionStorage } from '@utils/Functions';

@autobind
class Store {
  @observable public loggedIn: boolean;
  @observable public grey: boolean = false;
  @observable public userNickname: string;
  @observable public userJob: string;
  @observable public userIntroduction: string;

  public checkLoginStatus() {
    this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
    this.userNickname = getSessionStorage('userNickname');
    this.userJob = getSessionStorage('userJob');
    this.userIntroduction = getSessionStorage('userIntroduction');
  }

  public logIn() {
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public logOut() {
    setSessionStorage('loggedIn', false);
    return this.checkLoginStatus();
  }

  public saveProfile(name: string, job: string, introduction: string) {
    setSessionStorage('userNickname', name);
    setSessionStorage('userJob', job);
    setSessionStorage('userIntroduction', introduction);
    return this.checkLoginStatus();
  }

  public appColorChange() {
    return this.grey = !this.grey;
  }
}

export default Store;
