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
        operator: function (operator){
            switch(operator){
                case 'subtract': {
                    return dispatch({ type: 'OPERATOR_SUBTRACT' })
                }
                case 'multiply': {
                    return dispatch({ type: 'OPERATOR_MULTIPLY' })
                }
                case 'divide': {
                    return dispatch({ type: 'OPERATOR_DIVIDE' })
                }
                default: {
                    return dispatch({ type: 'OPERATOR_ADD' })
                }
            }
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