//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    props.actionRestart();
  }

  render() {

    return (
      <div id="menu-button-container">
        
        <div className="row">
          <div className="col-12">
            <p type="text" id="menu-title" > 
              Select a level to play
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 m-auto">
            <Link to='/game/add'>
              <button className="btn btn-outline-success btn-lg menu-button btn-block">
                <span>Add</span>
                <i className="fas fa-plus fa-lg"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="row">  
          <div className="col-md-5 m-auto">
            <Link to='/game/subtract'>
              <button className="btn btn-outline-info btn-lg menu-button btn-block">
                <span>Subtract</span>
                <i className="fas fa-minus fa-lg"></i>
              </button>
            </Link>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-5 m-auto">
            <Link to='/game/multiply'>
              <button className="btn btn-outline-warning btn-lg menu-button btn-block">
                <span>Multiply</span>
                <i className="fas fa-times fa-lg"></i>
              </button>            
            </Link>
          </div>
        </div>

        <div className="row">  
          <div className="col-md-5 m-auto">
            <Link to='/game/divide'>
              <button className="btn btn-outline-danger btn-lg menu-button btn-block">
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
