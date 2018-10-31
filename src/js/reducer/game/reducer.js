//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _     from 'lodash';
import Level from './level.js';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

// Create the default game object.

const initialState = _ => {
  return {
    loot:          0,
    difficulty:    0,
    levels:        [],
    timeCompleted: null,
    currentLevel:  0,
    gameCompleted: false
  };
};

const Reward = [
  {
    difficulty: 0,
    rewardPer:  100,
    comboX:     3
  },
  {
    difficulty: 1,
    rewardPer:  200,
    comboX:     4
  },
  {
    difficulty: 2,
    rewardPer:  300,
    comboX:     5
  }
];

//-----------------------------------------------------------------------------//

// Set user's answer

function setUserAnswer(state, userAnswer) {
  let level = state.levels[state.currentLevel];
  level.userAnswer = userAnswer;
  level.correct = level.answer===level.userAnswer? true:false;
  state.levels[state.currentLevel] = level;
  return state;
}

// Set increment level

function incrementLevel(state) {
  state.currentLevel = state.currentLevel + 1;
  return state;
}

// Set start time of the level.

function setStartTime(state, level, time) {
  state.levels[level].startTime = time;
  return state;
}

// Set end time of the level.

function setEndTime(state, level, time) {
  state.levels[level].endTime = time;
  return state;
}

// Set reward of the level.

function setReward(state) {

  let currentLevel = state.currentLevel;
  let difficulty   = state.difficulty;
  let reward       = Reward[difficulty];
  let levels       = state.levels;

  if(currentLevel===0){
    levels[0].reward = reward.rewardPer;
  }
  else if(currentLevel < 10){
    let prevLevel = levels[currentLevel - 1];
    if(prevLevel.correct){
      levels[currentLevel].reward = prevLevel.reward * reward.comboX;
    }
    else{
      levels[currentLevel].reward = reward.rewardPer;
    }
  }

  state.levels = levels;
  return state;
}

// Set level difficulty

function setDifficulty(state, difficulty) {
  state.difficulty = difficulty;
  return state;
}

function setGameCompleted(state, gameCompleted) {
  state.gameCompleted = gameCompleted;
  return state;
}

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){
    
    case 'SET_GAME_COMPLETED': {
      let state = prevState;
      state     = setGameCompleted(state, action.flag);
      return _.clone(state);
    }

    case 'SET_DIFFICULTY': {
      let state        = prevState;
      state = setDifficulty(state, action.difficulty);
      return _.clone(state);
    }

    case 'SET_LOOT': {
      let state  = prevState;
      state.loot = action.loot;
      return _.clone(state);
    }

    case 'SET_REWARD': {
      return setReward(prevState, action.level, action.reward);
    }
    
    case 'SET_STARTTIME': {
      return setStartTime(prevState, action.level, action.time);
    }
    
    case 'SET_ENDTIME': {
      return setEndTime(prevState, action.level, action.time);
    }
    
    case 'SET_QUESTIONS': {
      return Level(_.clone(prevState), action.operator);
    }
    
    case 'USER_ANSWER': {
      let state = _.clone(prevState);
      state = setUserAnswer(state, action.userAnswer);
      state = incrementLevel(state);
      state = setReward(state);
      return _.clone(state);
    }
    
    case 'RESTART': {
      let state = initialState();
      state = setDifficulty(state, action.difficulty);
      state = Level(state, action.operator);
      if(state.levels.length){
        setReward(state);
      }
      return _.clone(state);;
    }
    
    default: {
      return prevState;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer;

//-----------------------------------------------------------------------------//