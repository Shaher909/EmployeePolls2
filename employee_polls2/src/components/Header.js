import { Link } from "react-router-dom";

const Header = () => {

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
            </ul>
        </nav>
    ); 
}

export default Header;



