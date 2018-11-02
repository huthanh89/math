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
    this.clickedSell = this.clickedSell.bind(this);
    this.creature = _.find(Creatures, function(creature){
      return creature.id === props.monster.typeID;
    });

  }

  clickedSell(){
    this.props.buyItem(this.props.monster);
  }

  render() {

    let creature = this.creature;

    return (
      <tr>
        <td>
          <img className="store-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>
        </td>
        <td>
          <span className="store-item">
            1
          </span>
        </td>
        <td>
          <span className="store-item">
            {creature.name}
          </span>
        </td>
        <td>
          <span className="store-item">
            {acc.format(creature.price / 2)}
          </span>
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
