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

//-----------------------------------------------------------------------------//

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

//-----------------------------------------------------------------------------//

$( document ).ready(function() {
  render(
    <Provider store={store}>
      <Router basename={'/mathtingz/'}>
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