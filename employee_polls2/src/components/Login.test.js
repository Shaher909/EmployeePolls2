import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from './Login';

const mockStore = configureStore();

describe('Login component', () => {
  it('renders username dropdown, password field, and button', () => {
    const users = {
      user1: { id: 'user1', name: 'User 1', password: 'password1' },
      user2: { id: 'user2', name: 'User 2', password: 'password2' },
    };

    const authedUser = null;

    const store = mockStore({
      users,
      authedUser,
    });

    // Render the Login component and destructure asFragment from the result
    const { asFragment, getByLabelText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    // Use Jest's snapshot feature to create/update snapshots
    // test #5 - snapshot
    expect(asFragment()).toMatchSnapshot();

    //Test #6 DOM Test
    // Get username field and login button
    const usernameField = getByLabelText('Username:');
    const loginButton = getByText('Login');

    if (usernameField && loginButton) {
      // Trigger a change event in the username field
      fireEvent.change(usernameField, { target: { value: 'user1' } });

      // Verify that the username field is updated
      expect(usernameField).toHaveValue('user1');

      // Trigger a click event on the login button
      fireEvent.click(loginButton);

    } else {
      // Handle the case where elements are not found
      throw new Error('Login button or username field not found');
    }
  });
});