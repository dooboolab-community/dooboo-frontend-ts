import { observable } from 'mobx';
import { setSessionStorage, getSessionStorage, destroySessionStorage } from '@utils/Functions';

class User {
  @observable public loggedIn: boolean;
  private email: string;
  private password: string;

  public signup = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public login = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  public logout = () => {
    destroySessionStorage('email');
    destroySessionStorage('password');
    destroySessionStorage('loggedIn');
    return this.checkLoginStatus();
  }

  public checkLoginStatus() {
    this.email = getSessionStorage('email');
    this.password = getSessionStorage('password');
    this.loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
  }
}

export default User;
