export const SHOW_QUESTION = "SHOW_QUESTION";

export const showQuestion = (questionID) => ({
    type: SHOW_QUESTION,
    questionID,
  });
