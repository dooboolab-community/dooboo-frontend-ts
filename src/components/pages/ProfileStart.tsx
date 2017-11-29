import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Radium from 'radium';

import NavBar from '@shared/NavBar';
import { globalColors, globalEffects, globalMediaQueries } from '@utils/styles';

@inject('store')
@observer
@Radium
class ProfileStart extends Component<any> {

  public state: any = {
    nicknameDone: false,
    jobDone: false,
    introductionDone: false,
    allDone: false,
  };

  public goBack() {
    this.props.history.goBack();
  }

  public saveProfile() {
    const nickname = document.getElementById('nicknameInput').value;
    const job = document.getElementById('jobInput').value;
    const introduction = document.getElementById('introductionInput').value;
    console.log(nickname + '/' + job + '/' + introduction);
    return this.props.store.saveProfile(nickname, job, introduction);
  }

  public inputValueHandler(inputId) {
    let v = document.getElementById(inputId).value;
    if (inputId === 'nicknameInput') {
      return v.length > 0 ? this.state.nicknameDone = true : this.state.nicknameDone = false;
    }
    if (inputId === 'jobInput') {
      return v.length > 0 ? this.state.jobDone = true : this.state.jobDone = false;
    }
    if (inputId === 'introductionInput') {
      return v.length > 0 ? this.state.introductionDone = true : this.state.introductionDone = false;
    }
    return console.log('input id is wrong : ' + inputId);
  }

  public render() {

    const navbarProps: any = {
        title: '프로필 작성',
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
            return this.props.history.push('/tab');
          },
        },
    };

    const labelStateStyle: any = Radium.getState(this.state, 'nameInput', ':focus')
      ? 'labelColored'
      : '';

    return (
      <div>
        {
        this.props.store.loggedIn
        ? <div>
            <NavBar {...navbarProps} />
            <div style={styles.profileInputBox}>
            <div key={0} style={styles.profileEachCategory}>
                <input
                key='nameInput'
                type='text'
                style={[
                  styles.profInput,
                  this.state.nicknameDone ? styles.borderDone : styles.borderInit,
                ]}
                id='nicknameInput'
                placeholder='사용하실 닉네임을 적어주세요.'
                onInput={() => this.inputValueHandler('nicknameInput')}
                />
                <label
                htmlFor='nicknameInput'
                key={1}
                style={[
                  styles.profCategoryTxt,
                  Radium.getState(this.state, 'nameInput', ':focus')
                  ? styles.labelColored
                  : undefined,
                  this.state.nicknameDone ? styles.labelDone : styles.labelInit]}
                >닉네임
                </label>
            </div>
            <div key={2} style={styles.profileEachCategory}>
                <input
                key={3}
                type='text'
                style={[styles.profInput, this.state.jobDone ? styles.borderDone : styles.borderInit]}
                id='jobInput'
                placeholder='직업을 적어주세요.'
                onInput={() => this.inputValueHandler('jobInput')}
                />
                <label
                htmlFor='jobInput'
                key={4}
                style={[styles.profCategoryTxt, this.state.jobDone ? styles.labelDone : styles.labelInit]}
                >직업
                </label>
            </div>
            <div key={5} style={styles.profileEachCategory}>
                <input
                key={6}
                type='text'
                style={[styles.profInput, this.state.introductionDone ? styles.borderDone : styles.borderInit]}
                id='introductionInput'
                placeholder='사용하실 닉네임을 적어주세요.'
                onInput={() => this.inputValueHandler('introductionInput')}
                />
                <label
                htmlFor='introductionInput'
                key={7}
                style={[styles.profCategoryTxt, this.state.introductionDone ? styles.labelDone : styles.labelInit]}
                >소개
                </label>
            </div>
            </div>
          </div>
        : <Redirect to='/' />
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
        borderImage: globalColors.cooniGradientHorizontal,
        borderImageSlice: 1,
      },
    },
    labelColored: {
      color: globalColors.cooniTxtColor,
    },
};

export default ProfileStart;
