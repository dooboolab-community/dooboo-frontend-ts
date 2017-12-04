import React from 'react';
import renderer from 'react-test-renderer';

import CooniBtn from '@shared/CooniBtn';

test('CooniBtn changes border color when it is clicked', () => {
  const CooniBtn: any = renderer.create(
    <CooniBtn />
  )
});