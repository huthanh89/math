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
        <div className="col-lg-4 col-center">
          <div className="card bg-dark border-light text-center" id="contact-container">
            <div className="card-header border-light">
              <i className="far fa-fw fa-envelope mr-2"></i>
              <span>
                Contact Info
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <span className="d-block">
                    For any inquiries or questions:
                  </span>
                  <span className="mr-1">
                    Email:
                  </span>
                  <b>
                    developertth@gmail.com
                  </b>
                </div>
              </div>
              <hr></hr>
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
