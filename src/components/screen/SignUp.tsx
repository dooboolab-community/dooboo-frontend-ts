import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Store from '@stores/appStore';

import NavBar from '@shared/NavBar';
import InputLabel from '@shared/InputLabel';
import User from '@models/User';

const styles = require('./SignUp.css');

export class SignUp extends Component<any, any> {
  public goBack() {
    this.props.history.goBack();
  }

  public signup() {
    const emailInput = document.getElementById('emailInput') as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    const password = passwordInput.value;

    this.props.store.user.signup(email, password);
    return this.props.history.push('/tab/tab1');
  }

  public render() {
    const { getString } = this.props.store.locale;

    const navbarProps: any = {
        title: getString('SIGNUP'),
        leftBtn: {
          txt: 'back',
          handler: () => {
            return this.goBack();
          },
        },
        rightBtn: {
          txt: getString('COMPLETE'),
          handler: () => {
            this.signup();
            return this.props.history.push('/tab/tab1');
          },
        },
    };

    return (
      <div>
        {
          this.props.store.user.loggedIn
          ? <Redirect to='tab/tab1' />
          : <div>
            <NavBar {...navbarProps} />
            <div className={styles.profileInputBox}>
              <InputLabel
                type='text'
                test={this.props.test}
                keyString='emailInput'
                placeholder='email'
                labelTxt={getString('EMAIL')}
              />
              <InputLabel
                type='password'
                test={this.props.test}
                keyString='passwordInput'
                placeholder='password'
                labelTxt={getString('PASSWORD')}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

const styledSignUp: any = inject('store')(observer(SignUp));

export default styledSignUp;
