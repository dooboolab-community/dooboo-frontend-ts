import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppContext } from '../../contexts';

import { createTheme } from '../../theme';
import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

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
              render={(param) => <Intro {...param} {...props}/>}
            />
            <Route
              render={(param) => <Temp {...param} {...props}/>}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default SwitchNavigator;
