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

        <div className="row">  

          <div className="col-sm-6 col-center">

            <div className="row">
              <div className="col-4">
                  <Link to='/setting'>
                    <button className="btn btn-outline-light btn-lg menu-setting-button">
                      <i className="fas fa-cogs fa-lg d-block"></i>
                    </button>
                    <span className="menu-setting-title">Settings</span>
                  </Link>
              </div>

              <div className="col-4">
                  <Link to='/rank'>
                    <button className="btn btn-outline-light btn-lg menu-setting-button">
                      <i className="fas fa-medal fa-lg d-block"></i>
                    </button>
                    <span className="menu-setting-title">Rank</span>
                  </Link>
              </div>

              <div className="col-4">
                  <Link to='/share'>
                    <button className="btn btn-outline-light btn-lg menu-setting-button">
                      <i className="fas fa-share fa-lg d-block"></i>
                    </button>
                    <span className="menu-setting-title">Share</span>
                  </Link>
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
