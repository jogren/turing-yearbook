import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  it.skip('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);

  });
})