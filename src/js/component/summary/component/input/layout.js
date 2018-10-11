//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import { Link } from 'react-router-dom'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  refresh(){

    //TODO: Action props is needs to be pass down to here. Broken.
    
    console.log(this.props);
    let game   = this.props.gameReducer;
    let level  = game.levels[game.currentLevel];
    this.props.actionRestart(level.operator);
  }

  render() {

    return (
      <div>
        <div className="row">

          <div className="col-6">
            <Link to='/'>
              <button className="btn btn-primary btn-lg summary-button">
                <i className="fas fa-home fa-lg mr-2"></i>
                <span>Menu</span>
              </button>
            </Link>
          </div>

          <div className="col-6">
            <button className="btn btn-primary btn-lg summary-button" onClick={this.refresh}>
              <i className="fas fa-sync-alt fa-lg mr-2"></i>
              <span>Restart</span>
            </button>
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
