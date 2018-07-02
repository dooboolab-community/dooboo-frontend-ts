import { observable } from 'mobx';
import { setSessionStorage, getSessionStorage, destroySessionStorage } from '../utils/Functions';

class User {
  @observable private _loggedIn: boolean;
  private _email: string;
  private _password: string;

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  public set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

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
    this._email = getSessionStorage('email');
    this._password = getSessionStorage('password');
    this._loggedIn = getSessionStorage('loggedIn') === 'true' ? true : false ;
  }
}

export default User;
