import React, { useContext } from 'react';
import * as ReactDOM from 'react-dom';
import { AppProvider as Provider, AppContext } from './providers';

import { createTheme, ThemeType } from './theme';
import SwitchNavigator from './components/navigation/SwitchNavigator';

ReactDOM.render(
  <Provider>
    <SwitchNavigator/>
  </Provider>,
  document.getElementById('app'),
);
