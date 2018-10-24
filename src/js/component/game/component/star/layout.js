//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import classNames from 'classnames';

//-----------------------------------------------------------------------------//

function iconClass(level) {

  let answer     = level.answer;
  let userAnswer = level.userAnswer;

  if(answer===userAnswer){
    return classNames('fas', 'fa-star', 'fa-lg', 'game-star', 'game-star-complete');
  }
  else if(userAnswer!==null){
    return classNames('fas', 'fa-star', 'fa-lg', 'game-star', 'game-star-wrong');
  }
  else {
    return classNames('far', 'fa-star', 'fa-lg', 'game-star', 'game-star-incomplete');
  }
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    let levels = this.props.state.levels;
    return (
      <div>
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
