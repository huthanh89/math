//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React         from 'react';
import { render }      from 'react-dom';
import { createStore } from 'redux';
import { Provider }    from 'react-redux';
import   App           from './app.js';
import   reducer       from './reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//-----------------------------------------------------------------------------//

$( document ).ready(function() {

  const store = createStore(reducer)

  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
});

//-----------------------------------------------------------------------------//