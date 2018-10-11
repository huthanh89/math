//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _        from 'lodash';
import React    from 'react';
import Star     from './component/star/layout.js';
import Time     from './component/time/layout.js';
import Question from './component/question/layout.js';
import Input    from './component/input/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  componentDidMount(){
    let type = this.props.match.params.type;
    this.props.actionRestart(type);
  }

  render() {
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
