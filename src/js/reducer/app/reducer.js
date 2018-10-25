//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    difficulty: 0,
    coin:       0,
    rank:       0,
    inGame:     false,
    mode:       null
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){

    case 'SET_MODE': {
      let state  = prevState;
      state.mode = action.mode;
      return state;
    }

    case 'SET_DIFFICULTY': {
      let state        = prevState;
      state.difficulty = action.difficulty;
      return state;
    }

    case 'UPDATE_INGAME': {
      let state = prevState;
      state.inGame = action.flag;
      return state;
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