//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import axios  from 'axios';
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

  componentDidMount(){
    this.updateCoin(this.props);
  }

  updateCoin(props){
    axios.put('/api/summary', {
      coin:   this.getTotalCoin(),
      userID: this.props.state.userID
    })
    .then(function (response) {
      console.log(response);
      let data= response.data;
      props.actionSetCoin(data.coin);
      props.actionSetRank(data.rank);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  tableBody() {

    var view = this;
    
    TotalTime    = 0;
    TotalCorrect = 0;

    function createRows() {
      let levels = view.props.state.levels;
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
              <span>{_.round(time, 2)}</span>
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
    this.props.state.levels.forEach(function(level){
      if(level.correct){
        reward += level.reward;
      }
    });
    return reward;
  }

  getTotalCoin(){
    let reward = this.getReward();
    let loot   = this.props.state.loot;
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
                <th>Time</th>
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
