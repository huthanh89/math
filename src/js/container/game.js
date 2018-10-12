//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash'
import { connect } from 'react-redux';
import   Game      from '../component/game/layout.js';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
//    return _.merge(state.gameReducer, state.appReducer);
    return state;
}

// Map dispatch actions that will available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionSetMode: function (mode){
            return dispatch({
                type: 'SET_MODE',
                mode:  mode
            })
        },
        actionUpdateInGame: function (flag){
            return dispatch({
                type: 'UPDATE_INGAME',
                flag:  flag
            })
        },
        actionRestart: function (operator){
            return dispatch({ 
                type:    'RESTART',
                operator: operator
            })
        },
        actionSelect: function (userAnswer){
            return dispatch({ 
                type: 'USER_ANSWER',
                userAnswer: userAnswer
            })
        },
        actionStartTime: function (level, time){
            return dispatch({ 
                type: 'SET_STARTTIME',
                level: level,
                time:  time
            })
        },
        actionEndTime: function (level, time){
            return dispatch({ 
                type: 'SET_ENDTIME',
                level: level,
                time:  time
            })
        }
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

//-----------------------------------------------------------------------------//