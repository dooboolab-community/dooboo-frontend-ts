import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Radium from 'radium';
import { Route, Link } from 'react-router-dom';
import CooniBtn from '@shared/CooniBtn';

@inject('store')
@observer
@Radium
class Tab1 extends Component<any> {
  public render() {
    return (
      <div style={styles.container}>
        <Link to='/helloworld' style={styles.helloWorld}>
          Hello World!
        </Link>
        <CooniBtn
          clickHandler={this.props.store.logOut}
          btnTxt='로그아웃'
        />
        <div style={{fontSize: '20px', marginTop: '50px'}}>
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
        <a key={5} style={styles.hyperLink} href='https://github.com/andreypopp/autobind-decorator'>
          autobind-decorator
        </a><br/>
      </div>
    );
  }
}

const styles: any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  helloWorld: {
    textDecoration: 'none',
    marginBottom: '30px',
    color: 'rgb(13, 157, 197)',
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

export default Tab1;
