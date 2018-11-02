//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import Item  from './item/layout.js';

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

    let monsters = _.filter(this.props.state.monsters, function(monster){
      return id !== monster.monsterID;
    });

    if(monsters.length){

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
                  Name
                </th>
                <th>
                  Feed EXP
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
      
    }else{
      return(
        <div>
          You have no monsters left to feed.
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
