//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React   from 'react';
import Menu    from './menu/layout.js';
import Game    from '../container/game.js';
import Summary from '../container/summary.js';
import { Route } from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {

  render(){

    console.log('app level');
    return (
      <button>
        some text
      </button>
    );
    return (
      <div>
        <Route exact path="" component={Menu} />
        <Route exact path="/" component={Menu} />
        <Route path="/game/:type" component={Game} />
        <Route path="/summary" component={Summary} />
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
