import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    //_saveTweet,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions] ) => ({
      users,
      questions
    }))
  }
  
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }