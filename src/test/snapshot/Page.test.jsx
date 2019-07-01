// CharacterCard.test.js
import React from 'react';
import Page from '../../components/page/Page';
import renderer from 'react-test-renderer';

test('Info Pair Component Structure', () => {
  const component = renderer.create(
    <Page />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
