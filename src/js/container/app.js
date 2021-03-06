//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   App       from '../component/app.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// The state arguments will be passed in from the Reducer.
// Return which state property to get updated by the component.
// Note: We call clone because if there are changes in an array
// update will not be called.

function mapStateToProps(state) {
    let result = _.merge(state.appReducer, state.gameReducer);
    return _.clone(result);
}

// Map dispatch actions that will available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionMessage: function (message){
            return dispatch({
                type:   'SET_MESSAGE',
                message: message
            });
        },
        actionInitialUser: function (user){
            return dispatch({
                type: 'SET_INITIAL_USER',
                user:  user
            });
        },
        actionSetUserID: function (userID){
            return dispatch({
                type:  'SET_USERID',
                userID: userID
            });
        },
        actionSetUserName: function (username){
            return dispatch({
                type:     'SET_USERNAME',
                username:  username
            });
        },
        actionSetCoin: function (coin){
            return dispatch({
                type: 'SET_COIN',
                coin:  coin
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
)(App);

//-----------------------------------------------------------------------------//