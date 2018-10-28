//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    let avatar = this.props.avatar;

    return (
      <tr>
        <td>
          <img className="store-avatar-image" src={`asset/avatar_${avatar}`} alt="avatar"/>
        </td>
        <td>
          <span className="mt-2">
            {this.props.name}
          </span>
        </td>
        <td>
          <span className="mt-2">
            {this.props.price}
          </span>
        </td>
        <td>
          <button className="btn btn-primary btn-sm mt-2">
            <i className="fas fa-fw fa-lock mr-1"></i>
            <span>
              Unlock
            </span>
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
