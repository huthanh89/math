//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React        from 'react';
import Nav          from './component/nav/layout.js';
import Star         from './component/star/layout.js';
import Round        from './component/round/layout.js';
import Question     from './component/question/layout.js';
import Input        from './component/input/layout.js';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);

    let mode       = props.match.params.type;
    let difficulty = props.state.gameDifficulty;

    props.actionUpdateInGame(true);
    props.actionRestart(mode, difficulty);
    props.actionSetMode(mode);
  }

  componentDidUpdate(){

    // Update start and end time of each round.

    let time         = new Date().getTime();
    let currentLevel = this.props.state.currentLevel;

    if(currentLevel < 10){
      this.props.actionStartTime(currentLevel, time);
    }

    if(currentLevel > 0){
      this.props.actionEndTime(currentLevel - 1, time);
    }

  }

  render() {

    if(this.props.state.currentLevel === 10){
      return (
        <Redirect to="/loot"/>
      );
    }

    return (
      <div className="row" id="game-container">
        <div className="col-lg-6 col-center" >
          <Nav      {...this.props}/>
          <Star     {...this.props}/>
          <Round    {...this.props}/>
          <Question {...this.props}/>
          <Input    {...this.props}/>
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
