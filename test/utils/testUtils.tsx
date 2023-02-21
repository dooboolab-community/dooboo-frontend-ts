import type {ReactElement} from 'react';
import RootProvider from '../../src/providers';
import {StaticRouter} from 'react-router-dom/server';
import type {ThemeType} from '../../src/types';
import {vi} from 'vitest';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
  location = '/',
): ReactElement => (
  <RootProvider initialThemeType={themeType}>
    <StaticRouter location={location}>{child}</StaticRouter>
  </RootProvider>
);

export const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> | unknown | any => ({
  navigation: {
    navigate: vi.fn(),
    goBack: vi.fn(),
  },
  ...obj,
});
