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
    username:    null,
    userID:      null,
    coin:        0,
    rank:        0,
    inGame:      false,
    mode:        null
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){

    case 'SET_INITIAL_USER': {
      let state        = prevState;
      let user         = action.user;
      state.username   = user.username;
      state.userID     = user.userID;
      state.coin       = user.coin;
      state.difficulty = user.difficulty;
      state.rank       = user.rank;
      return _.clone(state);
    }

    case 'SET_USERNAME': {
      let state      = prevState;
      state.username = action.username;
      return _.clone(state);
    }

    case 'SET_USERID': {
      let state  = prevState;
      state.userID = action.userID;
      return _.clone(state);
    }

    case 'SET_COIN': {
      let state  = prevState;
      state.coin = action.coin;
      return _.clone(state);
    }
    
    case 'SET_RANK': {
      let state  = prevState;
      state.rank = action.rank;
      return _.clone(state);
    }

    case 'AMAZON_MODAL': {
      let state  = prevState;
      state.amazonModal = action.flag;
      return _.clone(state);
    }

    case 'SET_MODE': {
      let state  = prevState;
      state.mode = action.mode;
      return _.clone(state);
    }

    case 'SHOW_AD': {
      let state       = prevState;
      state.advertise = action.flag;
      return _.clone(state);
    }

    case 'UPDATE_INGAME': {
      let state = prevState;
      state.inGame = action.flag;
      return _.clone(state);
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