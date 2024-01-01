//action name
export const RECEIVE_QUESTIONS =  "RECEIVE_QUESTIONS";
export const SHOW_QUESTION = "SHOW_QUESTION";

//action creator
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,   
    };
}

export const showQuestion = (questionID) => ({
    type: SHOW_QUESTION,
    questionID,
  });



