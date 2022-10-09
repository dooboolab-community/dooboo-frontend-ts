import type {ReactElement} from 'react';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from './ThemeProvider';
import type {ThemeType} from '../types';

interface Props {
  initialThemeType?: ThemeType;
  children?: ReactElement;
}

// Add providers here
const RootProvider = ({initialThemeType, children}: Props): ReactElement => {
  return (
    <RecoilRoot>
      <ThemeProvider initialThemeType={initialThemeType || 'light'}>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default RootProvider;
