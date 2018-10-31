//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import React  from 'react';
import Coin   from './component/coin/layout.js';
import Star   from './component/star/layout.js';
import Input  from './component/input/layout.js';
import Reward from './component/reward/layout.js';
import Review from './component/review/layout.js';
import Ad     from '../ad/layout.js';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  constructor(props){
    super(props);
    props.actionSetGameCompleted(true);
  }

  render() {

    let state = this.props.state;

    if (this.props.state.mode===null){
      return (<Redirect to="/"/>);
    }

    return (
      <div id="summary-container">
        <Coin {...this.props}/>
        <Star {...state}/>
        <Input {..._.assignWith(this.props, state.appProps)}/>
        <Ad/>
        <Reward {...this.props}/>
        <Review {...this.props}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
