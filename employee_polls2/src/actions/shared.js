import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
//import { receiveTweets } from "./tweets";
import { setAuthUser, handleUserDetails } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis"

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users}) => {
            dispatch(receiveUsers(users));
            //dispatch(receiveTweets(tweets));
            dispatch(setAuthUser(AUTHED_ID));
            dispatch(handleUserDetails(AUTHED_ID));
            dispatch(hideLoading());
        }) 
    }
}