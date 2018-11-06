//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   axios  from 'axios';
import   Item   from './item/layout';
import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      users: []
    };
  }
  
  componentDidMount(){
    
    let view = this;

    // Fetch rank info. 
  
    axios.get('/api/rank')
      .then(function (response) {
        view.setState({
          count: response.data.count,
          users: response.data.ranks
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getItems(){
    let result = [];
    let view   = this;
    this.state.users.forEach(function(user, index){
      result.push(
        <Item {...view.props} key={index} user={user} index={index}/>
      );
    });
    return result;
  }

  render() {

    return (
      <div className="row" id="rank-container">
        <div className="col-lg-6 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-trophy mr-2"></i>
              <span>
                Global Ranking (Top 100)
              </span>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-12" id="rank-table-container">
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
                  <span  className="float-left text-dark">
                    {this.state.count} Users
                  </span>
                  <Link to='/'>
                    <button className="btn btn-secondary float-right">
                      <span> Cancel </span>
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
