import { SHOW_QUESTION } from "../actions/selectedQuestion";

export default function selectedQuestion(state = {}, action){
    switch (action.type){
        case SHOW_QUESTION:
            return {
                ...state,
                selectedQuestionID: action.questionID,
            };   

        default:
            return state;
    }
}