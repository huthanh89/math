//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import { connect } from 'react-redux';
import   Game      from '../component/game/layout';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.

function mapStateToProps(state) {
    return state;
}
  
// Called once to map 'dispatch' to 'prop'.
// Dispatch will be called to change the state.

function mapDispatchToProps(dispatch) {
    return {
        answer: function (){
            return dispatch({
                type: 'GAME_ANSWER'
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