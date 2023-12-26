
import Title from "./Title";

const Login = () => {

    return (
        <div>
            <Title text={"Employees Polls Portal - Login Page"} />
            <label for="dropdown">Username:</label>
            <br />
            <input type="button" className="btn" value="Login" />
        </div>
    ); 
}

export default Login;

/*
<select id="dropdown" name="users">
                {Object.keys(users).map(id => (
                <option value={id}>{users[id].name}</option>
                ))}
            </select>
            */

