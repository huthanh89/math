//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    amazonModal: false,
    coin:        0,
    rank:        0,
    inGame:      false,
    mode:        null,
    advertise:   false
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){

    case 'AMAZON_MODAL': {
      let state  = prevState;
      state.amazonModal = action.flag;
      return state;
    }

    case 'SET_MODE': {
      let state  = prevState;
      state.mode = action.mode;
      return state;
    }

    case 'SHOW_AD': {
      let state       = prevState;
      state.advertise = action.flag;
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