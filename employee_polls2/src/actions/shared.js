import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthUser, handleUserDetails } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = null;

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
    
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthUser(AUTHED_ID));
            dispatch(handleUserDetails(AUTHED_ID));
            dispatch(hideLoading());
        }) 
    }
}