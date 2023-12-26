//to invoke combine reducers
import { combineReducers } from "redux";
import users from "./users";
//import tweets from "./tweets";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading-bar";


export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer,
})