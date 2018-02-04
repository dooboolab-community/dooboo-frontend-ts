import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '@shared/Button';

// const component = shallow(
//     <Button white={true} btnTxt='Button 1st test' />
//   );

// test for the pure component
describe('Button shared component test', () => {
  const component = shallow(
    <Button white={true} btnTxt='Button 2nd test' />,
  );

  it('component and snapshot matches', () => {
    expect(component).toMatchSnapshot();
  });

  it('component onClick function has to be added and work to make the count 2', () => {
    let count = 1;
    const onClick = () => {
      count++;
    };

    component.setProps({ onClick: () => onClick() });
    expect(component).toMatchSnapshot();

    component.find('div').simulate('click');
    expect(count).toBe(2);
  });
});
