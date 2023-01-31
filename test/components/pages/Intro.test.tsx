import {afterAll, describe, it, vi} from 'vitest';
import {cleanup, render} from '@testing-library/react';

import Intro from '../../../src/components/pages/Intro';
import React from 'react';
import {createTestElement} from '../../utils/testUtils';

const props = {};

afterAll(cleanup);

describe('[Intro] screen rendering test', () => {
  it('should render without crashing', () => {
    const comp = render(<Intro {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    comp.unmount();
  });
});

describe('[Intro] Interaction', () => {
  it('should simulate [onLogin] click with testing library', async () => {
    vi.useFakeTimers();

    const testingLib = render(<Intro {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    const signInButton = await testingLib.findByTestId('SIGN_IN');

    signInButton.click();

    vi.advanceTimersByTime(1000);

    testingLib.unmount();
  });

  it('should simulate [navigate] when clicked', async () => {
    const testingLib = render(<Intro {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    const navigateButton = await testingLib.findByTestId('NAVIGATE');

    navigateButton.click();

    testingLib.unmount();
  });

  it('should change theme when [change theme] has been clicked', async () => {
    const testingLib = render(<Intro {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    const changeThemeButton = await testingLib.findByTestId('CHANGE_THEME');

    changeThemeButton.click();

    testingLib.unmount();
  });
});
