import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Title from "./Title";

const Leaderboard = ({ sortedUsers }) => {
  
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
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className='user-info-container'>
                  <img src={user.avatarURL} alt={user.name} className="avatar" />
                  <p>{user.name}</p>
                  <p>({user.id})</p>
                </div>
              </td>
              <td>{user.answered || 0}</td>
              <td>{user.created || 0}</td>
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

  // Calculate the total score for each user (sum of answered and created)
  const sortedUsers = Object.keys(users).map((userId) => ({
    id: userId,
    name: users[userId].name,
    avatarURL: users[userId].avatarURL,
    answered: userAnswers[userId] || 0,
    created: userQuestions[userId] || 0,
    totalScore: (userAnswers[userId] || 0) + (userQuestions[userId] || 0),
  })).sort((a, b) => b.totalScore - a.totalScore);

  return {
    sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);