import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PollCreation from './PollCreation';
import { handleAddQuestion } from '../actions/questions';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk'; // Import redux-thunk

jest.mock('../actions/questions', () => ({
  handleAddQuestion: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('PollCreation component', () => {
  it('handles question submission', async () => {
    const store = mockStore({
      authedUser: 'sarahedo',
      users: {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: 'sarahedo-avatar-url',
        },
        // ... other user data
      },
      questions: {},
    });

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
            <PollCreation />
        </MemoryRouter>
      </Provider>
    );

    // Fill out the form
    const optionOneInput = getByLabelText('Option One:');
    const optionTwoInput = getByLabelText('Option Two:');

    fireEvent.change(optionOneInput, { target: { value: 'Option One Text' } });
    fireEvent.change(optionTwoInput, { target: { value: 'Option Two Text' } });

    // Mock API call to handleAddQuestion
    handleAddQuestion.mockImplementation(() => (dispatch) => {
        // Simulate the asynchronous behavior
        return new Promise((resolve) => {
          setTimeout(() => {
            dispatch({ type: 'MOCK_QUESTION_ADDED' });
            resolve();
          }, 100);
        });
      });

    // Submit the form
    fireEvent.click(getByText('Submit'));

    // Wait for the asynchronous operation to complete
    await waitFor(() => expect(handleAddQuestion).toHaveBeenCalledTimes(1));

    // Assert that the correct arguments were passed to handleAddQuestion
    expect(handleAddQuestion).toHaveBeenCalledWith('Option One Text', 'Option Two Text');

  });
});