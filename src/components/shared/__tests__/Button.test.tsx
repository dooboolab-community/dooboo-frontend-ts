import React from 'react';
import Button from '../Button';

import * as renderer from 'react-test-renderer';
import { IC_FACEBOOK_W } from '../../../utils/Icons';

// test for the pure component
describe('[Button] shared component test', () => {
  let tree: any;
  const component: any = <Button white={true} text='Button 2nd test' />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('[Transparent] interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  const component: any = <Button onClick={onClick}/>;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = root.find(
      (el: any) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });
});

describe('[WhiteButton] interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let component: any;

  it('should simulate onClick', () => {
    component = <Button white={true} onClick={onClick}/>;
    rendered = renderer.create(component);
    root = rendered.root;

    const button = root.find(
      (el: any) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });

  it('should render isLoading status', () => {
    component = <Button white={true} isLoading={true}/>;
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('should render img status', () => {
    component = <Button white={true} imgSrc={IC_FACEBOOK_W}/>;
    rendered = renderer.create(component);
    root = rendered.root;
  });
});
