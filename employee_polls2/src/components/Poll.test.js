import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Poll from './Poll';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Poll component', () => {
  it('calculates and displays the percentage of people who voted for an option', () => {
    // Mock the necessary values
    const mockQuestion = {
      'mock-question-id': {
        id: 'mock-question-id',
        author: 'mock-author-id',
        timestamp: 123456789, // Replace with an actual timestamp
        optionOne: {
          text: 'Mock Option One',
          votes: ['mock-author-id', 'user1', 'user2'], // Array of user IDs who voted for Option One
        },
        optionTwo: {
          text: 'Mock Option Two',
          votes: ['user3'], // Array of user IDs who voted for Option Two
        },
      },
      author: 'mock-author-id',
    };

    const mockUsers = {
      'mock-author-id': {
        id: 'mock-author-id',
        name: 'Mock Author',
        avatarURL: 'mock-author-avatar-url',
      },
      'user1': {
        id: 'user1',
        name: 'User 1',
        avatarURL: 'user1-avatar-url',
      },
      'user2': {
        id: 'user2',
        name: 'User 2',
        avatarURL: 'user2-avatar-url',
      },
      'user3': {
        id: 'user3',
        name: 'User 3',
        avatarURL: 'user3-avatar-url',
      },
    };

    const mockAuthedUser = 'user1';

    const initialState = {
      selectedQuestion: {
        selectedQuestionID: 'mock-question-id',
      },
      questions: {
        mockQuestion,
      },
      users: mockUsers,
      authedUser: mockAuthedUser,
    };

    const store = mockStore(initialState);

    // Render the component with the mock store
    const { getByText } = render(
      <Provider store={store}>
        <Poll />
      </Provider>
    );
    
    // Assertions for percentage calculation
    const percentageOptionOne = getByText('Mock Option One').nextElementSibling;
    expect(percentageOptionOne.textContent).toContain('75%'); // In this example, 3 out of 4 votes

    const percentageOptionTwo = getByText('Mock Option Two').nextElementSibling;
    expect(percentageOptionTwo.textContent).toContain('25%'); // In this example, 1 out of 4 votes
  });
});