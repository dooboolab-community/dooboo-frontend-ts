import React, { Component } from 'react';
import styles from './test.css';


class Test extends Component {
  public render() {
    return (
      <div>
        <span className={styles.globalColor}>globalColor</span>
        <span>localColor</span>
        <span>modularColor</span>
      </div>
    );
  }
}

export default Test;
