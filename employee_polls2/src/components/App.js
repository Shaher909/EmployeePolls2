
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar  from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

import Title from './Title'
import Login from './Login'

import logo from '../logo.svg';
import '../App.css';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <p>test</p>
      <Title text={"Test Component Render"}></Title>
    </Fragment> 
  );
};

/*
const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
});*/


export default connect()(App);
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
