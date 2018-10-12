//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import Chance from 'chance';
//import Type   from 'lib/operand';

//-----------------------------------------------------------------------------//

var chance = new Chance();

function add(state, operator) {

  let operandA = 0;
  let operandB = 0;

  for(var i=0; i<10; i++){

    // Ensure the two operand are at least 4 numbers apart
    // to avoid an infinite loop when making a pool of numbers
    // for the inputs.

    do{
      operandA = chance.integer({ min: 1, max: 99 });
      operandB = chance.integer({ min: 1, max: 99 });
    }
    while(Math.abs(operandA - operandB) < 5)

    state.levels.push({
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA + operandB,
      userAnswer: null,
      operator:   operator
    })
  }

  return state;
}

function subtract(state, operator) {

  let operandA = 0;
  let operandB = 0;

  for(var i=0; i<10; i++){

    do{
      operandA = chance.integer({ min: 1, max: 99 });
      operandB = chance.integer({ min: 1, max: 99 });
    }
    while(Math.abs(operandA - operandB) < 5)

    state.levels.push({
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA - operandB,
      userAnswer: null,
      operator:   operator
    })
  }

  return state;
}

function multiply(state, operator) {

  let operandA = 0;
  let operandB = 0;

  for(var i=0; i<10; i++){

    do{
      operandA = chance.integer({ min: 1, max: 20 });
      operandB = chance.integer({ min: 1, max: 20 });
    }
    while(Math.abs(operandA - operandB) < 5)

    state.levels.push({
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA * operandB,
      userAnswer: null,
      operator:   operator
    })
  }

  return state;
}

function divide(state, operator) {
  let operandA = 0;
  let operandB = 0;
  let answer   = 0;

  for(var i=0; i<10; i++){

    do{
      answer   = chance.integer({ min: 1, max: 10 });
      operandA = chance.integer({ min: 1, max: 10 });
      operandB = answer * operandA;
    }
    while(answer < 5)

    state.levels.push({
      level:      i,
      operandA:   operandB,
      operandB:   operandA,
      answer:     answer,
      userAnswer: null,
      operator:   operator
    })
  }

  return state;
}

function populate(state, operator) {

  switch(operator){
    case 'add': {
      return add(state, operator);
    }
    case 'subtract': {
      return subtract(state, operator);
    }
    case 'multiply': {
      return multiply(state, operator);
    }
    case 'divide': {
      return divide(state, operator);
    }
    default: {
      return state;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default populate

//-----------------------------------------------------------------------------//