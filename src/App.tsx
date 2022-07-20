import {ReactElement} from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigations/SwitchNavigator';

const Component = (): ReactElement => (
  <RootProvider>
    <SwitchNavigator />
  </RootProvider>
);

export default Component;
