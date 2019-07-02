// InfoPair.test.js
import React from 'react';
import InfoPair from '../../components/info-pair/InfoPair';
import renderer from 'react-test-renderer';

test('Info Pair Component Structure', () => {
  const component = renderer.create(
    <InfoPair />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
