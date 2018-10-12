//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _      from 'lodash';
import moment from 'moment';
import React  from 'react';
import Type   from 'lib/operand.js'

//-----------------------------------------------------------------------------//

var TotalTime    = null;
var TotalCorrect = null;

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

  tableBody() {

    var view = this;
    
    TotalTime    = 0;
    TotalCorrect = 0;

    function createRows() {
      let levels = view.props.levels;
      let rows   = [];

      _.forEach(levels, function(level, index){

        let operator = Type[level.operator].operator
        let correct  = (level.answer==level.userAnswer);
        let icon     = ''

        if(correct){
          TotalCorrect = TotalCorrect + 1;
          icon = 'fas fa-check fa-fw text-success fa-lg'
        }
        else{
          icon = 'fas fa-times fa-fw text-danger fa-lg'
        }

        let time  = level.endTime - level.startTime;
        TotalTime = TotalTime + time;
        time      = moment.duration(time, 'milliseconds').asSeconds();

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
              <i className={icon}></i>
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

  render() {
    return (
      <div id="review-container">
        <table className="table table-hover table-sm table-dark table-striped">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Result</th>
              <th>Time (sec)</th>
            </tr>
          </thead>
          {this.tableBody()}
        </table>
        <h5>Accurate: {TotalCorrect/10 * 100}%</h5>
        <h5>Completed in: {moment.duration(TotalTime).asSeconds()} seconds</h5>
      </div>
    );
  }

}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
