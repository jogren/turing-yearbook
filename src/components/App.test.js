import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with a new member when addMember is called', () => {
    const wrapper = shallow(<App />);
    const newMember = { name: "Jacob Ogren", quote: "Do a good deed daily", superlative: "12345", id: 14, photo: "https://placekitten.com/200/300" };
    expect(wrapper.state('staff').length).toEqual(13)
    wrapper.instance().addMember(newMember, 'staff');
    expect(wrapper.state('staff').length).toEqual(14)
  });

  it('should delete a member and update state when deleteMember is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('staff').length).toEqual(14)
    wrapper.instance().deleteMember(1);
    expect(wrapper.state('staff').length).toEqual(13)
  });
})