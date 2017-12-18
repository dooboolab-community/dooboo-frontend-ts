import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';
import Store from '../../stores/appStore';

import NavBar from '@shared/NavBar';
import StyledInput from '@shared/StyledInput';
import { colors, effects } from '@utils/styles';

import User from '@models/User';

export class SignUp extends Component<any, any> {
  private styles: any;

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
    const styles: any = this.props.test ? {} : staticStyle;

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

    const labelStateStyle: any = Radium.getState(this.state, 'idInput', ':focus')
      ? 'labelColored'
      : '';

    return (
      <div>
        {
          this.props.store.user.loggedIn
          ? <Redirect to='tab/tab1' />
          : <div>
            <NavBar {...navbarProps} />
            <div style={styles.profileInputBox}>
              <StyledInput
                type='text'
                test={this.props.test}
                keyString='emailInput'
                placeholder='email'
                labelTxt={getString('EMAIL')}
              />
              <StyledInput
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

const staticStyle: any = {
  profileInputBox: {
    width: '335px',
    margin: 'auto',
    paddingTop: '46px',

    '@media (max-width: 335px)': {
      paddingRight: '8px',
      width: '100vw',
    },
  },
};

const styledSignUp: any = inject('store')(observer(Radium(SignUp)));

export default styledSignUp;
