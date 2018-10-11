//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import React  from 'react';
import Chance from 'chance';

//-----------------------------------------------------------------------------//

var chance = new Chance();

const createPool = (answer, operator) => {
  
  let a = answer;
  let b = answer + chance.floating({ min: -answer, max: answer });
  let c = answer - chance.floating({ min: -answer, max: answer });
  let d = answer + chance.floating({ min: -answer, max: answer }) - chance.floating({ min: -answer, max: answer });

  let decimal = operator=='divide'? 2:0

  let pool = 
  [ 
    _.round(a, decimal),
    _.round(b, decimal),
    _.round(c, decimal),
    _.round(d, decimal)
  ]

  return pool;
}

const scramble = (pool) => {
  return _.shuffle(pool);
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(userAnswer){
    this.props.actionSelect(userAnswer);
  }
  
  render() {

    let game   = this.props.gameReducer;
    let level  = game.levels[game.currentLevel];
    
    let answer = level.answer;
    let pool   = scramble(createPool(answer, level.operator));

    return (
      <div>

        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button" onClick={()=>this.buttonClicked(pool[0])}>
              <span>{pool[0]}</span>
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button" onClick={()=>this.buttonClicked(pool[1])}>
              <span>{pool[1]}</span>
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button" onClick={()=>this.buttonClicked(pool[2])}>
              <span>{pool[2]}</span>
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button" onClick={()=>this.buttonClicked(pool[3])}>
              <span>{pool[3]}</span>
            </button>
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
