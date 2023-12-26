
import { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUser, handleUserDetails } from '../actions/authedUser';
import Title from "./Title";

const Login = ({ users, dispatch }) => {

    const [selectedUser, setSelectedUser] = useState('');

    const handleLogin = () => {
        if (selectedUser) {
          dispatch(setAuthUser(selectedUser));
          dispatch(handleUserDetails(selectedUser));
          
        } else {
          // Handle case when no user is selected
          console.log('Please select a user.');
        }
      };

    return (
        <div>
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
            <input type="button" className="btn" value="Login" onClick={handleLogin} />
        </div>
    ); 
}

const mapStateToProps = ({ users }) => ({
    users,
  });
  
  export default connect(mapStateToProps)(Login)

