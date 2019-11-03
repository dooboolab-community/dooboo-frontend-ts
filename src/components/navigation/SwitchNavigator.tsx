import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

function SwitchNavigator(props: {}): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(param): ReactElement => <Intro {...param} {...props} />}
          />
          <Route
            render={(param): ReactElement => <Temp {...param} {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
