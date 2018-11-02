//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _         from 'lodash';
import acc       from 'accounting';
import React     from 'react';
import Creatures from 'lib/creature.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getView(){

    let id = this.props.match.params.id;

    console.log(id);
    console.log(this.props.state.monsters);

    let monster = _.find(this.props.state.monsters, function(creature){
      return creature.id === id;
    });

    console.log(monster);

    if(monster===undefined){
      return(<div></div>);
    }else{
      return(<div>
        {monster.name}
      </div>);
    }

  }

  render() {
    return (
      <div>
        {this.getView()}
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
