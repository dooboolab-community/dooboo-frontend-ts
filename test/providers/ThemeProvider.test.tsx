import {
  ThemeProvider,
  useThemeContext,
} from '../../src/providers/ThemeProvider';
import {act, renderHook} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import React from 'react';

describe('theme provider test', () => {
  it('should change theme type', () => {
    const {result} = renderHook(() => useThemeContext(), {
      wrapper: ({children}) => (
        <ThemeProvider initialThemeType="light">{children}</ThemeProvider>
      ),
    });

    expect(result.current.themeType).toBe('light');

    act(() => {
      result.current.changeThemeType();
    });

    expect(result.current.themeType).toBe('dark');
  });
});
