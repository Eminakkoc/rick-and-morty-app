import React from 'react';
import { mount, configure } from 'enzyme';

// setup file
import Adapter from 'enzyme-adapter-react-16';

import CharacterCard from '../../components/character-card/CharacterCard';

configure({ adapter: new Adapter() });

describe('Test Character Card Component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const image = 'mock image source';
    const name = 'mock name';

    const card = mount((
      <CharacterCard
        detailsCallback={mockCallBack}
        image={image}
        name={name}
      />));
    card.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
