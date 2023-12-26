import { SET_AUTHED_USER, RECEIVE_USER_DETAILS } from "../actions/authedUser"; 

export default function authedUser(state = null, action){
    switch (action.type){
        case SET_AUTHED_USER:
            return { id: action.id };
        
        case RECEIVE_USER_DETAILS:
            return action.user;

        default:
            return state;
    }

}