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
          <div className="card" id="contact-container">
            
            <div className="card-header">
              Settings
            </div>

            <div className="card-body">

              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Easy
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Medium
                </label>
              </div>
              <div className="form-check disabled">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Hard
                </label>
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
