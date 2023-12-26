import { Link } from "react-router-dom";

const Header = ({user}) => {

    const avatar = user.avatarURL;
    const name = user.name;
    const id = user.id

    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/add">New</Link>
                </li>
                <div className="userOverview">
                    <img src={avatar} alt={`${name}`} className="avatar" />
                    <p>{`${id}`}</p>
                </div>
            </ul>
        </nav>
    ); 
}

export default Header;



