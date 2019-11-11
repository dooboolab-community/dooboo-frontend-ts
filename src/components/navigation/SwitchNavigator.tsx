import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path="/" render={(): ReactElement => <Intro />} />
          <Route render={(): ReactElement => <Temp />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
