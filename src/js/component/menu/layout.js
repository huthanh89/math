//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    return (
      <div>
        
        <div className="row">
          <div className="col-12">
            <p type="text" id="menu-title" > 
              Select a level to play
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Link to='game/add'>
              <button className="btn btn-outline-success btn-lg menu-button">
                <span>Add</span>
                <i className="fas fa-plus fa-lg"></i>
              </button>
            </Link>
          </div>
          <div className="col-12">
            <Link to='/game/subtract'>
              <button className="btn btn-outline-info btn-lg menu-button">
                <span>Subtract</span>
                <i className="fas fa-minus fa-lg"></i>
              </button>
            </Link>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <Link to='/game/multiply'>
              <button className="btn btn-outline-warning btn-lg menu-button">
                <span>Multiply</span>
                <i className="fas fa-times fa-lg"></i>
              </button>            
            </Link>
          </div>
          <div className="col-12">
            <Link to='/game/divide'>
              <button className="btn btn-outline-danger btn-lg menu-button">
                <span>Divide</span>
                <i className="fas fa-divide fa-lg"></i>
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
