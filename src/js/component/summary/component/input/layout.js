//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    let mode = this.props.appReducer.mode;

    return (
      <div>
        <div className="row">
          <div className="col-md-5 m-auto">
            <Link to='/'>
              <button className="btn btn-outline-light btn-lg summary-button btn-block">
                <i className="fas fa-home fa-lg mb-2"></i>
                <span>Home</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 m-auto">
            <Link to={{
              pathname: `/game/${mode}`
            }}>
              <button className="btn btn-outline-light btn-lg summary-button btn-block">
                <i className="fas fa-sync-alt fa-lg"></i>
                <span>Restart</span>
              </button>
            </Link>
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
