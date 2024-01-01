import { RECEIVE_QUESTIONS, SHOW_QUESTION } from "../actions/questions";

export default function questions(state = {}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state, 
                ...action.questions,
            }

        case SHOW_QUESTION:
            return {
                ...state,
                selectedQuestionID: action.questionID,
            };   

        default:
            return state;
    }
}