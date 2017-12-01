import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Radium from 'radium';

import { globalColors, globalEffects, globalMediaQueries } from '@utils/styles';

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
    console.log(this.props.store);
    return(
      <div>
        {
          this.props.store.loggedIn
          ? <Redirect to='/tab/tab1' />
          : <div style={styles.container}>
              <div style={styles.introContainer}>
                <div style={styles.oauthBox}>
                    <div style={styles.oauthBtn} key={0} onClick={() => this.signUp()}>
                        <span style={styles.oauthTxt}>회원가입</span>
                    </div>
                    <div style={styles.oauthBtn} key={1} onClick={() => this.login()}>
                        <img
                          style={styles.googleLogoImg}
                          src='https://icdn6.digitaltrends.com/image/google_icon-377x372.jpg'
                        />
                        <span style={styles.oauthTxt}>구글으로 로그인</span>
                    </div>
                    <div style={styles.oauthBtn} key={2} onClick={() => this.login()}>
                        <img
                          style={styles.googleLogoImg}
                          // tslint:disable-next-line:max-line-length
                          src='https://media4.s-nbcnews.com/j/streams/2013/december/131203/2d9840012-facebooklogo.nbcnews-fp-360-360.jpg'
                        />
                        <span style={styles.oauthTxt}>페이스북으로 로그인</span>
                    </div>
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
