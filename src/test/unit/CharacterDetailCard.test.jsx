import React from 'react';
import { mount, configure } from 'enzyme';

// setup file
import Adapter from 'enzyme-adapter-react-16';

import CharacterDetail from '../../components/character-detail/CharacterDetail';
import characterDetailMock from '../mock/CharacterDetail.mock';

configure({ adapter: new Adapter() });

describe('Test Character Detail Component', () => {
  it('should have all fields filled', () => {
    const episodeLength = 5;
    const mockDetails = characterDetailMock(episodeLength);

    const card = mount((
      <CharacterDetail
        name={mockDetails.name}
        image={mockDetails.image}
        origin={mockDetails.origin}
        episodeList={mockDetails.episodeList}
      />));

    expect(card.find('.details-image').prop('src')).toBe(mockDetails.image);
    expect(card.find('.character-name').text()).toBe(mockDetails.name);
    expect(card.find('.character-origin').find('.info-pair-value').text()).toBe(mockDetails.origin);

    let episodeIndex = 0;
    card.find('.episode-list-container').children().forEach((node) => {
      expect(node.text()).toBe(mockDetails.episodeList[episodeIndex].name);
      episodeIndex += 1;
    });
  });
});

describe('Test Character Detail Component', () => {
  it('Test data with two episodes', () => {
    const episodeLength = 2;
    const mockDetails = characterDetailMock(episodeLength);

    const card = mount((
      <CharacterDetail
        name={mockDetails.name}
        image={mockDetails.image}
        origin={mockDetails.origin}
        episodeList={mockDetails.episodeList}
      />));

    expect(card.find('.episode-list-container').children()).toHaveLength(episodeLength);
  });
});

describe('Test Character Detail Component', () => {
  it('Test data with more than five episodes', () => {
    const episodeLength = 6;
    const mockDetails = characterDetailMock(episodeLength);

    const card = mount((
      <CharacterDetail
        name={mockDetails.name}
        image={mockDetails.image}
        origin={mockDetails.origin}
        episodeList={mockDetails.episodeList}
      />));
    expect(card.find('.episode-list-container').children()).toHaveLength(5);
  });
});
