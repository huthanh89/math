//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc   from 'accounting';
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  isLocked(){
    return this.props.creature.price > this.props.state.coin;
  }

  getLockIcon(){
    if(this.isLocked()){
      return "fas fa-fw fa-lg fa-lock store-item text-secondary";
    }
    else{
      return "fas fa-fw fa-lg fa-check store-item text-success";
    }
  }

  getItemClass(){
    if(this.isLocked()){
      return "store-avatar-image-lock";
    }
    else{
      return "store-avatar-image";
    }
  }

  render() {

    let creature = this.props.creature;

    return (
      <tr>
        <td>
          <img className={this.getItemClass()} src={`asset/${creature.src}`} alt="avatar"/>
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
