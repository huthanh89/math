//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import Chance from 'chance';
import Type   from 'lib/operand';

//-----------------------------------------------------------------------------//

var chance = new Chance();

// Create the default game object.

const initialState = () => {
  
  let result = {
    levels:        [],
    timeCompleted: null,
    currentLevel:  0,
    gameCompleted: false
  };

  let operandA = null;
  let operandB = null;

  for(var i=0; i<10; i++){

    // Ensure the two operand are at least 4 numbers apart
    // to avoid an infinite loop when making a pool of numbers
    // for the inputs.

    do{
      operandA = chance.integer({ min: 1, max: 99 });
      operandB = chance.integer({ min: 1, max: 99 });
    }
    while(Math.abs(operandA - operandB) < 5)

    result.levels.push({
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     null,
      userAnswer: null,
      operator:   null
    })

  }
  return result;
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
      let state = _.clone(prevState);
      setOperators(state, action.operator);
      setAnswers(state);
      return _.clone(state);
    }
    
    case 'USER_ANSWER': {
      let state = _.clone(prevState);
      setUserAnswer(state, action.userAnswer);
      incrementLevel(state);
      return _.clone(state);
    }
    
    case 'RESTART': {
      let state = initialState();
      setOperators(state, action.operator);
      setAnswers(state);
      return state;
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