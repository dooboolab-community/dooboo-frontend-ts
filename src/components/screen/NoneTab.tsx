import React, { Component } from 'react';

import CooniBtn from '@shared/CooniBtn';

const styles = require('./NoneTab.css');

class NoneTab extends Component<any> {
  public render() {
    return (
      <div className={styles.container}>
        <CooniBtn
          onClick={() => this.props.history.goBack()}
          btnTxt='back to tab page'
        />
      </div>
    );
  }
}

export default NoneTab;
