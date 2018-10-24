//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import appReducer  from './app/reducer.js';
import gameReducer from './game/reducer.js';
import { combineReducers } from 'redux';

//import reduceReducer from 'reduce-reducers'

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

const rootReducer = combineReducers({
  appReducer:  appReducer,
  gameReducer: gameReducer
});

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default rootReducer;

//-----------------------------------------------------------------------------//