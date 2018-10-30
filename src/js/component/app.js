//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import axios           from 'axios';
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
    this.getUser(props);
  }

  setupNewUser(props){

    let username = uniqid('user_');

    // Post a new user.
    
    axios.post('/api/user', {
      username: username
    })
    .then(function(response){

      let user = response.data;
      localStore.set('userID', user._id);

      props.actionInitialUser({
        userID:     user._id,
        username:   user.username,
        coin:       0,
        difficulty: 0,
        rank:       0
      });

    })
    .catch(function (error) {
      console.log(error);
    });

  }

  fetchUser(userID, props){
    axios.get('/api/user', {
      params: {
        userID: userID
      }
    })
    .then(function(response){
      let user = response.data;
      props.actionInitialUser({
        userID:     user._id,
        username:   user.username,
        coin:       user.coin,
        difficulty: user.difficulty,
        rank:       user.rank

      });
    })
    .catch(function (error) {
      console.log(error);
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
