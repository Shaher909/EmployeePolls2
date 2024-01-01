import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showQuestion } from '../actions/questions'; // Update the path accordingly

const PollWidget = ({ question, authorname, timestamp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Access the dispatch function

  const handleShowClick = () => {
    if (question && question.id) {
      const questionID = question.id;

      // Dispatch the showQuestion action before navigating
      dispatch(showQuestion(questionID));

      // Navigate to the Poll component with the questionID
      navigate(`/poll/${questionID}`);
    } else {
      console.error('Something is wrong with the question data:', question);
      // You might want to handle this error case, e.g., show a message to the user
    }
  };

  return (
    <div className="PollWidget">
      <p>{authorname}</p>
      <p>{timestamp}</p>
      <button className="btn" onClick={handleShowClick}>
        Show
      </button>
    </div>
  );
};

export default PollWidget;