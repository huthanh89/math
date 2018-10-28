//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc   from 'accounting';
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getLockIcon(){

    if(this.props.creature.price > this.props.state.coin){
      return "fas fa-fw fa-lg fa-lock store-item text-secondary";
    }
    else{
      return "fas fa-fw fa-lg fa-check store-item text-success";
    }
  }

  render() {

    let creature = this.props.creature;

    return (
      <tr>
        <td>
          <img className="store-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>
        </td>
        <td>
          <span className="store-item">
            {creature.name}
          </span>
        </td>
        <td>
          <span className="store-item">
            {acc.format(creature.price)}
          </span>
        </td>
        <td>
          <i className={this.getLockIcon()}></i>
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
