import {describe, expect, it, test, vi} from 'vitest';

import Button from '../../../src/components/uis/Button';
import {IC_FACEBOOK_W} from '../../../src/utils/Icons';
import React from 'react';
import {render} from '@testing-library/react';

// test for the pure component
test('button render', () => {
  render(<Button />);
});

describe('Button interaction', () => {
  it('Simulate onClick', async () => {
    const onClick = vi.fn();
    const testingLib = render(<Button onClick={onClick} testID="TEST" />);
    const btn = await testingLib.findByTestId('TEST');

    btn.click();

    expect(onClick).toBeCalled();

    testingLib.unmount();
  });

  it('should render isLoading status', async () => {
    const testingLib = render(<Button isLoading={true} />);

    expect(testingLib).toBeTruthy();

    testingLib.unmount();
  });

  it('should render img status', () => {
    const testingLib = render(<Button imgSrc={IC_FACEBOOK_W} />);

    expect(testingLib).toBeTruthy();

    testingLib.unmount();
  });
});
