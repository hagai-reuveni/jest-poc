import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const container = shallow(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render an `h1', () => {
    const container = shallow(<App />);
    expect(container.find('h1').length).toBe(1);
    expect(container.find('h1').text()).toEqual('This is a jest poc test');
  });
});
//console.log(window); // this is to test if jest is running with js-dom