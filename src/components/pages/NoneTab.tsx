import React, { Component } from 'react';
import Radium from 'radium';

import CooniBtn from '@shared/CooniBtn';

class NoneTab extends Component<any> {
  public render() {
    return (
      <div style={styles.container}>
        <CooniBtn
          onClick={() => this.props.history.goBack()}
          btnTxt='back to tab page'
        />
      </div>
    );
  }
}

const styles: any = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default NoneTab;
