//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   User      from '../component/user/layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.
// Note: We call clone because if there are changes in an array
// update will not be called.

function mapStateToProps(state) {
    var result =_.merge(state.appReducer, state.gameReducer);
    return {
        state: _.clone(result)
    };
}

// Map dispatch actions that will available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionSetUserName: function (username){
            return dispatch({
                type:     'SET_USERNAME',
                username:  username
            });
        },
        actionSetEmail: function (email){
            return dispatch({
                type:  'SET_EMAIL',
                email:  email
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
)(User);

//-----------------------------------------------------------------------------//