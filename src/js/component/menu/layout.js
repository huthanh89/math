//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import User  from './user/layout.js';
import Coin  from './coin/layout.js';
import Mode  from './mode/layout.js';
import Nav   from './nav/layout.js';
import Ad    from '../ad/layout.js';
import Amazon from '../amazon/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.clickedShare = this.clickedShare.bind(this);
    let mode          = props.state.mode;
    let difficulty    = props.state.difficulty;
    props.actionRestart(mode, difficulty);
  }
  
  componentDidMount(){
    if(this.props.state.amazonModal){
      this.refs.amazonComponent.openModal();
    }
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
