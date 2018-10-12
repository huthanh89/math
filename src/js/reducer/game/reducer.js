//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _        from 'lodash';
import Type     from 'lib/operand';
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

// Update answers for all levels.

function setAnswers(state) {
  let levels = state.levels;
  _.forEach(levels, function(level) {
    level.answer = _.round(Type[level.operator].calculate(level.operandA, level.operandB), 2);
  });
  return;
}

// Update operators for all levels.

function setOperators(state, operator) {
  let levels = state.levels;
  _.forEach(levels, function(level) {
    level.operator = operator;
  });
  return;
}

// Set user's answer

function setUserAnswer(state, userAnswer) {
  let level = state.levels[state.currentLevel];
  level.userAnswer = userAnswer;
  state.levels[state.currentLeve] = level;
  return;
}

// Set increment level

function incrementLevel(state) {
  
  state.currentLevel = state.currentLevel + 1;
  if(state.currentLevel == 10){
    state.gameCompleted = true;
  }
  return;
}

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState, action){

  switch (action.type){
    
    case 'SET_QUESTIONS': {
      return question(_.clone(prevState), action.operator);
    }
    
    case 'USER_ANSWER': {
      let state = _.clone(prevState);
      setUserAnswer(state, action.userAnswer);
      incrementLevel(state);
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