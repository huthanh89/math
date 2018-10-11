//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import Nav   from './component/nav/layout.js';
import Menu  from './component/menu/layout.js';
import Game  from './container/game.js';
import Summary from './component/summary/layout.js';
import { Route } from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav/>
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
