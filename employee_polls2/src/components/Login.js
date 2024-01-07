import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authedUser';
import Title from "./Title";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = async () => {
    if (selectedUser && password && users[selectedUser]?.password === password) {
      // Dispatch setAuthUser with the user ID
      dispatch(setAuthUser(selectedUser));

      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
      // Handle case when no user is selected or password is incorrect
      console.log('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="formContainer">
      <Title text={"Employees Polls Portal - Login Page"} />
      <label htmlFor="dropdown">Username:</label>
      <br />
      <select
        id="dropdown"
        onChange={(e) => setSelectedUser(e.target.value)}
        value={selectedUser}
      >
        <option value="" disabled>
          Select a username
        </option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="button" className="btn" value="Login" onClick={handleLogin} />
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);