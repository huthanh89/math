//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    let game  = this.props.gameReducer;
    let gameLevel = game.levels[game.currentLevel];

    let level = gameLevel.level + 1;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <p type="text" id="game-timer" > 
              <span className="mr-2">Question:</span>
              <span>{level}</span>
              <span className="float-right">0</span>
              <span className="float-right mr-2">Time:</span>
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
