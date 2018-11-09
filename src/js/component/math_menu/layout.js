//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    return (

      <div className="row">
        <div className="col-12">

          <div id="mathmenu-container">

            <div className="row">
              <div className="col-md-6 m-auto">
                <Link to='/game/add'>
                  <button className="btn btn-success btn-lg math-menu-button btn-block">
                    <span>Add</span>
                    <i className="fas fa-plus fa-lg"></i>
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">  
              <div className="col-md-6 m-auto">
                <Link to='/game/subtract'>
                  <button className="btn btn-info btn-lg math-menu-button btn-block">
                    <span>Subtract</span>
                    <i className="fas fa-minus fa-lg"></i>
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 m-auto">
                <Link to='/game/multiply'>
                  <button className="btn btn-warning btn-lg math-menu-button btn-block">
                    <span>Multiply</span>
                    <i className="fas fa-times fa-lg"></i>
                  </button>            
                </Link>
              </div>
            </div>

            <div className="row">  
              <div className="col-md-6 m-auto">
                <Link to='/game/divide'>
                  <button className="btn btn-danger btn-lg math-menu-button btn-block">
                    <span>Divide</span>
                    <i className="fas fa-divide fa-lg"></i>
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 m-auto">
                <div className="col-4">
                  <Link to='/setting'>
                    <button className="btn btn-outline-light btn-lg math-menu-setting">
                      <i className="fas fa-cogs fa-lg d-block"></i>
                    </button>
                    <span className="math-menu-setting-title">Settings</span>
                  </Link>
                </div>

              </div>
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
