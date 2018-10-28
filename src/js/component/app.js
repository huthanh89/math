//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React     from 'react';
import Menu      from '../container/menu.js';
import Setting   from '../container/setting.js';
import Game      from '../container/game.js';
import Summary   from '../container/summary.js';
import Footer    from './footer/layout.js';
import Contact   from './contact/layout.js';
import Rank      from './rank/layout.js';
import Rank2     from './rank.OLD/layout.js';
import Store     from './store/layout.js';
import Store2    from './store.OLD/layout.js';
import Share     from './share/layout.js';
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
        <Route path="/Rank2"      component={Rank2} />
        <Route path="/Share"      component={Share} />
        <Route path="/Store"      component={Store} />
        <Route path="/Store2"     component={Store2} />
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
