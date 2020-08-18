import * as renderer from 'react-test-renderer';

import Button from '../Button';
import { IC_FACEBOOK_W } from '../../../utils/Icons';
import React from 'react';

// test for the pure component
describe('[Button] shared component test', () => {
  let tree: any;
  const component: React.ReactElement = <Button text="Button 2nd test" />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('[Transparent] interaction', () => {
  let count = 1;
  const onClick = (): void => {
    count++;
  };

  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  const component: React.ReactElement = <Button onClick={onClick} />;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = root.find(
      (el: renderer.ReactTestInstance) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });
});

describe('[WhiteButton] interaction', () => {
  let count = 1;
  const onClick = (): void => {
    count++;
  };

  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let component: React.ReactElement;

  it('should simulate onClick', () => {
    component = <Button onClick={onClick} />;
    rendered = renderer.create(component);
    root = rendered.root;

    const button = root.find(
      (el: renderer.ReactTestInstance) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });

  it('should render isLoading status', () => {
    component = <Button isLoading={true} />;
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('should render img status', () => {
    component = <Button imgSrc={IC_FACEBOOK_W} />;
    rendered = renderer.create(component);
    root = rendered.root;
  });
});
