import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import Title from './Title';
import { useNavigate } from "react-router-dom"; 

const PollCreation = () => {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (option, text) => {
    if (option === 'optionOne') {
      setOptionOneText(text);
    } else if (option === 'optionTwo') {
      setOptionTwoText(text);
    }
  };

  const handleSubmit = () => {
    const trimmedOptionOneText = optionOneText.trim();
    const trimmedOptionTwoText = optionTwoText.trim();

    // Check if both options are filled after trimming whitespace
    if (!trimmedOptionOneText || !trimmedOptionTwoText) {
        alert('Both options are required');
        return;
    }

    // Dispatch the action after successful validation
    dispatch(handleAddQuestion(trimmedOptionOneText, trimmedOptionTwoText))
    .then(() => {
      // Redirect to the /dashboard route after successful submission
      navigate('/dashboard');
    })
    .catch((error) => {
      // Handle errors, e.g., display an error message
      console.error('Error submitting question:', error);
    });
  };

  return (
    <div className="formContainer">
      <Title text={'Add a new poll'} />

      <p>Would you rather?</p>

      <form>
        <label htmlFor="optionOne">
          Option One:
          <input
            id="optionOne"
            type="text"
            value={optionOneText}
            onChange={(e) => handleInputChange('optionOne', e.target.value)}
            required
          />
        </label>

        <label htmlFor="optionTwo">
          Option Two:
          <input
            id="optionTwo"
            type="text"
            value={optionTwoText}
            onChange={(e) => handleInputChange('optionTwo', e.target.value)}
            required
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