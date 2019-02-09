import { observable } from 'mobx';
import { setSessionStorage, getSessionStorage, destroySessionStorage } from '../utils/Functions';

class User {
  @observable public displayName: string;
  @observable public age: number;
  @observable public job: string;

  public signup = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true.toString());
    return this.checkLoginStatus();
  }

  public login = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true.toString());
    return this.checkLoginStatus();
  }

  public logout = () => {
    destroySessionStorage('email');
    destroySessionStorage('password');
    destroySessionStorage('loggedIn');
    return this.checkLoginStatus();
  }

  public checkLoginStatus() {
    // this._email = getSessionStorage('email');
    // this._password = getSessionStorage('password');
    // this._loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
  }
}

export default User;
