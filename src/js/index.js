//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $             from 'jquery';
import   React         from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import   App           from './container/app.js';
import   reducer       from './reducer';
import   logger        from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import firebase  from 'firebase';

//-----------------------------------------------------------------------------//
// Project configuration
//-----------------------------------------------------------------------------//

const Production  = false;
const ReactLogger = false;

// Initialize Firebase

const FirebaseConfig = {
  apiKey:            "AIzaSyCCbhi5Aymg1Opo2sZ8pHzgBBsnm4Vhy4Y",
  authDomain:        "bigmonstar-firebase.firebaseapp.com",
  databaseURL:       "https://bigmonstar-firebase.firebaseio.com",
  projectId:         "bigmonstar-firebase",
  storageBucket:     "bigmonstar-firebase.appspot.com",
  messagingSenderId: "1028287159327"
};

//-----------------------------------------------------------------------------//

function initStore (){
  if(Production){
    return createStore(reducer);
  }
  else if(ReactLogger){
    return createStore(
      reducer,
      applyMiddleware(logger)
    );
  }
  else{
    return createStore(reducer);
  }
}

let app = firebase.initializeApp(FirebaseConfig);

//-----------------------------------------------------------------------------//

$( document ).ready(function() {
  render(
    <Provider store={initStore()}>
      <Router>
        <Route 
          path="/" 
          component={App} 
        />
      </Router>
    </Provider>,
    $('#root')[0]
  );
});

//-----------------------------------------------------------------------------//