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
        <div className="row mb-2">
          <div className="col-12">
            <div className="float-right">
              <div className="d-block mb-2">
                <i className="fas fa-fw fa-medal mr-2 fa-lg"></i>
                <b id="menu-coin" >
                  {acc.format(this.props.state.coin)} 
                </b>
              </div>
              <div className="d-block">
                <i className="fas fa-fw fa-coins mr-2 fa-lg"></i>
                <b id="menu-coin" >
                  {acc.format(this.props.state.storeCoin)} 
                </b>
              </div>
            </div>

            <div>
              <i className="fas fa-trophy mr-2 fa-lg"></i>
              <b id="menu-place" >
                {this.props.state.rank}
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
