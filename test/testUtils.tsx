import React, { ReactElement } from 'react';
import { Router, Switch } from 'react-router-dom';

import RootProvider from '../src/providers';
import { ThemeType } from '../src/types';
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>
    <Router history={history}>
      <Switch>{child}</Switch>
    </Router>
  </RootProvider>
);
