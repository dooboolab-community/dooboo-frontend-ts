import * as renderer from 'react-test-renderer';

import {
  RenderResult,
  act,
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import { createTestElement, history } from '../../../../test/testUtils';

import Button from '../../shared/Button';
import Intro from '../Intro';
import React from 'react';
import { getString } from '../../../../STRINGS';

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
describe('[Intro] screen rendering test', () => {
  let json: any;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let renderResult: RenderResult;

  afterEach(cleanup);

  it('should simulate [onLogin] click with testing library', () => {
    jest.useFakeTimers();
    renderResult = render(component);
    fireEvent.click(renderResult.getByText(getString('LOGIN')));
    expect(setTimeout).toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(clearTimeout).toHaveBeenCalled();
  });

  it('should simulate [navigate] when clicked', () => {
    jest.spyOn(history, 'push');
    rendered = renderer.create(component);
    root = rendered.root;

    const buttons = root.findAllByType(Button);
    buttons[1].props.onClick();
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it('should change theme when [change theme] has been clicked', () => {
    renderResult = render(component);
    const btnChangeTheme = renderResult.getByText(getString('CHANGE_THEME'));
    const clickResult1 = fireEvent.click(btnChangeTheme);
    expect(clickResult1).toBe(true);
    const clickResult2 = fireEvent.click(btnChangeTheme);
    expect(clickResult2).toBe(true);
  });
});
