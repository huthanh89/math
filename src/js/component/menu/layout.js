//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React    from 'react';
import User     from './user/layout.js';
import Coin     from './coin/layout.js';
import Ad       from '../ad/layout.js';
import Nav      from './nav/layout.js';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    let mode          = props.state.mode;
    let difficulty    = props.state.difficulty;
    props.actionRestart(mode, difficulty);
  }
  
  render() {
    return (
      <div id="menu-container">
        <div className="row">
          <div className="col-sm-8 col-7">
            <User {...this.props}/>
          </div>
          <div className="col-sm-4 col-5">
            <Coin {...this.props}/>
          </div>
        </div>

        <div className="col-lg-5 col-md-8 col-center">
          <Link to='/mathmenu'>
            <button className="btn btn-success btn-lg menu-button btn-block">
              <i className="fas fa-fw fa-play fa-lg mr-2"></i>
              <span>Play</span>
            </button>
          </Link>
          <Link to='/pool'>
            <button className="btn btn-primary btn-lg menu-button btn-block">
              <i className="fas fa-fw fa-fish fa-lg mr-2"></i>
              <span>Pool</span>
            </button>
          </Link>
        </div>
        <Nav/>
        <Ad/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
