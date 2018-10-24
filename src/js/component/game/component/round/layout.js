//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    let state     = this.props.state;
    let gameLevel = state.levels[state.currentLevel];
    let level     = gameLevel.level + 1;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <p type="text" id="game-timer" > 
              <span className="mr-2">Question:</span>
              <span>{level}</span>
            </p>
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
