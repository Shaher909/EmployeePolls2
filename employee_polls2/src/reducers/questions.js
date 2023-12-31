import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;
      const updatedQuestion = {
        ...state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: state[qid][answer].votes.concat([authedUser]),
        },
      };

      return {
        ...state,
        [qid]: updatedQuestion,
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