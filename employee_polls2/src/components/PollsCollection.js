import Title from "./Title";
import PollWidget from "./PollWidget";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom"; 
import React from "react";

const PollsCollection = ({ title, authedUser, users, questionsAnswered, questions }) => {

    const navigate = useNavigate(); // Initialize useNavigate
    // Retrieve the authenticated user details from the users object
    const authedUserDetails = users[authedUser];
  
    // Validate if required attributes are defined
    if (!authedUserDetails || !authedUserDetails.answers) {
        // Redirect to the login page
        navigate('/login');
        return null; // Render nothing if redirection is performed
    }

    // Filter questions based on whether they are answered or unanswered
    const filteredQuestions = questions.filter(
      (question) =>
        questionsAnswered
          ? authedUserDetails.answers.hasOwnProperty(question.id)
          : !authedUserDetails.answers.hasOwnProperty(question.id)
    );
  
    // Sort questions based on timestamp in descending order
    const sortedQuestions = filteredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    );
  
    return (
      <div className="PollsContainer">
        <Title text={title} />
        <hr />
        {sortedQuestions.map((question) => (
          <PollWidget
            className="Option"
            key={question.id}
            question={question}
            authorname={question.author}
            timestamp={new Date(parseInt(question.timestamp)).toLocaleString()}
            data-testid={`poll-widget-${question.id}`}
          />
        ))}
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    authedUser: state.authedUser,
    users: state.users,
    questions: Object.values(state.questions),
  });
  
  export default connect(mapStateToProps)(PollsCollection);



