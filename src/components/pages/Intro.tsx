import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Radium from 'radium';

import { globalColors, globalEffects } from '@utils/styles';
import CooniBtn from '@shared/CooniBtn';

@autobind
@inject('store')
@observer
@Radium
class Intro extends Component<any> {

  public login() {
    this.props.store.logIn();
  }

  public signUp() {
    this.props.history.push('/signup');
  }

  public render() {
    return(
      <div>
        {
          this.props.store.loggedIn
          ? <Redirect to='/tab/tab1' />
          : <div style={styles.container}>
              <div style={styles.introContainer}>
                <div style={styles.oauthBox}>
                    <CooniBtn
                      clickHandler={() => this.signUp()}
                      white={true}
                      btnTxt='회원가입'
                    />
                    <CooniBtn
                      clickHandler={() => this.login()}
                      white={true}
                      btnTxt='구글으로 로그인'
                      imgSrc='https://icdn6.digitaltrends.com/image/google_icon-377x372.jpg'
                    />
                    <CooniBtn
                      clickHandler={() => this.login()}
                      white={true}
                      btnTxt='페이스북으로 로그인'
                      // tslint:disable-next-line:max-line-length
                      imgSrc='https://media4.s-nbcnews.com/j/streams/2013/december/131203/2d9840012-facebooklogo.nbcnews-fp-360-360.jpg'
                    />
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

const styles: any = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: globalColors.cooniGradient,
  },

  introContainer: {
    margin: '28px',
    width: 'calc(100%-56px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },

  oauthBox: {
    bottom: 0,
    position: 'absolute',
  },

  oauthBtn: {
    color: '#fff',
    width: '320px',
    height: '28px',
    borderRadius: '3px',
    border: 'solid 2px #fff',
    margin: '8px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    ...globalEffects.btnEffect,

    ':hover': {
      ...globalEffects.btnEffectHover,
    },
    ':active': {
      opacity: 0.5,
    },

    '@media (max-width: 740px)': {
      width: '85vw',
      height: '8vh',
    },
  },

  googleLogoImg: {
    position: 'absolute',
    left: '16px',
    height: '20px',
    width: '20px',
    objectFit: 'cover',
  },

  fbLogoImg: {
    position: 'absolute',
    left: '16px',
    height: '20px',
    width: '20px',
    objectFit: 'cover',
  },
};

export default Intro;
