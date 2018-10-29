//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import moment from 'moment';
import acc    from 'accounting';
import React  from 'react';
import Type   from 'lib/operand.js';

//-----------------------------------------------------------------------------//

var TotalTime    = null;
var TotalCorrect = null;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

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
        let reward   = level.reward;

        if(correct){
          TotalCorrect = TotalCorrect + 1;
        }

        let time  = level.endTime - level.startTime;
        TotalTime = TotalTime + time;
        time      = moment.duration(time, 'milliseconds').asSeconds();

        let rowClass = correct?'bg-success': 'bg-danger';

        rows.push(
          <tr key={index} className={rowClass}>
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
              <span>{acc.format(reward)}</span>
            </td>
            <td>
              <span>{time}</span>
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

  getTotalCoin(){
    let reward = this.getReward();
    let loot   = this.props.loot;
    return reward + loot;
  }

  render() {

    let tableBody = this.tableBody();

    return (
      <div id="summary-review-container">

        <div id="review-container">
          <table className="table table-hover table-sm table-dark table-striped">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Reward</th>
                <th>Time(sec)</th>
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
