import React, { Component } from 'react';
import CooniBtn from '@shared/CooniBtn';

class NotFound extends Component<any> {
  public render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CooniBtn
          onClick={() => this.props.history.goBack()}
          btnTxt='back to tab page'
        />
      </div>
    );
  }
}

export default NotFound;
