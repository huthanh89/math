//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   Nav       from '../component/nav/layout.js';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    return state;
}

// Called once to map 'dispatch' to 'prop'.
// Dispatch will be called to change the state in the Reducer.

function mapDispatchToProps(dispatch) {
    return {
        actionUpdateInGame: function (flag){
            return dispatch({
                type: 'UPDATE_INGAME',
                flag: flag
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
)(Nav)

//-----------------------------------------------------------------------------//