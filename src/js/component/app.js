//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React   from 'react';
import Menu    from '../container/menu.js';
import Setting from '../container/setting.js';
import Game    from '../container/game.js';
import Summary from '../container/summary.js';
import Footer  from './footer/layout.js';
import Contact from './contact/layout.js';
import Rank    from './rank/layout.js';
import Share   from './share/layout.js';
import AD      from './ad/layout.js';
import { Route } from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {

  render(){
    return (
      <div>
        <Route exact path="/"     component={Menu} />
        <Route path="/game/:type" component={Game} />
        <Route path="/summary"    component={Summary} />
        <Route path="/contact"    component={Contact} />
        <Route path="/Setting"    component={Setting} />
        <Route path="/Rank"       component={Rank} />
        <Route path="/Share"      component={Share} />
        <Footer/>
      </div>
    );
  }
}


//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
