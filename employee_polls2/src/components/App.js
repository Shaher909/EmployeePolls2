import { useEffect, Fragment } from "react";
import { connect }  from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar  from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Title from './Title';
import '../App.css';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
          <p>test</p>
          <Title text={"Test Component Render"}></Title>
          {
            props.loading === true ? null : (
              <Routes>
                <Route path="/" exact element={<Title text={'test'} />} />
              </Routes>
            )
          }
      </div>
    </Fragment> 
  );
};


const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
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
