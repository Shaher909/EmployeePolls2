import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Title from "./Title";

const Leaderboard = ({ users, userAnswers, userQuestions }) => {
  useEffect(() => {
    // You can dispatch any additional actions or data fetching here if needed
  }, []);

  return (
    <div>
      <Title text={"Leaderboard"} />
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((userId) => (
            <tr key={userId}>
              <td>
                    <div className='user-info-container'>
                        <img src={users[userId].avatarURL} alt={users[userId].name} className="avatar" />
                        <p>{users[userId].name}</p>
                        <p>({users[userId].id})</p>
                        
                    </div>
              </td>
              <td>{userAnswers[userId] || 0}</td>
              <td>{userQuestions[userId] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
    const { users, questions } = state;
  
    const userAnswers = {};
    const userQuestions = {};
  
    // Calculate the total number of answers for each user
    Object.keys(users).forEach((userId) => {
      userAnswers[userId] = Object.keys(users[userId].answers).length;
    });
  
    // Calculate the total number of questions for each user
    Object.keys(questions).forEach((questionId) => {
      const author = questions[questionId].author;
      userQuestions[author] = (userQuestions[author] || 0) + 1;
    });
  
    return {
      users,
      userAnswers,
      userQuestions,
    };
  };

export default connect(mapStateToProps)(Leaderboard);