//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import Nav   from './component/nav/layout.js';
import Home  from './container/home.js';
import Menu  from './component/menu/layout.js';
import Game  from './component/game/layout.js';
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
        <Route path="/home" component={Home} />
        <Route path="/game/:type" component={Game} />
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
