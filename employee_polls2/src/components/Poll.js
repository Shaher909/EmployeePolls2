import React, { useEffect } from "react";
import Title from "./Title";
import { connect } from 'react-redux';
import { saveQuestionAnswer } from "../utils/api";
import { handleSaveAnswer } from "../actions/questions";
import { useNavigate } from 'react-router-dom';
import Error from "./Error";


const Poll = ({ question, author, authedUser, userAnswers, dispatch }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the stored question ID when the component mounts
        localStorage.removeItem('selectedQuestionID');
      }, []); // Empty dependency array ensures this effect runs only once
    

      useEffect(() => {
        // Redirect to the Error component if there's no question
        if (!question) {
          navigate('/error');
        }
      }, [question, navigate]);

      if (!question) {
        // Redirecting to the Error component if there's no question
        return null; // Render nothing while redirecting
    }


    console.log('Question:', question);
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
    const authorName = author.name;

    // Assuming the avatar URL is stored in the users object based on the user ID
    const authorAvatarURL = author.avatarURL;

    // Check if the user has answered the current question
    const hasAnswered = authedUser && userAnswers && userAnswers[question.id];

    // Function to handle the vote (you can implement the logic based on your requirements)
    const handleVote = (option) => {
        // Dispatch the action to save the answer in the Redux store
        dispatch(handleSaveAnswer({ authedUser, qid: question.id, answer: option }))
          .then(() => {
            // Dispatch the asynchronous operation to save the answer to the back-end
            saveQuestionAnswer({ authedUser, qid: question.id, answer: option })
              .catch((error) => {
                console.log("Error saving question answer:", error);
                // If there's an error saving to the back-end, rollback the Redux store
                dispatch(handleSaveAnswer({ authedUser, qid: question.id, answer: null }));
              });
      
            console.log(`Voting for ${option}`);
          });
      };

    // Calculate the number of votes for each option
    const votesOptionOne = question.optionOne.votes.length;
    const votesOptionTwo = question.optionTwo.votes.length;

    // Calculate the total number of votes
    const totalVotes = votesOptionOne + votesOptionTwo;

    // Calculate the percentage of votes for each option
    const percentageOptionOne = totalVotes > 0 ? (votesOptionOne / totalVotes) * 100 : 0;
    const percentageOptionTwo = totalVotes > 0 ? (votesOptionTwo / totalVotes) * 100 : 0;

    // Check if the authedUser has answered this question and get the chosen option
    const chosenOption = hasAnswered ? userAnswers[question.id] : null;

    return (
        <div>
            <Title text={`Poll by ${authorName}`} />

            <h2>Would you rather: </h2>
            <div className="authorInfo">
                <img src={authorAvatarURL} alt={`${authorName}'s Avatar`} className="bigAvatar" />
            </div>
            <div className="questionOptions">
                <div className={`Option ${chosenOption === 'optionOne' ? 'chosenOption' : ''}`}>
                    <p>{optionOneText}</p>
                    <button disabled={hasAnswered} onClick={() => handleVote("optionOne")}>
                        {hasAnswered ? `Voted - ${votesOptionOne} votes (${percentageOptionOne.toFixed(2)}%)` : "Vote"}
                    </button>
                </div>
                <div className={`Option ${chosenOption === 'optionTwo' ? 'chosenOption' : ''}`}>
                    <p>{optionTwoText}</p>
                    <button disabled={hasAnswered} onClick={() => handleVote("optionTwo")}>
                        {hasAnswered ? `Voted - ${votesOptionTwo} votes (${percentageOptionTwo.toFixed(2)}%)` : "Vote"}
                    </button>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    // Retrieve selectedQuestionID from localStorage
    const storedQuestionID = localStorage.getItem('selectedQuestionID');

    // Use storedQuestionID if available, otherwise use the one from the Redux store
    const selectedQuestionID = storedQuestionID || state.selectedQuestion.selectedQuestionID;

    const question = selectedQuestionID ? state.questions[selectedQuestionID] : null;
    const authorID = question ? question.author : null;
    const author = authorID ? state.users[authorID] : null;
    const authedUser = state.authedUser;
    //const userAnswers = authedUser ? state.users[authedUser].answers : null;
    const userAnswers = authedUser && state.users[authedUser] ? state.users[authedUser].answers : null;

    return {
        question,
        author,
        authedUser,
        userAnswers,
    };
};

export default connect(mapStateToProps)(Poll);