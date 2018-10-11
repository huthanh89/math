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

    let state = this.props.location.state;

    if (state==undefined){
      return (
        <Redirect 
          to= {{
            pathname: '/'
          }}
        />
      );
    }

    return (
      <div>
        <Star {...state}/>
        <Input {...state}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
