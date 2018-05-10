import React from 'react';
import { Home } from './Home';
import sinon from 'sinon';
//import configureStore from 'redux-mock-store';
//const mockStore = configureStore();
//const dispatch = sinon.spy();

describe('<Home/>', () => {
  let container;
  const counterValue = 1;
  const handleIncreaseValue = sinon.spy();
  const handleDecreaseValue = sinon.spy();
  const props = {
    handleIncreaseValue,
    handleDecreaseValue,
    counterValue,
  };

  beforeEach(() => {
    container = shallow(<Home { ...props }/>);
  });

  it('Should render home ', () => {
    expect(container).toMatchSnapshot();
  });
  it('Should render home ', () => {
    expect(container.find('h2').length).toEqual(1);
  });
  it('Should call increase function ', () => {
    container = mount(<Home { ...props }/>);
    container.find('button').first().simulate(
      'click',
      {preventDefault() {}}
    )
    expect(handleIncreaseValue.calledOnce).toEqual(true);
  });
  it('Should call increase function ', () => {
    container = mount(<Home { ...props }/>);
    container.find('button').at(1).simulate(
      'click',
      {preventDefault() {}}
    )
    expect(handleDecreaseValue.called).toEqual(true);
  });
});
