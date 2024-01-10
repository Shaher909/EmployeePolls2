import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Error from './Error';

// Mock the Title component
jest.mock('./Title', () => ({ text }) => <div>{text}</div>);

const mockStore = configureStore();
const mockAuthedUser = 'user1';

const store = mockStore({
  mockAuthedUser,
});

describe('Error component', () => {
  it('displays the error page with the correct title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Error />
        </MemoryRouter>
      </Provider>
    );

    // Check if the Error component renders the correct title
    expect(getByText('Error Page!')).toBeInTheDocument();
  });
});