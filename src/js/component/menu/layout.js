//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';
import   Coin   from './coin/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.clickedShare = this.clickedShare.bind(this);
    props.actionRestart();
  }
  
  clickedShare(){
    let link = 'https://www.facebook.com/sharer/sharer.php?u=http%3A//cloudresume.net/mathtingz/';
    window.open(
      link,
      '_blank'
    );
  }

  render() {

    return (
      <div id="menu-container">
        
        <Coin/>

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
                <button className="btn btn-outline-light btn-lg menu-setting-button" onClick={this.clickedShare}>
                  <i className="fas fa-share fa-lg d-block"></i>
                </button>
                <span className="menu-setting-title">Share</span>
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
