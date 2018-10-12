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

// Called once to map 'dispatch' to 'prop'.
// Dispatch will be called to change the state in the Reducer.

function mapDispatchToProps(dispatch) {
    return {
        actionGameCompleted: function (){
            return dispatch({
                type: 'COMPLETE'
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
)(Summary)

//-----------------------------------------------------------------------------//