import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {ReactElement} from 'react';

import Intro from '../pages/Intro';
import Temp from '../pages/Temp';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          width: '100vw',
        }}>
        <Switch>
          <Route exact={true} path="/" render={(): ReactElement => <Intro />} />
          <Route render={(): ReactElement => <Temp />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
