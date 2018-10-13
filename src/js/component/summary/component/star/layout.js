//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import classNames from 'classnames'

//-----------------------------------------------------------------------------//

function iconClass(level) {

  let answer     = level.answer;
  let userAnswer = level.userAnswer;

  if(answer==userAnswer){
    return classNames('fas', 'fa-star', 'fa-lg', 'game-star', 'game-star-complete');
  }
  else if(userAnswer!=null){
    return classNames('fas', 'fa-star', 'fa-lg', 'game-star', 'game-star-wrong');
  }
  else {
    return classNames('far', 'fa-star', 'fa-lg', 'game-star', 'game-star-incomplete');
  }
}

const getTotal = (levels) => {
  let total = 0;
  _.forEach(levels, function(level){
    if(level.answer==level.userAnswer){
      total++;
    }
  })
  return total;
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    let levels = this.props.levels;
    return (
      <div id='summary-star-container'>
        <div className="row">
          <div className="col-12">
            <i className={iconClass(levels[0])}></i>
            <i className={iconClass(levels[1])}></i>
            <i className={iconClass(levels[2])}></i>
            <i className={iconClass(levels[3])}></i>
            <i className={iconClass(levels[4])}></i>
            <i className={iconClass(levels[5])}></i>
            <i className={iconClass(levels[6])}></i>
            <i className={iconClass(levels[7])}></i>
            <i className={iconClass(levels[8])}></i>
            <i className={iconClass(levels[9])}></i>
          </div>
          <div className="col-12">
            <span className="mr-2">{getTotal(levels)}</span>
            <span>
              / 10 Correct
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
