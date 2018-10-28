//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
  }

  render() {

    return (
      <div className="row">
        <div className="col-12">
          
          <img id="menu-avatar-image" src="asset/avatar_shark.jpg" alt="avatar"/>

          <div className="d-inline-block">
            <b className="d-block mb-2">
              Thanh Huynh
            </b>
            <i className="fas fa-fw fa-trophy mr-2 fa-lg"></i>
            <b>
              1
            </b>
          </div>
        
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
