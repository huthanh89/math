//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   Game      from '../component/game/layout';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    console.log(state);
    return state;
}

// Called once to map 'dispatch' to 'prop'.
// Dispatch will be called to change the state in the Reducer.

function mapDispatchToProps(dispatch) {
    return {
        actionRestart: function (operator){
            return dispatch({ 
                type: 'RESTART',
                operator: operator
            })
        },
        actionOperator: function (operator){
            return dispatch({ 
                type: 'OPERATOR',
                operator: operator
            })
        },
        actionAnswer: function (){
            return dispatch({ type: 'SET_ANSWER' })
        },
        actionSelect: function (userAnswer){
            return dispatch({ 
                type: 'USER_ANSWER',
                userAnswer: userAnswer
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