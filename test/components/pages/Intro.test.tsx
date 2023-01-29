import * as renderer from 'react-test-renderer';

import {act, cleanup, fireEvent, render} from '@testing-library/react';
import {afterEach, beforeEach, expect, it, test} from 'vitest';

import Button from '../../../src/components/uis/Button';
import Intro from '../../../src/components/pages/Intro';
import React from 'react';
import type {RenderResult} from '@testing-library/react';
import {createTestElement} from '../../utils/testUtils';

const props = {};
const component = createTestElement(<Intro {...props} />);

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// test for the container page in dom
test('[Intro] screen rendering test', () => {
  let json: any;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

test('[Intro] Interaction', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let renderResult: RenderResult;

  afterEach(cleanup);

  it('should simulate [onLogin] click with testing library', () => {
    jest.useFakeTimers();
    renderResult = render(component);

    const SignInButton = renderResult.getByTestId('SIGN_IN');

    fireEvent.click(SignInButton);

    act(() => {
      jest.runAllTimers();
    });
  });

  it('should simulate [navigate] when clicked', () => {
    rendered = renderer.create(component);
    root = rendered.root;

    const buttons = root.findAllByType(Button);

    buttons[1].props.onClick();
    expect(1).toBeTruthy(); // TODO: Expect navigate to be called.
  });

  it('should change theme when [change theme] has been clicked', () => {
    renderResult = render(component);

    const btnChangeTheme = renderResult.getByTestId('CHANGE_THEME');
    const clickResult1 = fireEvent.click(btnChangeTheme);

    expect(clickResult1).toBe(true);

    const clickResult2 = fireEvent.click(btnChangeTheme);

    expect(clickResult2).toBe(true);
  });
});
