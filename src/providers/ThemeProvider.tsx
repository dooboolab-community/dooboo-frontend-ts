import {
  Theme as DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';
import {ReactElement, useState} from 'react';

import {ThemeType} from '../types';
import createCtx from '../utils/createCtx';
import {createTheme} from '../theme';

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

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case '.':
          changeThemeType();
          break;
        // case 't':
        //   changeLocale();
        //   break;
      }
    }
  });

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
