//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  render() {

    return (

      <div className="row">  
        <div className="col-md-6 col-center">
          <div className="row">  
  
            <div className="col-4">
                <Link to='/user'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-user-cog fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">User Settings</span>
                </Link>
            </div>
  
            <div className="col-4">
                <Link to='/rank'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-trophy fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">Rank</span>
                </Link>
            </div>

            <div className="col-4">
                <Link to='/store'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-store fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">Store</span>
                </Link>
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

export default Component;

//-----------------------------------------------------------------------------//
