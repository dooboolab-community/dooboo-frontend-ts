import {BrowserRouter, Route, Routes} from 'react-router-dom';

import React from 'react';
import type {ReactElement} from 'react';
import RootProvider from '../../src/providers';
import type {ThemeType} from '../../src/types';

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

export const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...obj,
});
