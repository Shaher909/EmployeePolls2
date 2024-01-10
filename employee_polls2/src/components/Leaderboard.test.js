import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Leaderboard from './Leaderboard';

const mockStore = configureStore();

describe('Leaderboard component', () => {
  it('displays correct user information', () => {

    const users = {
        user1: { id: 'user1', name: 'User 1', avatarURL: 'user1-avatar.jpg', answers: { question1: 'optionOne', question2: 'optionOne', question3: 'optionTwo', question4: 'optionOne' } },
        user2: { id: 'user2', name: 'User 2', avatarURL: 'user2-avatar.jpg', answers: { question1: 'optionOne', question4: 'optionTwo' } },
      };
      
      const questions = {
        question1: { id: 'question1', author: 'user1', timestamp: 123456789, optionOne: { votes: 2, text: 'Option One' }, optionTwo: { votes: [], text: 'Option Two' } },
        question2: { id: 'question2', author: 'user2', timestamp: 123456790, optionOne: { votes: 1, text: 'Option One' }, optionTwo: { votes: [], text: 'Option Two' } },
        question3: { id: 'question3', author: 'user2', timestamp: 123456791, optionOne: { votes: [], text: 'Option One' }, optionTwo: { votes: 1, text: 'Option Two' } },
        question4: { id: 'question4', author: 'user2', timestamp: 123456792, optionOne: { votes: 1, text: 'Option One' }, optionTwo: { votes: 1, text: 'Option Two' } },
      };
      

    const store = mockStore({
      users,
      questions,
    });

    const { getByText } = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );

    // Check if user information is displayed correctly
    expect(getByText('User 1')).toBeInTheDocument();
    expect(getByText('(user1)')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument(); //number of answers of user 1
    expect(getByText('1')).toBeInTheDocument(); //number of questions of user 1
  });
});