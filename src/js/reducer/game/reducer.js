//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _        from 'lodash';
import question from './question.js'

//-----------------------------------------------------------------------------//

// Create the default game object.

const initialState = () => {
  return {
    levels:        [],
    timeCompleted: null,
    currentLevel:  0,
    gameCompleted: false
  }
}

// Set user's answer

function setUserAnswer(state, userAnswer) {
  let level = state.levels[state.currentLevel];
  level.userAnswer = userAnswer;
  state.levels[state.currentLevel] = level;
  return state;
}

// Set increment level

function incrementLevel(state) {
  state.currentLevel = state.currentLevel + 1;
  if(state.currentLevel == 10){
    state.gameCompleted = true;
  }
  return state;
}

// Set start time of level.

function setStartTime(state, level, time) {
  state.levels[level].startTime = time;
  return state
}

// Set end time of level.

function setEndTime(state, level, time) {
  state.levels[level].endTime = time;
  return state;
}


//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState, action){

  switch (action.type){
    
    case 'SET_STARTTIME': {
      return setStartTime(prevState, action.level, action.time);
    }
    
    case 'SET_ENDTIME': {
      return setEndTime(prevState, action.level, action.time);
    }
    
    case 'SET_QUESTIONS': {
      return question(_.clone(prevState), action.operator);
    }
    
    case 'USER_ANSWER': {
      let state = _.clone(prevState);
      state = setUserAnswer(state, action.userAnswer);
      state = incrementLevel(state);
      return state;
    }
    
    case 'RESTART': {
      return question(initialState(), action.operator);
    }
    
    default: {
      return initialState();
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer

//-----------------------------------------------------------------------------//