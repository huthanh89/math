//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import axios           from 'axios';
import uniqid          from 'uniqid';
import localStore      from 'store';
import React           from 'react';
import Menu            from '../container/menu.js';
import MathMenu        from './math_menu/layout.js';
import Sell            from '../container/sell.js';
import Pool            from '../container/pool.js';
import Setting         from '../container/setting.js';
import User            from '../container/user.js';
import Visit           from '../container/visit.js';
import Feed            from '../container/feed.js';
import Game            from '../container/game.js';
import Summary         from '../container/summary.js';
import Store           from '../container/store.js';
import Footer          from './footer/layout.js';
import Contact         from './contact/layout.js';
import Rank            from '../container/rank.js';
import Loot            from '../container/loot.js';
import AdsenseFullView from './adsense_fullview/layout.js';
import { Route }       from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {

  constructor(props){
    super(props);
    this.getUser(props);
  }

  setUserState(user){
    this.props.actionInitialUser({
      userID:         user._id,
      username:       user.username,
      email:          user.email,
      coin:           user.coin,
      storeCoin:      user.storeCoin,
      gameDifficulty: user.gameDifficulty,
      rank:           user.rank,
      monsters:       user.monsters
    });
  }

  setupNewUser(props){

    let username = uniqid('user_');
    let view     = this;

    // Post a new user.
    
    axios.post('/api/user', {
      username: username
    })
    .then(function(response){
      let user = response.data;
      localStore.set('userID', user._id);
      view.setUserState(user);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  fetchUser(userID, props){
    
    let view = this;

    axios.get('/api/user', {
      params: {
        userID: userID
      }
    })
    .then(function(response){
      let user = response.data;
      view.setUserState(user);
    })
    .catch(function () {
      view.setupNewUser(props);
    });
  }

  getUser (props){
    let userID = localStore.get('userID');
    if(userID === undefined){
      this.setupNewUser(props);
    }else{
      this.fetchUser(userID, props);
    }
  }

  render(){
    return (
      <div>
        <Route exact path="/"     component={Menu} />
        <Route path="/game/:type" component={Game} />
        <Route path="/sell/:id"   component={Sell} />
        <Route path="/visit/:id"  component={Visit} />
        <Route path="/feed/:id"   component={Feed} />
        <Route path="/summary"    component={Summary} />
        <Route path="/contact"    component={Contact} />
        <Route path="/setting"    component={Setting} />
        <Route path="/user"       component={User} />
        <Route path="/rank"       component={Rank} />
        <Route path="/store"      component={Store} />
        <Route path="/adfullview" component={AdsenseFullView} />
        <Route path="/loot"       component={Loot} />
        <Route path="/pool"       component={Pool} />
        <Route path="/mathmenu"   component={MathMenu} />
      </div>
    );
  }
}


//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
