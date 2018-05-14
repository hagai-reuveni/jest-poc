import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

export const createMockStore = (config) => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  return mockStore(config);
};
