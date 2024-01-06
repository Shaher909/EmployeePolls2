import React from "react";
import Title from "./Title";
import { connect } from 'react-redux';
import { saveQuestionAnswer } from "../utils/api";
import { handleSaveAnswer } from "../actions/questions";

const Poll = ({ question, author, authedUser, userAnswers, dispatch }) => {
    
    

    if (!question) {
        return <p>Retrieving question . . . if this this takes a while there's could be an error in getting the data from the back-end.</p>;
    }

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
        saveQuestionAnswer({ authedUser, qid: question.id, answer: option });
        console.log(`Voting for ${option}`);
    });
    };

    // Calculate the number of votes for each option
    const votesOptionOne = question.optionOne.votes.length;
    const votesOptionTwo = question.optionTwo.votes.length;

    // Calculate the total number of votes
    const totalVotes = votesOptionOne + votesOptionTwo;

    // Calculate the percentage of votes for each option
    const percentageOptionOne = (votesOptionOne / totalVotes) * 100;
    const percentageOptionTwo = (votesOptionTwo / totalVotes) * 100;

    // Check if the authedUser has answered this question and get the chosen option
    const chosenOption = hasAnswered ? userAnswers[question.id] : null;

    return (
        <div>
            <Title text={`Poll by ${authorName}`} />

            <p>Would you rather: </p>
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