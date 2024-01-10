import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Poll from './Poll';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

describe('Poll component', () => {
  it('calculates and displays the percentage of people who voted for an option', (done) => {
    // Mock the necessary values
    const mocQusetion = {
        id: 'mocQusetion',
        author: 'mock-author-id',
        timestamp: 123456789,
        optionOne: {
          text: 'Mock Option One',
          votes: ['mock-author-id', 'user1', 'user2'],
        },
        optionTwo: {
          text: 'Mock Option Two',
          votes: ['user3'],
        },
      author: 'mock-author-id',
    };

    const mockUsers = {
        'user1': {
            id: 'user1',
            name: 'User 1',
            avatarURL: 'user1-avatar-url',
            answers: {
              [mocQusetion.id]: 'optionOne', // User 1 voted for Option One
            },
          },
          'mock-author-id': {
            id: 'mock-author-id',
            name: 'Mock Author',
            avatarURL: 'mock-author-avatar-url',
            answers: {
                [mocQusetion.id]: 'optionOne', // voted for Option One
              }
          },
          'user2': {
            id: 'user2',
            name: 'User 2',
            avatarURL: 'user2-avatar-url',
            answers: {
              [mocQusetion.id]: 'optionOne', // User 2 voted for Option One
            },
          },
          'user3': {
            id: 'user3',
            name: 'User 3',
            avatarURL: 'user3-avatar-url',
            answers: {
              [mocQusetion.id]: 'optionTwo', // User 3 voted for Option Two
            },
          },
          'user4': {
            id: 'user4',
            name: 'User 4',
            avatarURL: 'user4-avatar-url',
            answers: {
            },
          },
        };

    const mockAuthedUser = 'user1';

    const initialState = {
      selectedQuestion: {
        selectedQuestionID: 'mocQusetion',
      },
      questions: {
        mocQusetion,
      },
      users: mockUsers,
      authedUser: mockAuthedUser,
    };

    const store = mockStore(initialState);

    // Render the component with the mock store
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
            <Poll />
        </MemoryRouter>
      </Provider>
    );

    console.log('Store state:', store.getState());

    // Wait for the loading state to finish (replace 'Retrieving question . . . ' with a more specific text)
      const optionOneElement = getByText('Mock Option One');
      expect(optionOneElement).toBeTruthy();

      // Assertions for percentage calculation
      const percentageOptionOne = getByText('Mock Option One').nextElementSibling;
      expect(percentageOptionOne.textContent.trim()).toContain('75.00%'); // In this example, 3 out of 4 votes

      const percentageOptionTwo = getByText('Mock Option Two').nextElementSibling;
      expect(percentageOptionTwo.textContent.trim()).toContain('25.00%'); // In this example, 1 out of 4 votes

      done(); // Call done to signify the end of the test
  });
});