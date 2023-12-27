import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/authedUser";
import { connect } from 'react-redux';

const Header = ({authedUser, dispatch}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Dispatch action to set authedUser to empty
        dispatch(logoutUser());
    
        // Redirect to the login page
        navigate("/login");
      };

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
                
                {authedUser.id !== null ?  (
                <>
                    <li>
                    <div className="userOverview">
                        <img src={authedUser?.avatarURL} alt={authedUser?.name} className="avatar" />
                        <p>{authedUser?.id}</p>
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

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
  });
  
  export default connect(mapStateToProps)(Header);



