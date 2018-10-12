//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $             from 'jquery'
import   React         from 'react';
import { render }      from 'react-dom';
import { createStore } from 'redux';
import { Provider }    from 'react-redux';
import   App           from './container/app.js';
import   reducer       from './reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//-----------------------------------------------------------------------------//

$( document ).ready(function() {

  console.log('test');

  const store = createStore(reducer)

  render(<span>render</span>, $('#root')[0]);

/*
  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    $('#root')[0]
  )
*/
});

//-----------------------------------------------------------------------------//