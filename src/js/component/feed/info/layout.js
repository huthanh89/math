//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import acc        from 'accounting';
import React      from 'react';
import PropTypes  from 'prop-types';
import Creatures  from 'lib/creature.js';
import GameConfig from 'lib/gameconfig';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  getView(){

    let id       = this.props.match.params.id;
    this.monster = _.find(this.props.monsters, function(monster){
      return monster.monsterID === id;
    });

    if(this.monster){
      let creatureID = this.monster.typeID;
      let creature   = _.find(Creatures, function(creature){
        return creatureID === creature.id;
      });

      let view    = this;
      let level   = Math.floor(this.monster.level);
      let percent = _.round(this.monster.level - level, 2) * 100;

      function currentExp(){
        let result;
        result = view.monster.level - level;
        result *= view.monster.levelExp; 
        return Math.floor(result);
      }

      function maxCrown(){
        if(level === GameConfig.monsterMaxLv){
          return(<i className="fas fa-crown ml-2"></i>);
        }else{
          return(<div></div>);
        }
      }

      return(
        <div>

          <div className="row">
            <div className="col-3 text-right">
              <img className="feed-avatar-image" src={`asset/${creature.src}`} alt="avatar"/>
            </div>
            <div className="col-9">
              <div style={{'fontSize': '23px'}}>
                <span>
                  Level: {Math.floor(level)}
                </span>
                {maxCrown()}
              </div>
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
              <span className="float-right">
                {acc.format(currentExp())} / {acc.format(this.monster.levelExp)} Exp
              </span>
            </div>
          </div>
          
          <div className="row mt-2">
            <div className="col-12">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${percent}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{acc.format(percent, 2)}%</div>
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

Component.propTypes = {
  monsters: PropTypes.array.isRequired,
};

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
