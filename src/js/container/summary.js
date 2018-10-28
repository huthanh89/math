//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   Summary   from '../component/summary/layout.js';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    var result =_.merge(state.appReducer, state.gameReducer);
    return {
        state: _.clone(result)
    };
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
        actionRestart: function (operator, difficulty){
            return dispatch({ 
                type:      'RESTART',
                operator:   operator,
                difficulty: difficulty,
            });
        },
        actionAmazonModal: function (flag){
            return dispatch({
                type: 'AMAZON_MODAL',
                flag:  flag,
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