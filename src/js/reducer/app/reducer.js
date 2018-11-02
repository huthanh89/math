//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    amazonModal:    false,
    username:       null,
    email:          null,
    userID:         null,
    coin:           0,
    storeCoin:      0,
    rank:           0,
    inGame:         false,
    mode:           null,
    gameDifficulty: 0,
    message:        0,
    monsters:       []
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){

    case 'SET_INITIAL_USER': {
      let state            = prevState;
      let user             = action.user;
      state.username       = user.username;
      state.email          = user.email;
      state.userID         = user.userID;
      state.coin           = user.coin;
      state.storeCoin      = user.storeCoin;
      state.rank           = user.rank;
      state.gameDifficulty = user.gameDifficulty;
      state.monsters       = user.monsters;
      return _.clone(state);
    }

    case 'SET_MESSAGE': {
      let state     = prevState;
      state.message = action.messages;
      return _.clone(state);
    }

    case 'SET_USERNAME': {
      let state      = prevState;
      state.username = action.username;
      return _.clone(state);
    }

    case 'SET_EMAIL': {
      let state   = prevState;
      state.email = action.email;
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

    case 'SET_STORE_COIN': {
      let state       = prevState;
      state.storeCoin = action.storeCoin;
      return _.clone(state);
    }

    case 'ADD_MONSTER': {
      let state = prevState;
      let data = action.data;

      state.monsters.push({
        monsterID: data.monsterID,
        typeID:    data.typeID,
        level:     data.level,
        exp:       data.exp,
        feed:      data.feed,
        bonus:     data.bonus
      });
      return _.clone(state);
    }

    case 'SET_GAME_DIFFICULTY': {
      let state            = prevState;
      state.gameDifficulty = action.gameDifficulty;
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