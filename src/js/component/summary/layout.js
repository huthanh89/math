//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import React  from 'react';
import Coin   from './component/coin/layout.js';
import Star   from './component/star/layout.js';
import Input  from './component/input/layout.js';
import Review from './component/review/layout.js';
import Ad     from '../ad/layout.js';
import Amazon from '../amazon/layout.js';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  componentDidMount(){
    if(this.props.state.amazonModal){
      this.refs.amazonComponent.openModal();
    }
  }

  render() {

    let state = this.props.state;

    if (this.props.state.mode===null){
      return (<Redirect to="/"/>);
    }

    return (
      <div id="summary-container">
        <Amazon ref='amazonComponent' {...this.props}/>
        <Coin {...state}/>
        <Star {...state}/>
        <Input {..._.assignWith(this.props, state.appProps)}/>
        <Ad/>
        <Review {...state}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
