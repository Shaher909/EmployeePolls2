import {
    _getUsers,
    //_getTweets,
    //_saveLikeToggle,
    //_saveTweet,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      //_getTweets(),
    ]).then(([users]) => ({
      users,
    }))
  }
  
