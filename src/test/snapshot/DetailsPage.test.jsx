// MainPage.test.js
import React from 'react';
import DetailsPage from '../../components/details-page/DetailsPage';
import renderer from 'react-test-renderer';

test('Details Page Component Structure', () => {
  const component = renderer.create(
    <DetailsPage
      data={{
        refetch: () => {},
      }}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
