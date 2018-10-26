//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import moment     from 'moment';
import acc        from 'accounting';
import React      from 'react';
import Type       from 'lib/operand.js';
import localStore from 'store';

//-----------------------------------------------------------------------------//

var TotalTime    = null;
var TotalCorrect = null;

const Difficulty = {
  0: 'Easy',
  1: 'Medium',
  2: 'Hard'
};

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  
  constructor(props){
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(id) {
    this.props.remove(id);
  }

  // Add points to over all score.

  componentDidMount(){
    let coin = localStore.get('coin');
    coin = coin + this.getReward();
    localStore.set('coin', coin);
  }

  tableBody() {

    var view = this;
    
    TotalTime    = 0;
    TotalCorrect = 0;

    function createRows() {
      let levels = view.props.levels;
      let rows   = [];

      _.forEach(levels, function(level, index){

        let operator = Type[level.operator].operator;
        let correct  = (level.answer===level.userAnswer);
        let icon     = '';
        let reward   = level.reward;

        if(correct){
          TotalCorrect = TotalCorrect + 1;
          icon = 'fas fa-check fa-fw text-success fa-lg';
        }
        else{
          icon = 'fas fa-times fa-fw text-danger fa-lg';
        }

        //let time  = level.endTime - level.startTime;
        //TotalTime = TotalTime + time;
        //time      = moment.duration(time, 'milliseconds').asSeconds();

        rows.push(
          <tr key={index}>
            <td>
              <span className="mr-2">{level.operandA}</span>
              <span className="mr-2">{operator}</span>
              <span className="mr-2">{level.operandB}</span>
              <span className="mr-2">=</span>
              <span className="mr-2">{level.answer}</span>
            </td>
            <td>
              <span>{level.userAnswer}</span>
            </td>
            <td>
              <span>{reward}</span>
            </td>
            <td>
              <i className={icon}></i>
            </td>
          </tr>
        );
      });
      return rows;
    }

    return (            
      <tbody>
        {createRows()}
      </tbody>
    );
  }
  
  getReward(){
    let reward = 0;
    this.props.levels.forEach(function(level){
      if(level.correct){
        reward += level.reward;
      }
    });
    return reward;
  }

  render() {

    let tableBody = this.tableBody();

    return (
      <div>
      
        <div className="float-right review-reward">
          <b className="mr-2">
            Total Reward: + {acc.format(this.getReward())} 
          </b>
          <i className="fas fa-coins fa-lg mr-2"></i>
        </div>
        
        <div>
          <b className="mr-2">
            Difficulty: {Difficulty[this.props.difficulty]} 
          </b>
        </div>

        <div id="review-container">
          <table className="table table-hover table-sm table-dark table-striped">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Reward</th>
                <th>Result</th>
              </tr>
            </thead>
            {tableBody}
          </table>

          <h5>Accurate: {TotalCorrect/10 * 100}%</h5>
          <h5>Completed in: {moment.duration(TotalTime).asSeconds()} seconds</h5>
        
        </div>

      </div>
    );
  }

}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
