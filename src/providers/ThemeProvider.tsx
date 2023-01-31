import {
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';

import type {Theme as DefaultTheme} from '@emotion/react';
import type {ReactElement} from 'react';
import type {ThemeType} from '../types';
import createCtx from '../utils/createCtx';
import {createTheme} from '../theme';
import {useState} from 'react';

interface Context {
  theme: DefaultTheme;
  themeType: ThemeType;
  changeThemeType: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export const defaultThemeType: ThemeType = 'light';

interface Props {
  children?: ReactElement;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);

  const changeThemeType = (): void => {
    const newThemeType = themeType === 'light' ? 'dark' : 'light';

    setThemeType(newThemeType);
  };

  const theme = createTheme(themeType) as DefaultTheme;

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
      }}
    >
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useThemeContext, ThemeProvider, withTheme};
