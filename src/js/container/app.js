//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   App       from '../component/app.js';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    return state;
}

// Map dispatch actions that will available to the component.

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
)(App)

//-----------------------------------------------------------------------------//