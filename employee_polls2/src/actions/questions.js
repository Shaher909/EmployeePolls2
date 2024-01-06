import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//action name
export const RECEIVE_QUESTIONS =  "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";


//action creator
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,   
    };
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,    
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

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        
        dispatch(showLoading);
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
            timestamp: Date.now(),
          })
          .then((question) => {
            dispatch(addQuestion(question)); // Dispatch the addQuestion action
          })
          .then(() => dispatch(hideLoading));

    }
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

