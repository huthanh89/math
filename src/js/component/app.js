//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import uniqid          from 'uniqid';
import localStore      from 'store';
import React           from 'react';
import Menu            from '../container/menu.js';
import Setting         from '../container/setting.js';
import Game            from '../container/game.js';
import Summary         from '../container/summary.js';
import Store           from '../container/store.js';
import Footer          from './footer/layout.js';
import Contact         from './contact/layout.js';
import Rank            from '../container/rank.js';
import Share           from './share/layout.js';
import Loot            from '../container/loot.js';
import AdsenseFullView from './adsense_fullview/layout.js';
import { Route }       from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {

  constructor(props){
    super(props);
    props.actionSetUser(this.updateUser());
    props.actionSetCoin(this.updateCoin());
  }

  componentWillUpdate(){
    this.props.actionSetUser(this.updateUser());
    this.props.actionSetCoin(this.updateCoin());
  }

  updateUser (){
    let user = localStore.get('user');
    if(user === undefined){
      user = uniqid('user_');
      localStore.set('user', user);
    }
    return user;
  }

  updateCoin (){
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
        <Route path="/adfullview" component={AdsenseFullView} />
        <Route path="/loot"       component={Loot} />
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
