import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Button from '@shared/Button';

import classNames from 'classnames/bind';
const styles = require('./Intro.css');
const cx = classNames.bind(styles);

export class Intro extends Component<any> {
  public render() {
    const { getString } = this.props.store.locale;
    const containerClass = cx({
      container: true,
      background: true,
    });
    return(
      <div className={containerClass}>
        <div className={styles.oauthBox}>
          <Button
            onClick={() => this.onClick()}
            white={true}
            txt={getString('BUTTON')}
          />
        </div>
      </div>
    );
  }

  private onClick = () => {
    alert('clicked');
  }
}

export default inject('store')(observer(Intro));
