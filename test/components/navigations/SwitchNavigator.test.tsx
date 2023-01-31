import type * as ThemeProviderType from '../../../src/providers/ThemeProvider';

import {expect, test, vi} from 'vitest';

import React from 'react';
import RootProvider from '../../../src/providers';
import SwitchNavigator from '../../../src/components/navigations/SwitchNavigator';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const props = {};

const mockFn = vi.fn();

vi.mock('../../../src/providers/ThemeProvider', async () => {
  const lib = (await vi.importActual(
    '../../../src/providers/ThemeProvider',
  )) as typeof ThemeProviderType;

  return {
    ...lib,
    useThemeContext: () => ({
      changeThemeType: mockFn,
    }),
  };
});

test('renders without crashing', () => {
  const testingLib = render(<SwitchNavigator {...props} />, {
    wrapper: ({children}) => (
      <RootProvider initialThemeType="light">{children}</RootProvider>
    ),
  });
  expect(testingLib).toBeTruthy();

  testingLib.unmount();
});

test('should switch theme type with keyboard', async () => {
  const user = userEvent.setup();

  const testingLib = render(<SwitchNavigator {...props} />, {
    wrapper: ({children}) => (
      <RootProvider initialThemeType="light">{children}</RootProvider>
    ),
  });

  await user.keyboard('[ControlLeft>].');

  expect(mockFn).toBeCalled();

  testingLib.unmount();
});
