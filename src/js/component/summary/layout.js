//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _     from 'lodash'
import React from 'react';
import Star  from './component/star/layout.js';
//import Time  from './component/time/layout.js';
import Input from './component/input/layout.js';
import { Redirect } from 'react-router-dom'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    let state = this.props.location.state;

    if (this.props.appReducer.mode==null){
      return (<Redirect to="/"/>)
    }
    else if(state==undefined){
      return(<div></div>);
    }

    return (
      <div>
        <Star {...state.gameProps}/>
        <Input {..._.assignWith(this.props, state.appProps)}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
