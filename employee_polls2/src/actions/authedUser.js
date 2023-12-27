export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthUser(id){
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

export function handleUserDetails(id) {
    return (dispatch, getState) => {
        const users = getState().users;
        const userDetails = users[id];

        dispatch(receiveUserDetails(userDetails));
        return Promise.resolve(userDetails);
    };
  }

  export function handleUserLogout() {
    return (dispatch) => {
        dispatch(logoutUser());
        return Promise.resolve();
    };
  }