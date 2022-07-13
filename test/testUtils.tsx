import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {ReactElement} from 'react';

import RootProvider from '../src/providers';
import {ThemeType} from '../src/types';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>
    <BrowserRouter>
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          width: '100vw',
        }}
      >
        <Routes>
          <Route path="/" element={child} />
        </Routes>
      </div>
    </BrowserRouter>
  </RootProvider>
);
