import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PollsCollection from './PollsCollection';


const mockStore = configureStore();

describe('PollsCollection component', () => {
  it('renders the component with a mocked question without authedUser vote', () => {
    const authedUser = 'sarahedo';
    const users = {
      sarahedo: {
        id: 'sarahedo',
        answers: {},
      },
    };
    const questions = {
      'xj352vofupe1dqz9emx13r': {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'mtsamis',
        timestamp: 1493579767190,
        optionOne: { votes: [], text: 'deploy to production once every two weeks' },
        optionTwo: { votes: [], text: 'deploy to production once every month' },
      },
    };

    const initialState = {
      authedUser,
      users,
      questions,
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PollsCollection title="New Questions" questionsAnswered={0} />
        </MemoryRouter>
      </Provider>
    );

    // Check if the component renders the mocked question
    const questionAuthor = screen.getByText('mtsamis');
    expect(questionAuthor).toBeTruthy(); // or expect(questionAuthor).toBeDefined();

    const questionDate = screen.getByText('4/30/2017, 9:16:07 PM');
    expect(questionDate).toBeTruthy(); // or expect(questionDate).toBeDefined();

  });
});
