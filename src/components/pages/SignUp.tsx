import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';
import Store from '../../stores/appStore';

import NavBar from '@shared/NavBar';
import { colors, effects } from '@utils/styles';

import User from '@models/User';

export class SignUp extends Component<any, any> {
  private styles: any;

  constructor(props) {
    super(props);
    this.state = {
      idDone: false,
      pwdDone: false,
      allDone: false,
    };
  }

  public goBack() {
    this.props.store.user.logOut();
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

  public inputValueHandler(event) {
    const inputId = event.target.id;
    const v = event.target.value;
    console.log(v);
    if (inputId === 'emailInput') {
      return v.length > 0 ? this.setState({idDone: true}) : this.setState({idDone: false});
    }
    if (inputId === 'passwordInput') {
      return v.length > 0 ? this.setState({pwdDone: true}) : this.setState({pwdDone: false});
    }
    return console.log('input id is wrong : ' + inputId);
  }

  public render() {
    const styles: any = this.props.test ? {} : staticStyle;

    const navbarProps: any = {
        title: '회원가입',
        leftBtn: {
          txt: 'back',
          handler: () => {
            return this.goBack();
          },
        },
        rightBtn: {
          txt: '완료',
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
                <div key={0} style={styles.profileEachCategory}>
                  <input
                    key='emailInput'
                    type='text'
                    style={[
                    styles.profInput,
                    this.state.idDone ? styles.borderDone : styles.borderInit,
                    ]}
                    id='emailInput'
                    placeholder='ID'
                    onChange={(e) => this.inputValueHandler(e)}
                  />
                  <label
                    htmlFor='emailInput'
                    key={1}
                    style={[
                      styles.profCategoryTxt,
                      this.state.idDone ? styles.labelDone : styles.labelInit,
                    ]}
                  >아이디
                  </label>
                </div>
                <div key={2} style={styles.profileEachCategory}>
                  <input
                    key='passwordInput'
                    type='password'
                    style={[styles.profInput, this.state.pwdDone ? styles.borderDone : styles.borderInit]}
                    id='passwordInput'
                    placeholder='PASSWORD'
                    onChange={(e) => this.inputValueHandler(e)}
                  />
                  <label
                    htmlFor='passwordInput'
                    key={4}
                    style={[
                      styles.profCategoryTxt,
                      this.state.pwdDone ? styles.labelDone : styles.labelInit,
                    ]}
                  >비밀번호
                  </label>
                </div>
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

  profileEachCategory: {
    paddingTop: '28px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  labelInit: {
      color: 'rgb(74, 74, 74)',
  },

  labelDone: {
    color: '#000',
    fontWeight: 'bold',
  },

  borderInit: {
    borderBottom: '2px solid rgb(227, 227, 227)',
  },

  borderDone: {
    borderBottom: '2px solid rgb(0, 0, 0)',
  },

  profCategoryTxt: {
      fontSize: '14px',
      lineHeight: '20px',
      textAlign: 'left',
  },

  profInput: {
    paddingRight: '12px',
    height: '44px',
    fontSize: '18px',
    lineHeight: '27px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '2px',
    borderColor: colors.cooniGrey,
    ':focus': {
      outline: 'none',
      borderImageSource: colors.cooniGradientHorizontal,
      borderImageSlice: 1,
    },
  },
  labelColored: {
    color: colors.cooniTxtColor,
  },
};

const styledSignUp: any = inject('store')(observer(Radium(SignUp)));

export default styledSignUp;
