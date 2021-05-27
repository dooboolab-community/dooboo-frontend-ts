import {
  Theme as DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';
import React, {useState} from 'react';

import {ThemeType} from '../types';
import createCtx from '../utils/createCtx';
import {createTheme} from '../theme';

interface Context {
  theme: DefaultTheme;
  themeType: ThemeType;
  changeThemeType: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export const defaultThemeType: ThemeType = ThemeType.LIGHT;

interface Props {
  children?: React.ReactElement;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): React.ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);

  const changeThemeType = (): void => {
    const newThemeType =
      themeType === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;

    setThemeType(newThemeType);
  };

  const theme = createTheme(themeType) as DefaultTheme;

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
      }}>
      {/* @ts-ignore */}
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useThemeContext, ThemeProvider, withTheme};
