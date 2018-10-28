//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc    from 'accounting';
import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {

    return (
      <div className="row" id="rank-container">
        <div className="col-lg-6 col-center">
          <div className="card bg-dark border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-trophy mr-2"></i>
              <span>
                Global Ranking
              </span>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <table className="table table-striped table-sm table-hover">
                    <thead>
                      <tr>
                        <th>
                          Rank
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Coins
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          {this.props.state.user}
                        </td>
                        <td>
                          {acc.format(this.props.state.coin)}
                        </td>
                      </tr>
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
