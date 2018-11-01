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
        actionSetGameCompleted: function (flag){
            return dispatch({
                type: 'SET_GAME_COMPLETED',
                flag:  flag
            });
        },
        actionSetCoin: function (coin){
            return dispatch({
                type: 'SET_COIN',
                coin:  coin
            });
        },
        actionSetRank: function (rank){
            return dispatch({
                type: 'SET_RANK',
                rank:  rank
            });
        },
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
        },
        actionSetStoreCoin: function (storeCoin){
            return dispatch({
                type:     'SET_STORE_COIN',
                storeCoin: storeCoin
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