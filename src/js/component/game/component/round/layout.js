//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {
    
    let currentLevel = this.props.state.currentLevel;
    let level        = this.props.state.levels[currentLevel];
    let reward       = level.reward;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <span className="game-round">Question: {currentLevel + 1}</span>
            <span className="game-round float-right">
              <span>
                Reward: {reward}
              </span>
              <i className="fas fa-coins ml-1"></i>
            </span>
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
