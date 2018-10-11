//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import Chance from 'chance';
import Type   from 'lib/operand';

//-----------------------------------------------------------------------------//

var chance = new Chance();

const createOperand = () => {
  return chance.integer({ min: 0, max: 99 });
}

const createGameObject = () => {
  
  let result = {
    operator:      null,
    levels:        [],
    timeCompleted: null,
    currentLevel:  0
  };

  let operandA = null;
  let operandB = null;

  for(var i=0; i<10; i++){

    operandA = createOperand();
    operandB = createOperand();

    result.levels.push({
      level:      i,
      complete:   0,
      operandA:   operandA,
      operandB:   operandB,
      answer:     null,
      userAnswer: null
    })

  }
  return result;
}

function updateOperator(state, operator) {
  let level      = state.levels[state.currentLevel];
  level.operator = operator;
  level.answer   = _.round(Type[operator].calculate(level.operandA, level.operandB), 2)
  state.level    = level
  return state
}

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (state, action){
  switch (action.type){
    case 'OPERATOR_ADD': {
      return updateOperator(state, 'add');
    }
    case 'OPERATOR_SUBTRACT': {
      return updateOperator(state, 'subtract');
    }
    case 'OPERATOR_MULTIPLY': {
      return updateOperator(state, 'multiply');
    }
    case 'OPERATOR_DIVIDE': {
      return updateOperator(state, 'divide');
    }
    default: {
      return createGameObject();
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer

//-----------------------------------------------------------------------------//