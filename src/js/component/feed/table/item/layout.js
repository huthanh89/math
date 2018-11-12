//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _         from 'lodash';
import acc       from 'accounting';
import React     from 'react';
import PropTypes from 'prop-types';
import Creatures from 'lib/creature.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(props){
    super(props);
    this.clickedFeed = this.clickedFeed.bind(this);
    this.creature    = _.find(Creatures, function(creature){
      return creature.id === props.monster.typeID;
    });
  }

  clickedFeed(){
    this.props.feedItem(this.props.monster);
  }

  render() {

    let creature = this.creature;
    let monster  = this.props.monster;

    return (
      <tr>
        <td>
          <img className="store-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>
        </td>
        <td>
          <span className="store-item">
            {Math.floor(monster.level)}
          </span>
        </td>
        <td>
          <span className="store-item">
            {acc.format(monster.level * monster.feed)}
          </span>
        </td>
        <td>
          <button className="btn btn-sm btn-danger store-item" onClick={this.clickedFeed}>
            Select
          </button>
        </td>
      </tr>
      
    );
  }
}

Component.propTypes = {
  monster: PropTypes.object.isRequired,
};

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
