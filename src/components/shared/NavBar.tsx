import React, { Component } from 'react';

const styles = require('./NavBar.css');

interface IProps {
  title: string;
  leftBtn: {
    handler: any;
    txt: string;
  };
  rightBtn: {
    handler: any;
    txt: string;
  };
}

interface IState {
  inputDone: boolean;
  isFocus: boolean;
}

class NavBar extends Component<any> {
  public render() {
    return (
      <div className={styles.navbar}>
        <span
          className={styles.navbarTxt}
        >{ this.props.title }</span>
        {
          this.props.leftBtn
          ? <div>
              <div
                className={styles.leftBtn}
                onClick={this.props.leftBtn.handler}
               >{this.props.leftBtn.txt}</div>
            </div>
          : null
        }
        {
          this.props.rightBtn
          ? <div>
              <div
                className={styles.rightBtn}
                onClick={this.props.rightBtn.handler}
              >{this.props.rightBtn.txt}</div>
            </div>
          : null
        }
      </div>
    );
  }
}

export default NavBar;
