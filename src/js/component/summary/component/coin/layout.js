//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc   from 'accounting';
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      coin: props.state.coin
    };
  }

  // Gameplay coins

  getReward(){
    let reward = 0;
    this.props.state.levels.forEach(function(level){
      if(level.correct){
        reward += level.reward;
      }
    });
    return reward;
  }

  getTotalCoin(){
    let reward = this.getReward();
    let loot   = this.props.state.loot;
    return reward + loot;
  }

  render() {
    return (
      <div>
        <div className="row mb-2">
          <div className="col-12">
            <div className="float-right">
              <i className="fas fa-coins mr-2 fa-lg"></i>
              <b id="menu-coin" >
                {acc.format(this.state.coin + this.getTotalCoin())} 
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
