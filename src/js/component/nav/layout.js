//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React from 'react';
import { Link } from 'react-router-dom'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <form className="form-inline">
              <Link to='/'>
                <button className="btn btn-outline-success" type="button">
                  <i className="fas fa-home fa-lg"></i>
                </button>
              </Link>
            </form>
          </ul>
        </div>
      </nav>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
