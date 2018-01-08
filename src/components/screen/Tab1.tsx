import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CooniBtn from '@shared/CooniBtn';

const styles = require('./Tab1.css');

export class Tab1 extends Component<any> {
  public render() {
    const { getString } = this.props.store.locale;
    return (
      <div className={styles.container}>
        <CooniBtn
          onClick={() => this.props.history.push('/none_tab')}
          btnTxt={getString('GOTO_NOTFOUND')}
        />
        <CooniBtn
          onClick={() => this.props.store.user.logout()}
          btnTxt={getString('LOGOUT')}
        />
      </div>
    );
  }
}

const defaultTab1 = inject('store')(observer(Tab1));
export default defaultTab1;
