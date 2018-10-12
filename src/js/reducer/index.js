//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import appReducer  from './app.js'
import gameReducer from './game.js'
import { combineReducers } from 'redux'

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

const rootReducer = combineReducers({
  appReducer,
  gameReducer
})

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default rootReducer

//-----------------------------------------------------------------------------//