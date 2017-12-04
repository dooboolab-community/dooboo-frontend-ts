import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';

import NavBar from '@shared/NavBar';
import { globalColors, globalEffects, globalMediaQueries } from '@utils/styles';

@inject('store')
@observer
@Radium
class SignUp extends Component<any> {

  public state: any = {
    idDone: false,
    pwdDone: false,
    introductionDone: false,
    allDone: false,
  };

  public goBack() {
    this.props.store.logOut();
    this.props.history.goBack();
  }

  public saveProfile() {
    this.props.store.logIn();
    return this.props.history.push('/tab/tab1');
  }

  public inputValueHandler(inputId) {
    var e = document.getElementById(inputId) as HTMLInputElement;
    var v = e.value;
    if (inputId === 'idInput') {
      return v.length > 0 ? this.state.idDone = true : this.state.idDone = false;
    }
    if (inputId === 'passwordInput') {
      return v.length > 0 ? this.state.pwdDone = true : this.state.pwdDone = false;
    }
    return console.log('input id is wrong : ' + inputId);
  }

  public render() {

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
            this.saveProfile();
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
          this.props.store.loggedIn
          ? <Redirect to='tab/tab1' />
          : <div>
            <NavBar {...navbarProps} />
            <div style={styles.profileInputBox}>
                <div key={0} style={styles.profileEachCategory}>
                    <input
                    key='idInput'
                    type='text'
                    style={[
                    styles.profInput,
                    this.state.idDone ? styles.borderDone : styles.borderInit,
                    ]}
                    id='idInput'
                    placeholder='ID'
                    onInput={() => this.inputValueHandler('idInput')}
                    />
                    <label
                    htmlFor='idInput'
                    key={1}
                    style={[
                    styles.profCategoryTxt,
                    Radium.getState(this.state, 'idInput', ':focus')
                    ? styles.labelColored
                    : undefined,
                    this.state.idDone ? styles.labelDone : styles.labelInit]}
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
                    onInput={() => this.inputValueHandler('passwordInput')}
                    />
                    <label
                    htmlFor='passwordInput'
                    key={4}
                    style={[styles.profCategoryTxt, this.state.pwdDone ? styles.labelDone : styles.labelInit]}
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

const styles: any = {
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
      borderColor: globalColors.cooniGrey,
      ':focus': {
        outline: 'none',
        borderImageSource: globalColors.cooniGradientHorizontal,
        borderImageSlice: 1,
      },
    },
    labelColored: {
      color: globalColors.cooniTxtColor,
    },
};

export default SignUp;
