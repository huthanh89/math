//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc    from 'accounting';
import   React  from 'react';
import   Item   from './item/layout.js';
import { Link } from 'react-router-dom';
import Creatures from 'lib/creature.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  unlockedCount(){

    let result = 0;
    let coin   = this.props.state.coin;

    Creatures.forEach(function(creature){
      if(coin > creature.price){
        result++;
      }
    });

    return result;
  }

  items(){
    let items = [];
    let view = this;
    Creatures.forEach(function(creature){
      items.push(<Item {...view.props} creature={creature} key={creature.id}/>);
    });
    return items;
  }

  render() {

    return (
      <div className="row" id="store-container">
        <div className="col-lg-7 col-center">
          <div className="card bg-dark border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-store mr-2"></i>
              <span>
                Store
              </span>
            </div>

            <div className="card-body">
              <div className="row">

                <div className="col-3">
                    <div className="d-block float-right mb-2">
                      <div className="d-block mb-2">
                        <i className="fas fa-fw fa-fish mr-2 fa-lg"></i>
                        <b>
                          1 / 20
                        </b>
                      </div>
                      <div className="d-block">
                        <i className="fas fa-fw fa-coins mr-2 fa-lg"></i>
                        <b>
                          {acc.format(this.props.state.storeCoin)}
                        </b>
                      </div>
                    </div>
                    <div>
                      <i className="fas fa-fw fa-unlock mr-2 fa-lg"></i>
                        <b>
                          {this.unlockedCount()} / {Creatures.length}
                        </b>
                    </div>
                  
                </div>
              </div>


              <div className="row">
                  <div className="col-12">
                    <div id="store-list">
                      <table className="table table-striped table-sm table-hover">
                        <thead>
                          <tr>
                            <th>
                              Item
                            </th>
                            <th>
                              Name
                            </th>
                            <th>
                              Price
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
              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <Link to='/'>
                    <button className="btn btn-info float-right">
                      <i className="fas fa-arrow-left"></i>
                      <span> Back </span>
                    </button>
                  </Link>
                </div>
              </div>
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
