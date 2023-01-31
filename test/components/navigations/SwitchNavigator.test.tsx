import React from 'react';
import RootProvider from '../../../src/providers';
import SwitchNavigator from '../../../src/components/navigations/SwitchNavigator';
import {render} from '@testing-library/react';
import {test} from 'vitest';
import userEvent from '@testing-library/user-event';

const props = {};

test('renders without crashing', () => {
  const testingLib = render(<SwitchNavigator {...props} />, {
    wrapper: ({children}) => (
      <RootProvider initialThemeType="light">{children}</RootProvider>
    ),
  });

  testingLib.unmount();
});

test('should switch theme type with keyboard', async () => {
  const user = userEvent.setup();
  const testingLib = render(<SwitchNavigator {...props} />, {
    wrapper: ({children}) => (
      <RootProvider initialThemeType="light">{children}</RootProvider>
    ),
  });

  await user.keyboard('{ControlLeft>}./');

  testingLib.unmount();
});
