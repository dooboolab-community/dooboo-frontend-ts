import React, { Component } from 'react';

const styles = require('./CooniBtn.css');

export class CooniBtn extends Component<any, any> {
  public render() {
    return (
      <div
        className={styles.btn}
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
        <span
          className={styles.txt}
          >{this.props.btnTxt}</span>
      </div>
    );
  }
}

export default CooniBtn;
