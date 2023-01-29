import type * as ReactRouterDom from 'react-router-dom';
import * as renderer from 'react-test-renderer';

import {beforeEach, expect, it, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';

import React from 'react';
import type {RenderResult} from '@testing-library/react';
import Temp from '../../../src/components/pages/Temp';
import {createTestElement} from '../../utils/testUtils';

const props = {};
const component = createTestElement(<Temp {...props} />);

// vi.mock('react-router-dom', async () => {
//     vi.importActual('react-router-dom') as typeof ReactRouterDom)
// }));

vi.mock('react-router-dom', async () => {
  const lib = (await vi.importActual(
    'react-router-dom',
  )) as typeof ReactRouterDom;

  return {...lib, useNavigate: vi.fn()};
});

test('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

test('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance = renderResult.getByText('back to tab page');

    fireEvent.click(btnInstance);
  });
});
