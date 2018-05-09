import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an `h1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('This is a jest poc test');
  });
});
//console.log(window); // this is to test if jest is running with js-dom