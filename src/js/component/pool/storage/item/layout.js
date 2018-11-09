//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _         from 'lodash';
import acc       from 'accounting';
import React     from 'react';
import Creatures from 'lib/creature.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.creature   = _.find(Creatures, function(creature){
      return creature.id === props.monster.typeID;
    });

  }

  selectItem(){
    let id = this.props.monster.monsterID;
    this.props.history.push(`/feed/${id}`);
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
            {acc.format(monster.reward)}
          </span>
        </td>
        <td>
          <button className="btn btn-sm btn-info store-item" onClick={this.selectItem}>
            Feed
          </button>
        </td>
      </tr>
      
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
