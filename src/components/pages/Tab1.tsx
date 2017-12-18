import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Radium from 'radium';
import { Route, Link } from 'react-router-dom';
import CooniBtn from '@shared/CooniBtn';

export class Tab1 extends Component<any> {
  public render() {
    const { getString } = this.props.store.locale;
    const styles: any =
    this.props.test
    ? {}
    : {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        hyperLink: {
          textDecoration: 'none',
          color: 'rgb(13, 157, 197)',
          ':hover': {
            color: '#fff',
            backgroundColor: 'rgb(13, 157, 197)',
          },
        },
      };

    return (
      <div style={styles.container}>
        <div style={{fontSize: '20px', marginTop: '30px'}}>
          boilerplate of <span style={{fontWeight: 'bold'}}>React</span> with
        </div><br/>
        <a key={0} style={styles.hyperLink} href='https://github.com/ReactTraining/react-router'>
          react-router v4
        </a><br/>
        <a key={1} style={styles.hyperLink} href='https://www.typescriptlang.org/docs/home.html'>
          typescript
        </a><br/>
        <a key={2} style={styles.hyperLink} href='https://github.com/mobxjs/mobx'>
          mobx
        </a><br/>
        <a key={3} style={styles.hyperLink} href='https://github.com/FormidableLabs/radium'>
          modular style with radium
        </a><br/>
        <a key={4} style={styles.hyperLink}
          href='https://github.com/rofrischmann/inline-style-prefixer/commit/bc71fd88a96497164e5e1f4a291301722428f780'>
          inline-style-prefixer
        </a><br/>
        <br/>
        <CooniBtn
          onClick={() => this.props.history.push('/none_tab')}
          btnTxt='none tab page'
        />
        <CooniBtn
          onClick={() => this.props.store.user.logout()}
          btnTxt={getString('LOGOUT')}
        />
      </div>
    );
  }
}

const defaultTab1 = inject('store')(observer(Radium(Tab1)));
export default defaultTab1;
