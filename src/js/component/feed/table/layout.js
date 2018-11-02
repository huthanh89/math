//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import Item  from './item/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  items(){
    let items = [];
    let view = this;

    this.props.state.monsters.forEach(function(monster){
      items.push(<Item {...view.props} monster={monster} key={monster.monsterID} feedItem={view.feedItem} />);
    });
    return items;
  }

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-12">
              <div id="store-list">
                <table className="table table-striped table-sm table-hover">
                  <thead>
                    <tr>
                      <th>
                        Monster
                      </th>
                      <th>
                        Lv
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        Bonus
                      </th>
                      <th>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.items()}
                  </tbody>
                </table>
              </div>
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
