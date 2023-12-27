import { useEffect, Fragment } from "react";
import { connect }  from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar  from "react-redux-loading-bar";
import { Navigate, Routes, Route } from "react-router-dom";

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
        {props.authedUser && props.authedUser.id ? (
          <Header user={props.authedUser} />
        ) : null}
        {props.loading === true ? null : (
          <Routes>
          {props.authedUser?.id !== null ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/poll" element={<Poll />} />
              <Route path="/error" element={<Error />} />
              <Route path="/add" element={<PollCreation />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route
                path="/login"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route path="/" element={<Dashboard />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/login" replace />} />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
        )}
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
