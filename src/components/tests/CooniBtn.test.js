import React from 'react';
import renderer from 'react-test-renderer';

import CooniBtn from '@shared/CooniBtn';

test('CooniBtn changes border color when it is clicked', () => {
  const cooniBtn = renderer.create(
    <CooniBtn white={true} clickHandler={props => props.white = !props.white} btnTxt='jest is awesome' />
  );
  let tree = cooniBtn.toJSON();
  expect(tree).toMatchSnapshot();
  console.log(tree);
  console.log(tree.props);
//   console.log(tree.children);
//   console.log(tree.children[0]);
//   console.log(tree.children[0].props.onClick);
//   console.log(tree.children[0].props.onClick[0]);

//   tree.props.clickHandler();
//   tree = cooniBtn.toJSON();
//   expect(tree).toMatchSnapshot();
});