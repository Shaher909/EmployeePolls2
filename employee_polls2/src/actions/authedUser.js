export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

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

export function handleUserDetails(id) {
    return (dispatch, getState) => {
        const users = getState().users;
        const userDetails = users[id];
        dispatch(receiveUserDetails(userDetails));
        return Promise.resolve(userDetails);
    };
  }