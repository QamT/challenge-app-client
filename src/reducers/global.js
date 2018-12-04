import * as types from '../actions/actionType';

const initialState = {
  challenges: [],
  challengeList: [
    'Feed a homeless person',
    'Do a 100 push ups',
    'Read a book',
    'Make spaghetti',
    'Donate blood',
    'Volunteer at an organization',
    'Write a blog post',
    'Hot pepper challenge',
    'Ice bucket challenge',
    'Get a victory royale win',
    'Plant a tree',
    'Go skydiving',
    'Learn an instrument',
    'Solve a rubik\'s cube',
    'Get a celebrity\'s autograph'
  ],
  teams: [], 
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_CHALLENGES_SUCCESS: 
      return Object.assign({}, state, {
        loading: false,
        challenges: [...action.challenges.challenges],
        teams: [...action.challenges.teams]
      });
    case types.ALL_CHALLENGES_ERROR: 
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case types.ALL_CHALLENGES_REQUEST: 
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    
    default: 
      return state;
  }
}