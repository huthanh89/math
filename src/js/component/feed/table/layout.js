//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import Item       from './item/layout.js';
import GameConfig from 'lib/gameconfig';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  items(monsters){
    let items = [];
    let view  = this;

    monsters.forEach(function(monster){
      items.push(<Item {...view.props} monster={monster} key={monster.monsterID} feedItem={view.props.feedItem} />);
    });
    return items;
  }

  getView(){

    let id = this.props.match.params.id;

    let target = _.find(this.props.state.monsters, function(monster){
      return monster.monsterID === id;
    });

    
    
    let monsters = _.filter(this.props.state.monsters, function(monster){
      let flag = true;
      if(id === monster.monsterID){
        flag = false;
      }
      if(target.typeID < monster.typeID){
        flag = false;
      }
      
      return flag;
    });

    if(monsters.length){

      if(target.level === GameConfig.monsterMaxLv){
        return(
          <div>
            Monster level is maxed.
          </div>
        );
      }
      else{
        return(
          <div id="store-list">
            <table className="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>
                    Lv
                  </th>
                  <th>
                    Feed Exp
                  </th>
                  <th>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.items(monsters)}
              </tbody>
            </table>
          </div>
        );

      }
      
    }
    else{
      return(
        <div>
          You have no monster left to feed.
        </div>
      );
    }

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            {this.getView()}
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
