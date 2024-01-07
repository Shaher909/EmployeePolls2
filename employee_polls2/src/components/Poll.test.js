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
      id: 'mock-question-id',
      optionOne: {
        text: 'Mock Option One',
        votes: 2, // Number of votes for Option One
      },
      optionTwo: {
        text: 'Mock Option Two',
        votes: 1, // Number of votes for Option Two
      },
      author: "mock-author-id"
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
    };

    const mockAuthedUser = 'user1';

    const mockUserAnswers = {
      'mock-question-id': 'optionOne',
    };

    const initialState = {
      selectedQuestion: {
        selectedQuestionID: 'mock-question-id',
      },
      questions: {
        'mock-question-id': mockQuestion,
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
    expect(percentageOptionOne).toHaveTextContent('66.67%'); // In this example, 2 out of 3 votes

    const percentageOptionTwo = getByText('Mock Option Two').nextElementSibling;
    expect(percentageOptionTwo).toHaveTextContent('33.33%'); // In this example, 1 out of 3 votes

    // Additional assertions related to the author can be added here if needed
  });
});