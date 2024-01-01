import {
    _getUsers,
    _getQuestions,
    //_saveLikeToggle,
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
  
