//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

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

    if (this.props.appReducer.home){
      return (<Redirect to="/"/>)
    }

    let props = this.props.gameReducer;

    return (
      <div>
        <Star {...props}/>
        <Input {...props}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
