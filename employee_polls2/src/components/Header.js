import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/authedUser";
import { connect } from 'react-redux';
import { receiveUsers } from "../actions/users";

const Header = ({authedUser, dispatch, users}) => {

    const navigate = useNavigate();

    // Use useEffect to fetch user details when the component mounts
    useEffect(() => {
        // Check if authedUser is not null and if the details are not already in the store
        if (authedUser && !users[authedUser]) {
            const userDetails = {
                ...users[authedUser], // Use the actual user details from the store
            };
            // Dispatch an action to store user details in the Redux store
            dispatch(receiveUsers({ [authedUser]: userDetails }));
        }
    }, [authedUser, dispatch, users]);
    

    const handleLogout = () => {
        // Dispatch action to set authedUser to empty
        dispatch(logoutUser());
    
        // Redirect to the login page
        navigate("/login");
      };

    // Check if authedUser is null and return null if true
    if (authedUser === null) {
        return null; // or you can return an empty component
    }

    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/dashboard">Home</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/add">New</Link>
                </li>
                
                {authedUser !== null ?  (
                <>
                    <li>
                    <div className="userOverview">
                        <img src={users[authedUser]?.avatarURL} alt={users[authedUser]?.name} className="avatar" />
                        <p>{users[authedUser]?.id}</p>
                    </div>
                    </li>
                    <li>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </li>
                </>
                ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
                )}
            </ul>
        </nav>
    ); 
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users,
  });
  
  export default connect(mapStateToProps)(Header);

               