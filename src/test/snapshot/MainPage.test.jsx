// MainPage.test.js
import React from 'react';
import MainPage from '../../components/main-page/MainPage';
import renderer from 'react-test-renderer';

test('Main Page Component Structure', () => {
  const component = renderer.create(
    <MainPage
      data={{
        refetch: () => {},
      }}
      addCharacters={() => {}}
      selectCharacter={() => {}}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
