//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc    from 'accounting';
import   axios  from 'axios';
import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      users: []
    };
  }
  
  componentDidMount(){
    
    let view = this;

    // Fetch rank info. 
  
    axios.get('/api/rank')
      .then(function (response) {
        view.setState({
          users: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getItems(){

    let result = [];

    this.state.users.forEach(function(user, index){
      result.push(
        <tr key={index}>
          <td>
            {index + 1}
          </td>
          <td>
            {user.username}
          </td>
          <td>
            {acc.format(user.coin)}
          </td>
        </tr>
      );
    });

    return result;

  }

  render() {

    return (
      <div className="row" id="rank-container">
        <div className="col-lg-6 col-center">
          <div className="card bg-dark border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-trophy mr-2"></i>
              <span>
                Global Ranking (Top 100)
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
                      {this.getItems()}
                    </tbody>
                  </table>
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
