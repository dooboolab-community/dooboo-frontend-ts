import React, { Component } from 'react';

const styles = require('./Button.css');

export class Button extends Component<any, any> {
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
          >{this.props.txt}</span>
      </div>
    );
  }
}

export default Button;
