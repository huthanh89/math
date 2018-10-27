//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';
import   Coin   from './coin/layout.js';
import   Mode   from './mode/layout.js';
import   Nav    from './nav/layout.js';
import   Ad     from '../ad/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.clickedShare = this.clickedShare.bind(this);
    let mode          = props.state.mode;
    let difficulty    = props.state.difficulty;
    props.actionRestart(mode, difficulty);
  }
  
  clickedShare(){
    let link = 'https://www.facebook.com/sharer/sharer.php?u=http%3A//cloudresume.net/mathtingz/';
    window.open(
      link,
      '_blank'
    );
  }

  render() {

    return (
      <div id="menu-container">
        <Coin/>
        <Mode/>
        <Nav/>
        <Ad/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
