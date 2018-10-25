//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import localStore from 'store';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      coin: this.getCoinCount(),
      reward: this.getReward()
    };
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

  getReward(){
    let reward = 0;
    this.props.levels.forEach(function(level){
      if(level.answer===level.userAnswer){
        reward += 1;
      }
    });
    return reward;
  }

  render() {
    return (
      <div>
        <div className="row mb-2">
          <div className="col-12">
            <div className="float-right">
              <i className="fas fa-coins mr-2 fa-lg"></i>
              <b id="menu-coin" >
                {this.state.coin + this.state.reward} 
              </b>
            </div>
            <div>
              <i className="fas fa-trophy mr-2 fa-lg"></i>
              <b id="menu-place" >
                1
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
