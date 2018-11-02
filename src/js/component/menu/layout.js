//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React    from 'react';
import User     from './user/layout.js';
import Coin     from './coin/layout.js';
import Mode     from './mode/layout.js';
import Nav      from './nav/layout.js';
import Amazon   from '../amazon/layout.js';
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
  
  componentDidMount(){
    if(this.props.state.amazonModal){
      this.refs.amazonComponent.openModal();
    }
  }

  render() {
    return (
      <div id="menu-container">
        <Amazon ref='amazonComponent' {...this.props}/>
        <div className="row">
          <div className="col-sm-8 col-7">
            <User {...this.props}/>
          </div>
          <div className="col-sm-4 col-5">
            <Coin {...this.props}/>
          </div>
        </div>
        <Mode/>

        <div className="col-md-5 col-sm-8 col-center">
          <Link to='/pool'>
            <button className="btn btn-success btn-lg menu-button btn-block">
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
