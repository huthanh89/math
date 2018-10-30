//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Creatures from 'lib/creature.js';
import React     from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getCreature(){
    let view   = this;
    let result = Creatures[0];
    Creatures.forEach(function(creature){
      if(creature.price < view.props.state.coin){
        result = creature;
      }

    });
    return result;
  }

  render() {

    let creature = this.getCreature();

    return (
      <div className="row">
        <div className="col-12" id="menu-user-container">
          
          <img id="menu-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>

          <div className="d-inline-block">
            <i className="fas fa-fw fa-trophy mr-2 fa-lg"></i>
            <b>
              {this.props.state.rank}
            </b>
            <b className="d-block mt-2">
              {this.props.state.username}
            </b>
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
