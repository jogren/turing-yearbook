import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort 
      people={ [{id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'}] }
      deleteMember={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
})