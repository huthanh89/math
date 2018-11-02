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

    let id       = this.props.match.params.id;
    this.monster = _.find(this.props.state.monsters, function(monster){
      return monster.monsterID === id;
    });

    if(this.monster){
      let creatureID = this.monster.typeID;
      let creature   = _.find(Creatures, function(creature){
        return creatureID === creature.id;
      });

      let level   = Math.floor(this.monster.level);
      let percent = _.round(this.monster.level - level, 2) * 100;

      return(
        <div>

          <div className="row">
            <div className="col-3 text-right">
              <img className="feed-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>
            </div>
            <div className="col-9">
              <span>
                Level: {Math.floor(level)}
              </span>
              <span className="d-block">
                Name: {creature.name}
              </span>
              <span className="d-block">
                Bonus: {acc.format(this.monster.reward)}
              </span>
            </div>
          </div>
          
          <div className="row mt-2">
            <div className="col-12">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${percent}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{percent}%</div>
              </div>
            </div>
          </div>

        </div>
      );
    }
    else{
      return(
        <div>
          Cannot find monster data.
        </div>
      );
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
