// CharacterDetail.test.js
import React from 'react';
import CharacterDetail from '../../components/character-detail/CharacterDetail';
import renderer from 'react-test-renderer';

test('Character Detail Component Structure', () => {
  const component = renderer.create(
    <CharacterDetail />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
