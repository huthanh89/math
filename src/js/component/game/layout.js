//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React    from 'react';
import Nav      from './component/nav/layout.js';
import Star     from './component/star/layout.js';
import Round    from './component/round/layout.js';
import Question from './component/question/layout.js';
import Input    from './component/input/layout.js';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    let type = this.props.match.params.type;
    props.actionUpdateInGame(true);
    props.actionSetMode(type);
    props.actionRestart(type);
  }

  componentDidUpdate(){

    // Update start and end time of each round.

    let time = new Date().getTime();
    let currentLevel = this.props.gameReducer.currentLevel;

    if(currentLevel < 10){
      this.props.actionStartTime(currentLevel, time);
    }
    if(currentLevel > 0){
      this.props.actionEndTime(currentLevel - 1, time);
    }

    // Update the game complete flag if game is over.

    if(this.props.gameReducer.gameCompleted){
      this.props.actionUpdateInGame(false);
    }
    
  }

  render() {

    if(this.props.gameReducer.gameCompleted){
      return (
        <Redirect
          to={{
            pathname: "/summary",
            state: { 
              gameProps: this.props.gameReducer,
              appProps: this.props.appReducer
            }
          }}
        />
      );
    }

    if(this.props.gameReducer.levels.length == 0){
      return (<div></div>);
    }
    
    return (
      <div id="game-container">
        <Nav {...this.props}/>
        <Star {...this.props}/>
        <Round {...this.props}/>
        <Question {...this.props}/>
        <Input {...this.props}/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
