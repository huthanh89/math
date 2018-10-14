//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   Summary   from '../component/summary/layout.js';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    return state;
}

// Map dispatch actions that will available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionUpdateInGame: function (flag){
            return dispatch({
                type: 'UPDATE_INGAME',
                flag:  flag
            });
        },
        actionRestart: function (operator){
            return dispatch({ 
                type:    'RESTART',
                operator: operator
            });
        }
    };
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary);

//-----------------------------------------------------------------------------//