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
      <div className="row text-dark">
        <div className="col-lg-4 col-center">
          <div className="card" id="contact-container">
            <div className="card-header">
              Ranking
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  Work in progress...
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Link to='/'>
                    <button className="btn btn-info mt-2 float-right">
                      <i className="fas fa-arrow-left"></i>
                      <span> Back </span>
                    </button>
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
