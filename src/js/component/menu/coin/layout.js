//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc   from 'accounting';
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    return (
      <div>
        <div className="float-right">
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-medal mr-2 fa-lg"></i>
              <b>
                {acc.format(this.props.state.coin)}
              </b>
            </div>
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-coins mr-2 fa-lg"></i>
              <b>
                {acc.format(this.props.state.storeCoin)}
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
