import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';

import { colors, effects } from '@utils/styles';
import CooniBtn from '@shared/CooniBtn';
import {
  google_logo_1x, google_logo_2x, google_logo_3x,
  facebook_logo_1x, facebook_logo_2x, facebook_logo_3x,
} from '@utils/Icons';

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
    const { getString } = this.props.store.locale;
    return(
      <div>
        {
          this.props.store.loggedIn
          ? <Redirect to='/tab/tab1' />
          : <div className='gradientContainer' style={styles.container}>
              <div style={styles.introContainer}>
                <div style={styles.oauthBox}>
                    <CooniBtn
                      onClick={() => this.signUp()}
                      white={true}
                      btnTxt={getString('SIGNUP')}
                    />
                    <CooniBtn
                      onClick={() => this.login()}
                      white={true}
                      btnTxt={getString('GOOGLE_LOGIN')}
                      imgSrc={google_logo_1x}
                      srcset={`${google_logo_1x} 1x, ${google_logo_2x} 2x, ${google_logo_3x} 3x`}
                    />
                    <CooniBtn
                      onClick={() => this.login()}
                      white={true}
                      btnTxt={getString('FACEBOOK_LOGIN')}
                      imgSrc={facebook_logo_2x}
                      srcset={`${facebook_logo_1x} 1x, ${facebook_logo_2x} 2x, ${facebook_logo_3x} 3x`}
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
    // display: 'flex',
    // background: colors.cooniGradient,
    // above properties are in defined in css file out of the src/ directory to show users that postcss works
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

    ...effects.btnEffect,

    ':hover': {
      ...effects.btnEffectHover,
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
