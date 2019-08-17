import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Person 
      id={1}
      name="Jacob"
      quote="Do a good deed daily"
      superlative="test superlative"
      photo="jacob.png"
      deleteMember={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call deleteMember with an id when button is clicked', () => {
    const deleteMemberMock = jest.fn();
    const wrapper = shallow(<Person 
      id={2}
      name="Jacob"
      quote="Do a good deed daily"
      superlative="test superlative"
      photo="jacob.png"
      deleteMember={deleteMemberMock}
    />);
    wrapper.find('button').simulate('click');
    expect(deleteMemberMock).toHaveBeenCalled();
    expect(deleteMemberMock).toHaveBeenCalledWith(2);
  });
})