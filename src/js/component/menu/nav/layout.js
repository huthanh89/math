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
    this.clickedShare = this.clickedShare.bind(this);
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

      <div className="row">  
        <div className="col-md-6 col-center">
          <div className="row">  
  
            <div className="col-3">
                <Link to='/setting'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-user-cog fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">Setting</span>
                </Link>
            </div>
  
            <div className="col-3">
                <Link to='/rank'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-trophy fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">Rank</span>
                </Link>
            </div>

            <div className="col-3">
                <Link to='/store'>
                  <button className="btn btn-outline-light btn-lg menu-setting-button">
                    <i className="fas fa-store fa-lg d-block"></i>
                  </button>
                  <span className="menu-setting-title">Store</span>
                </Link>
            </div>

            <div className="col-3">
              <button className="btn btn-outline-light btn-lg menu-setting-button" onClick={this.clickedShare}>
                <i className="fas fa-share fa-lg d-block"></i>
              </button>
              <span className="menu-setting-title">Share</span>
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
