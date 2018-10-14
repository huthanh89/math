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
  return chance.integer({ min: min, max: max });
};

const createPool = (answer) => {
  
  let a = answer;
  let b = randomNumber(answer);
  let c = randomNumber(answer);
  let d = randomNumber(answer);

  return _.shuffle([a, b, c, d]);
};

const buttonClass = (operator) => {
  let base = 'btn btn-lg game-button ';
  switch(operator){
    case 'add':{
      return base + 'btn-success';
    }
    case 'subtract':{
      return base + 'btn-info';
    }
    case 'multiply':{
      return base + 'btn-warning';
    }
    case 'divide':{
      return base + 'btn-danger';
    }
    default: {
      return base + 'btn-primary';
    }
  }
};

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

    let game     = this.props.gameReducer;
    let level    = game.levels[game.currentLevel];
    let answer   = level.answer;
    let operator = level.operator;

    if(answer === null){
      return(<div></div>);
    }

    // Create a pool of numbers and make sure there are no same numbers
    // in the pool.

    let pool = [];

    do{
      pool = createPool(answer);
    }
    while(_.uniq(pool).length!=4);

    return (
      <div>

        <div className="row">
          <div className="col-6">
            <button className={buttonClass(operator)} onClick={()=>this.buttonClicked(pool[0])}>
              <b>{pool[0]}</b>
            </button>
          </div>
          <div className="col-6">
            <button className={buttonClass(operator)} onClick={()=>this.buttonClicked(pool[1])}>
              <b>{pool[1]}</b>
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-6">
            <button className={buttonClass(operator)} onClick={()=>this.buttonClicked(pool[2])}>
              <b>{pool[2]}</b>
            </button>
          </div>
          <div className="col-6">
            <button className={buttonClass(operator)} onClick={()=>this.buttonClicked(pool[3])}>
              <b>{pool[3]}</b>
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
