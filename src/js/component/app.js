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
    return (
      <div>
        <Route strict exact path="/" component={Menu} />
        <Route strict path="/game/:type" component={Game} />
        <Route strict path="/summary" component={Summary} />
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
