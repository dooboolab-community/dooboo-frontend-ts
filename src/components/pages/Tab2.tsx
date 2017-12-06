import React from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';

import CooniBtn from '@shared/CooniBtn';

@inject('store')
@observer
@Radium
class Tab2 extends React.Component<any> {
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
    color: 'rgb(13, 157, 197)',
    height: '35vh',
    marginTop: 'calc(35vh - 7px)',
  },
};

export default Tab2;
