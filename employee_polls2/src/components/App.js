import { useEffect, Fragment } from "react";
import { connect }  from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar  from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

import Title from './Title';
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import Error from "./Error";
import PollCreation from "./PollCreation";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Header from "./Header";

import '../App.css';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div className="container App">
          {props.authedUser && <Header user={props.authedUser} />}
          {
            props.loading === true ? null : (
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/dashboard" exact element={<Dashboard/>} />
                <Route path="/poll" exact element={<Poll />} />
                <Route path="/error" exact element={<Error />} />
                <Route path="/add" exact element={<PollCreation />} />
                <Route path="/leaderboard" exact element={<Leaderboard />} />
              </Routes>
            )
          }
      </div>
    </Fragment> 
  );
};


const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
  authedUser: authedUser,
});

export default connect(mapStateToProps)(App);

//export default connect()(App);
//export default App;



/*
function App() {

  const dummyUsers = [
    { id: 1, name: 'Shaher' },
    { id: 2, name: 'Lina Fischer' },
    { id: 3, name: 'Afoushi' },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text={"Test Component Render"}></Title>
        <Login users={dummyUsers}></Login>
      </header>
    </div>
  );
}

export default App;
*/
