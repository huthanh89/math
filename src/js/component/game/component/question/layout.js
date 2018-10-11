//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _     from 'lodash'
import React from 'react';
import Type  from 'lib/operand.js'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  render() {

    let game  = this.props.gameReducer;
    let level = game.levels[game.currentLevel];

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <p type="text" id="game-question" > 
              <span>{level.operandA}</span>
              <span>{Type[level.operator].operator}</span>
              <span>{level.operandB}</span>
              <span>=</span>
              <span>{level.answer}</span>
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
