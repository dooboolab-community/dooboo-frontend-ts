import React, { Component } from 'react';
import { effects } from '@utils/styles';

const styles = require('./CooniBtn.css');

export class CooniBtn extends Component<any, any> {
  public render() {
    return (
      <div
        className={styles.authBtn}
        style={
          this.props.white
            ? { borderColor: '#fff', color: '#fff' }
            : { borderColor: '#000', color: '#000' }
        }
        onClick={() => this.props.onClick()}
      >
        {
          this.props.imgSrc
            ? <img
                src={this.props.imgSrc}
                srcSet={this.props.srcset}
                className={styles.logoImg}
              />
            : null
        }
        <span style={styles.authTxt}>{this.props.btnTxt}</span>
      </div>
    );
  }
}

export default CooniBtn;
