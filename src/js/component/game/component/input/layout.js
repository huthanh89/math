//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import React  from 'react';
import Chance from 'chance';

//-----------------------------------------------------------------------------//

var chance = new Chance();

const randomNumber = (answer) =>{

  let max;
  let min;

  if(answer < 0){
    max = 0;
    min = answer;
  }
  else{
    max = answer;
    min = 0;
  }
  return chance.floating({ min: min, max: max });
}

const createPool = (answer, operator) => {
  
  let a = answer;
  let b = randomNumber(answer)
  let c = randomNumber(answer)
  let d = randomNumber(answer)

  let decimal = operator=='divide'? 2:0

  let pool = 
  [ 
    _.round(a, decimal),
    _.round(b, decimal),
    _.round(c, decimal),
    _.round(d, decimal)
  ]

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

    if(answer == null){
      return(<div></div>) 
    }

    // Create a pool of numbers and make sure there are no same numbers
    // in the pool.

    let pool = createPool(answer, level.operator);

    while(_.uniq(pool).length!=4){
      pool = createPool(answer, level.operator);
    }

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
