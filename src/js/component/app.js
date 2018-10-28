//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React     from 'react';
import Menu      from '../container/menu.js';
import Setting   from '../container/setting.js';
import Game      from '../container/game.js';
import Summary   from '../container/summary.js';
import Store     from '../container/store.js';
import Footer    from './footer/layout.js';
import Contact   from './contact/layout.js';
import Rank      from './rank/layout.js';
import Share     from './share/layout.js';
import { Route } from "react-router-dom";
import localStore from 'store';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {

  constructor(props){
    super(props);
    props.actionSetCoin(this.getCoinCount());
  }

  // Get coins from local storage.

  getCoinCount (){

    let coin = localStore.get('coin');

    if(coin === undefined){
      localStore.set('coin', 0);
      coin = 0;
    }

    return coin;
  
  }

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
        <Route path="/Store"      component={Store} />
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
