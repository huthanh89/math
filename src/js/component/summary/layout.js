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

  constructor(props){
    super(props)
    props.actionUpdateInGame(false);
  }


  render() {

    console.log('summary', this.props);

    if (this.props.appReducer.mode==null){
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
