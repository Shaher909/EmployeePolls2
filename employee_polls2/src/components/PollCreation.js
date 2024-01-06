import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import Title from './Title';

const PollCreation = () => {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (option, text) => {
    if (option === 'optionOne') {
      setOptionOneText(text);
    } else if (option === 'optionTwo') {
      setOptionTwoText(text);
    }
  };

  const handleSubmit = () => {
    // You might want to add validation here before dispatching the action
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
  };

  return (
    <div>
      <Title text={'Add a new poll'} />

      <p>Would you rather?</p>

      <form>
        <label>
          Option One:
          <input
            type="text"
            value={optionOneText}
            onChange={(e) => handleInputChange('optionOne', e.target.value)}
          />
        </label>

        <label>
          Option Two:
          <input
            type="text"
            value={optionTwoText}
            onChange={(e) => handleInputChange('optionTwo', e.target.value)}
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PollCreation;