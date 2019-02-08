import React from 'react';
import { Button } from '../Button';

import renderer from 'react-test-renderer';

// test for the pure component
describe('Button shared component test', () => {
  let tree;
  const component = <Button white={true} txt='Button 2nd test' />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('WhiteButton Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered;
  let instance;
  const component = <Button onClick={onClick}/>;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = instance.find(
      (el: any) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });
});

describe('RedButton Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered;
  let instance;
  const component = <Button white={true} onClick={onClick}/>;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = instance.find(
      (el: any) => el.type === 'button',
    );
    button.props.onClick();
    expect(count).toBe(2);
  });
});
