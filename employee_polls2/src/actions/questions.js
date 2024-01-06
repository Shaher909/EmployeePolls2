import { saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//action name
export const RECEIVE_QUESTIONS =  "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";


//action creator
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,   
    };
}

function saveAnswer({authedUser, qid, answer}){
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

export function handleSaveAnswer(info){
    return (dispatch) => {
        dispatch(saveAnswer(info));

        //save data into the DB
        return saveQuestionAnswer(info).catch((e) => {
            console.warn("Error in Saving Answer: ", e);
            dispatch(saveAnswer(info));
            alert("There was an error answering the question, try again");
        }) 
    }
}

