//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

//import React    from 'react';
import User     from './user/layout.js';
import Coin     from './coin/layout.js';
import Nav      from './nav/layout.js';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//

import * as React from 'react';

import PropTypes from 'prop-types';

type Props = {
  foo: number,
  bar?: string,
};

class MyComponent extends React.Component<Props> {

  render() {
    return <div>{this.props.bar}</div>;
  }
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    let mode          = props.mode;
    let difficulty    = props.difficulty;
    props.actionRestart(mode, difficulty);
  }
  
  render() {
    return (
      <div id="menu-container">

        <MyComponent  jar={'asdf'}/>;

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
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
