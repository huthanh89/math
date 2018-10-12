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
    props.actionUpdateHome(false);
    props.actionRestart(type);
  }

  render() {

//    console.log('>>>>', this.props)

    /*
    if(this.props.gameReducer.gameCompleted){
      return (
        <Redirect 
          to= {{
            pathname: '/summary',
            state: this.props.gameReducer
          }}
        />
      );
    }*/

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
