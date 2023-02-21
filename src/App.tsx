import type {ReactElement} from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigations/SwitchNavigator';

const Component = (): ReactElement => {
  return (
    <RootProvider>
      <SwitchNavigator />
    </RootProvider>
  );
};

export default Component;
