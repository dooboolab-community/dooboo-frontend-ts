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
        <div style={{ fontSize: '20px', marginTop: '30px' }}>
          boilerplate of <span style={{ fontWeight: 'bold' }}>React</span> with
        </div><br/>
        <a key={0} className={styles.hyperLink} href='https://github.com/ReactTraining/react-router'>
          react-router v4
        </a><br/>
        <a key={1} className={styles.hyperLink} href='https://www.typescriptlang.org/docs/home.html'>
          typescript
        </a><br/>
        <a key={2} className={styles.hyperLink} href='https://github.com/mobxjs/mobx'>
          mobx
        </a><br/>
        <a key={3} className={styles.hyperLink}
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

const defaultTab1 = inject('store')(observer(Tab1));
export default defaultTab1;
