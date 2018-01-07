import React, { Component } from 'react';

const styles = require('./NavBar.css');

class NavBar extends Component<any> {
  public render() {
    return (
      <div className={styles.navbar}>
        <span className={styles.navbarTxt}>{ this.props.title }</span>
        {this.props.leftBtn
          ? <div>
              <div key={0} className={styles.leftBtn} onClick={this.props.leftBtn.handler}>
                {this.props.leftBtn.txt}
              </div>
            </div>
          : undefined
        }
        {this.props.rightBtn
          ? <div>
              <div key={1} className={styles.rightBtn} onClick={this.props.rightBtn.handler}>
                {this.props.rightBtn.txt}
              </div>
            </div>
          : undefined
        }
      </div>
    );
  }
}

export default NavBar;
