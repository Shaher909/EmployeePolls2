//to invoke combine reducers
import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import selectedQuestion from "./selectedQuestion";
import { loadingBarReducer } from "react-redux-loading-bar";


export default combineReducers({
    authedUser,
    users,
    questions,
    selectedQuestion,
    loadingBar: loadingBarReducer,
})