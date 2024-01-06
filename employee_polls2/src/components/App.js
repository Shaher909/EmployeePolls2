import { useEffect, Fragment } from "react";
import { connect }  from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar  from "react-redux-loading-bar";
import { Navigate, Routes, Route } from "react-router-dom";

import Title from './Title';
import Dashboard from "./Dashboard";
import Error from "./Error";
import Poll from "./Poll";
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
          {props.authedUser ? (
            <>
              <Header user={props.authedUser} />
              <Routes>
                {props.authedUser.id !== null ? (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/add" element={<PollCreation />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/poll/:id" element={<Poll />} />
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="*" element={<Navigate to="/error" />} />
                  </>
                ) : (
                  <Route path="/*" element={<Navigate to="/login" replace />} />
                )}
                <Route path="/login" element={<Login />} />
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/*" element={<Navigate to="/login" replace />} />
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
