//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import Chance from 'chance';
import Type   from 'lib/operand';

//-----------------------------------------------------------------------------//

var chance = new Chance();

// Create the default game object.

const defaultGameObject = () => {
  
  let result = {
    levels:        [],
    timeCompleted: null,
    currentLevel:  0
  };

  let operandA = null;
  let operandB = null;

  for(var i=0; i<10; i++){

    operandA = chance.integer({ min: 1, max: 99 });
    operandB = chance.integer({ min: 1, max: 99 });

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
  state.currentLevel = state.currentLevel + 1;
  return;
}

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (state, action){
  switch (action.type){
    case 'OPERATOR': {
      setOperators(state, action.operator);
      setAnswers(state);
      return state;
    }
    case 'USER_ANSWER': {
      setUserAnswer(state, action.userAnswer);
      return state;
    }
    case 'RESTART': {
      state = defaultGameObject();
      setOperators(state, action.operator);
      setAnswers(state);
      return state;
    }
    default: {
      state = defaultGameObject();
      return state;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer

//-----------------------------------------------------------------------------//