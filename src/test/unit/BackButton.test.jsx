import React from 'react';
import { shallow } from 'enzyme';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BackButton from '../../components/back-button/BackButton';

configure({ adapter: new Adapter() });

describe('Test Back Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<BackButton callBack={mockCallBack}>Ok!</BackButton>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
