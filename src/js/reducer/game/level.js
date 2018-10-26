//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import Chance from 'chance';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

var chance = new Chance();

const levelModel = () => {
  return {
    level:      null,
    operandA:   null,
    operandB:   null,
    answer:     null,
    userAnswer: null,
    operator:   null,
    startTime:  null,
    endTime:    null,
    reward:     null,
    correct:    null
  };
};

//-----------------------------------------------------------------------------//
// Add
//-----------------------------------------------------------------------------//

function add(state, operator) {

  let operandA = 0;
  let operandB = 0;
  let i =        0;
  let min =      0;
  let max =      0;

  switch(state.difficulty){
    case 1: {
      min = 50;
      max = 100;
      break;
    }
    case 2: {
      min = 100;
      max = 1000;
      break;
    }
    default:{
      min = 1;
      max = 50;
    }
  }

  for(i; i<10; i++){

    // Ensure the two operand are at least 4 numbers apart
    // to avoid an infinite loop when making a pool of numbers
    // for the inputs.

    do{
      operandA = chance.integer({ min: min, max: max });
      operandB = chance.integer({ min: min, max: max });
    }
    while(Math.abs(operandA - operandB) < 5);

    let level = _.assign(levelModel(), {
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA + operandB,
      operator:   operator,
    });

    state.levels.push(level);
  }

  return state;
}

//-----------------------------------------------------------------------------//
// Subtract
//-----------------------------------------------------------------------------//

function subtract(state, operator) {

  let operandA = 0;
  let operandB = 0;
  let i =        0;
  let min =      0;
  let max =      0;

  switch(state.difficulty){
    case 1: {
      min = 50;
      max = 100;
      break;
    }
    case 2: {
      min = 100;
      max = 1000;
      break;
    }
    default:{
      min = 1;
      max = 30;
    }
  }

  for(i; i<10; i++){

    do{
      operandA = chance.integer({ min: min, max: max });
      operandB = chance.integer({ min: min, max: max });

      if(operandA < operandB){
        let temp = operandA;
        operandA = operandB;
        operandB = temp;
      }

    }
    while(Math.abs(operandA - operandB) < 5);

    let level = _.assign(levelModel(), {
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA + operandB,
      operator:   operator
    });

    state.levels.push(level);
  }

  return state;
}

//-----------------------------------------------------------------------------//
// Multiply
//-----------------------------------------------------------------------------//

function multiply(state, operator) {

  let operandA = 0;
  let operandB = 0;
  let i =        0;
  let min =      0;
  let max =      0;

  switch(state.difficulty){
    case 1: {
      min = 1;
      max = 30;
      break;
    }
    case 2: {
      min = 10;
      max = 100;
      break;
    }
    default:{
      min = 1;
      max = 12;
    }
  }

  for(i; i<10; i++){

    do{
      operandA = chance.integer({ min: min, max: max });
      operandB = chance.integer({ min: min, max: max });
    }
    while(Math.abs(operandA - operandB) < 5);

    let level = _.assign(levelModel(), {
      level:      i,
      operandA:   operandA,
      operandB:   operandB,
      answer:     operandA * operandB,
      operator:   operator
    });

    state.levels.push(level);
  }

  return state;
}

//-----------------------------------------------------------------------------//
// Divide
//-----------------------------------------------------------------------------//

function divide(state, operator) {
  let operandA = 0;
  let operandB = 0;
  let answer   = 0;
  let i        = 0;
  let min      = 0;
  let max      = 0;

  switch(state.difficulty){
    case 1: {
      min = 5;
      max = 25;
      break;
    }
    case 2: {
      min = 10;
      max = 100;
      break;
    }
    default:{
      min = 1;
      max = 10;
    }
  }

  for(i; i<10; i++){

    do{
      answer   = chance.integer({ min: min, max: max });
      operandA = chance.integer({ min: min, max: max });
      operandB = answer * operandA;
    }
    while(answer < 5);

    let level = _.assign(levelModel(), {
      level:      i,
      operandA:   operandB,
      operandB:   operandA,
      answer:     answer,
      operator:   operator
    });

    state.levels.push(level);
  }

  return state;
}

//-----------------------------------------------------------------------------//
// Switch
//-----------------------------------------------------------------------------//

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

export default populate;

//-----------------------------------------------------------------------------//