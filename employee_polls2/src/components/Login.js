
const Login = ({ users }) => {

    return (
        <div>
            <label for="dropdown">Username:</label>
            <select id="dropdown" name="users">
                {Object.keys(users).map(id => (
                <option value={id}>{users[id].name}</option>
                ))}
            </select>
            <input type="button" value="Login" />
        </div>
    ); 
}

export default Login;



