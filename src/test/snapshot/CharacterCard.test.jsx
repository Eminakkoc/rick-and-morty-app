// CharacterCard.test.js
import React from 'react';
import CharacterCard from '../../components/character-card/CharacterCard';
import renderer from 'react-test-renderer';

test('Character Card Component Structure', () => {
  const component = renderer.create(
    <CharacterCard
      image="image_source"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
