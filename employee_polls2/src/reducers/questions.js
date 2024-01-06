import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state, 
                ...action.questions,
            }
        

        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action;
            const chosenOption = state[qid][answer];
        
            return {
                ...state,
                [qid]: {
                ...state[qid],
                [answer]: {
                    ...chosenOption,
                    votes: chosenOption.votes + 1,
                },
                },
            };
        
        case ADD_QUESTION:
            const { question } = action;
        
            return {
                ...state,
                [question.id]: question,
            };
    
        default:
            return state;
        }
}

//authedUser, qid, answer