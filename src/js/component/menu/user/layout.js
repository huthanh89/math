//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Creatures from 'lib/creature.js';
import   React     from 'react';
import { Link }    from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getCreature(){
    let view   = this;
    let result = Creatures[0];
    Creatures.forEach(function(creature){
      if(creature.price < view.props.coin){
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
          <Link to='/user'>
            <img id="menu-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>

            <div className="d-inline-block text-white">
              <i className="fas fa-fw fa-trophy mr-2 fa-lg"></i>
              <b>
                {this.props.rank}
              </b>
              <b className="d-block mt-2">
                {this.props.username}
              </b>
            </div>
          </Link>
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
