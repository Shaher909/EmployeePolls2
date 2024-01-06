import { SET_AUTHED_USER, RECEIVE_USER_DETAILS, LOGOUT_USER } from "../actions/authedUser"; 


const storedAuthedUser = localStorage.getItem('authedUser');

export default function authedUser(state = storedAuthedUser, action){
    switch (action.type){
        case SET_AUTHED_USER:
            return action.id;
            
        case RECEIVE_USER_DETAILS:
            return action.user !== undefined ? action.user : state;

        case LOGOUT_USER:
            localStorage.removeItem('authedUser');
            return  null;
            
        default:
            return state;
    }

}
