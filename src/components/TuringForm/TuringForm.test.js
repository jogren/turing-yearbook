import React from 'react';
import { shallow } from 'enzyme';
import TuringForm from './TuringForm';

describe('TuringForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<TuringForm 
      addMember={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with name entered into the input', () => {
    const wrapper = shallow(<TuringForm 
      addMember={jest.fn()}
    />);
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'test', name: 'name' } });
    expect(wrapper.state('name')).toEqual('test')
  });

  it('should update state with quote entered into the input', () => {
    const wrapper = shallow(<TuringForm
      addMember={jest.fn()}
    />);
    const input = wrapper.find('input').at(1);
    input.simulate('change', { target: { value: 'test', name: 'quote' } });
    expect(wrapper.state('quote')).toEqual('test')
  });

  it('should update state with superlative entered into the input', () => {
    const wrapper = shallow(<TuringForm
      addMember={jest.fn()}
    />);
    const input = wrapper.find('input').at(2);
    input.simulate('change', { target: { value: 'test', name: 'superlative' } });
    expect(wrapper.state('superlative')).toEqual('test')
  });

  it('should update role state when radio button is clicked', () => {
    const wrapper = shallow(<TuringForm 
      addMember={jest.fn()}
    />);
    const input = wrapper.find('input').at(3);
    input.simulate('click');
    expect(wrapper.state('role')).toEqual('staff');
  });

  it('should update role state when radio button is clicked', () => {
    const wrapper = shallow(<TuringForm
      addMember={jest.fn()}
    />);
    const input = wrapper.find('input').at(4);
    input.simulate('click');
    expect(wrapper.state('role')).toEqual('students');
  });

  it('should create a new member when clicking in the button', () => {
    const addMemberMock = jest.fn();
    const wrapper = shallow(<TuringForm 
      addMember={addMemberMock}
    />);
    wrapper.find('button').simulate('click', {
      preventDefault: () => {}
    });
    expect(addMemberMock).toHaveBeenCalled();
  });
})