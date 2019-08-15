import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useContext } from 'react';

import { AppContext } from '../../contexts';
import Intro from '../screen/Intro';
import Temp from '../screen/Temp';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';

interface Props {
  store?: any;
}

function SwitchNavigator(props: {}) {
  const { state } = useContext(AppContext);
  const { theme } = state;
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route
              exact={true}
              path='/'
              render={(param) => <Intro {...param} {...props} />}
            />
            <Route render={(param) => <Temp {...param} {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default SwitchNavigator;
