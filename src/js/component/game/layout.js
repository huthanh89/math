//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React    from 'react';
import Star     from './component/star/layout.js';
import Time     from './component/time/layout.js';
import Question from './component/question/layout.js';
import Input    from './component/input/layout.js';
import { Redirect } from 'react-router-dom'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props)
    let type = this.props.match.params.type;
    props.actionUpdateInGame(true);
    props.actionSetMode(type);
    props.actionRestart(type);
  }

  componentDidUpdate(){
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
    
    return (
      <div id="game-container">
        <Star {...this.props}/>
        <Time {...this.props}/>
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
