import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Store from '@stores/appStore';

import NavBar from '@shared/NavBar';
import InputLabel from '@shared/InputLabel';
import User from '@models/User';

const styles = require('./SignUp.css');

interface IProps {
  store: any;
  history: any;
}

interface IState {
  email: string;
  pw: string;
}

export class SignUp extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
    };
  }

  public render() {
    const { getString } = this.props.store.locale;

    const navbarProps: any = {
      title: getString('SIGNUP'),
      leftBtn: {
        txt: getString('BACK'),
        handler: () => {
          this.props.history.goBack();
        },
      },
      rightBtn: {
        txt: getString('COMPLETE'),
        handler: () => {
          this.signup();
        },
      },
    };

    return (
      <div>
        {
          this.props.store.user.loggedIn
          ? <Redirect to='tab/tab1' />
          : <div className={styles.root}>
            <NavBar {...navbarProps} />
            <div className={styles.content}>
              <InputLabel
                containerStyle={{
                  margin: '0 20px',
                }}
                type='text'
                placeholder={getString('EMAIL_HINT')}
                labelTxt={getString('EMAIL')}
                onTxtChanged={(val: string) => this.onTxtChanged('email', val)}
              />
              <InputLabel
                containerStyle={{
                  margin: '0 20px',
                }}
                type='password'
                placeholder={getString('PASSWORD_HINT')}
                labelTxt={getString('PASSWORD')}
                onTxtChanged={(val: string) => this.onTxtChanged('pw', val)}
              />
            </div>
          </div>
        }
      </div>
    );
  }

  private onTxtChanged = (type: string, val: string) => {
    switch (type) {
      case 'email':
        this.setState({ email: val });
        break;
      case 'pw':
        this.setState({ pw: val});
    }
  }

  private signup = () => {
    console.log(`email: ${this.state.email}`);
    console.log(`pw: ${this.state.pw}`);

    if (this.state.email && this.state.pw) {
      this.props.store.user.signup(this.state.email, this.state.pw);
      this.props.history.push('/tab/tab1');
    }
  }
}

const styledSignUp: any = inject('store')(observer(SignUp));

export default styledSignUp;
