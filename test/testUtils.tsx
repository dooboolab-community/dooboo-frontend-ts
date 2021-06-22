import {BrowserRouter, Routes} from 'react-router-dom';
import React, {ReactElement} from 'react';

import RootProvider from '../src/providers';
import {ThemeType} from '../src/types';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>
    <BrowserRouter>
      <Routes>{child}</Routes>
    </BrowserRouter>
  </RootProvider>
);
