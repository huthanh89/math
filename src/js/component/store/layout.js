//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import   Item   from './item/layout.js';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  constructor(props){
    super(props);
    props.actionAmazonModal(true);
  }
  render() {
    return (
      <div className="row" id="rank-container">
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
                <div className="col-12">
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
                      <Item avatar="shrimp.png"       name="Shrimp"       price="0"/>
                      <Item avatar="shark.jpg"        name="Shark"        price="12,000,000"/>
                      <Item avatar="killer_whale.png" name="Killer Whale" price="24,500,,000"/>
                      <Item avatar="whale.jpg"        name="Whale"        price="50,000,,000"/>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <Link to='/'>
                    <button className="btn btn-info mt-2 float-right">
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
