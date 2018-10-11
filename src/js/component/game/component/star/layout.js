//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewIndex: 0
    };

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <i className="fas fa-star fa-2x game-star-complete"></i>
            <i className="fas fa-star fa-2x game-star-complete"></i>
            <i className="fas fa-star fa-2x game-star-complete"></i>
            <i className="fas fa-star fa-2x game-star-wrong"></i>
            <i className="fas fa-star fa-2x game-star-complete"></i>
            <i className="fas fa-star fa-2x game-star-wrong"></i>
            <i className="fas fa-star fa-2x game-star-wrong"></i>
            <i className="far fa-star fa-2x game-star-incomplete"></i>
            <i className="far fa-star fa-2x game-star-incomplete"></i>
            <i className="far fa-star fa-2x game-star-incomplete"></i>
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
