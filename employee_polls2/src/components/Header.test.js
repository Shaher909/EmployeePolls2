import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureStore();

describe('Header component', () => {
  it('renders navigation links and logout button when authenticated', () => {
    // Mock the necessary values
    const mockAuthedUser = 'user1';

    const mockUsers = {
      'user1': {
        id: 'user1',
        name: 'Test User',
        avatarURL: 'test-avatar-url',
      },
    };

    const store = mockStore({
      authedUser: mockAuthedUser,
      users: mockUsers,
    });

    // Render the component with the mock store and memory router
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    // Assertions for navigation links
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Leaderboard')).toBeTruthy();
    expect(screen.getByText('New')).toBeTruthy();

    // Assertions for user information when authenticated
    expect(screen.getByText('user1')).toBeTruthy();

    // Assertion for the logout button
    expect(screen.getByText('Logout')).toBeTruthy();
  });

});