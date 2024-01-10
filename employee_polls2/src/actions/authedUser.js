import { receiveUsers } from "./users";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const LOGOUT_USER = "LOGOUT_USER";


export function setAuthUser(id){
    // Save the authenticated user ID to localStorage
    //localStorage.setItem('authedUser', id);

    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function receiveUserDetails(user) {
    return {
      type: RECEIVE_USER_DETAILS,
      user,
    };
  }

  export function logoutUser() {
    return {
      type: LOGOUT_USER,
    };
  }

  export function handleUserLogout() {
    return (dispatch) => {
        dispatch(logoutUser());
        return Promise.resolve();
    };
  }