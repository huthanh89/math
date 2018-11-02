//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc        from 'accounting';
import   React      from 'react';
import   Item       from './item/layout.js';
import { Link }     from 'react-router-dom';
import   GameConfig from 'lib/gameconfig.js';
import   axios      from 'axios';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: false,
      username: null,
      coin:     0,
      rank:     0,
      monsters: []
    };
  }


  componentDidMount(){
    this.getInfo();
  }

  getInfo(){
    let view = this;
    axios.get('/api/visit', {
      params:{
        userID: this.props.match.params.id,
      }
    })
    .then(function(response){
      console.log(response);
      let data = response.data;
      view.setState({
        username: data.username,
        coin:     data.coin,
        rank:     data.rank,
        monsters: data.monsters
      });
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }


  items(){
    let items = [];
    let view = this;

    this.state.monsters.forEach(function(monster){
      items.push(<Item {...view.props} monster={monster} key={monster.monsterID} sellItem={view.sellItem} />);
    });
    return items;
  }

  getPoolCount(){

    if(this.props.state.monsters.length >= GameConfig.maxPool)
    {
      return(
        <b className="text-danger">
          {this.props.state.monsters.length} / {GameConfig.maxPool}
        </b>
      );
    }
    else{
      return(
        <b>
          {this.props.state.monsters.length} / {GameConfig.maxPool}
        </b>
      );
    }
  }

  render() {

    return (
      <div className="row" id="visit-container">

        <div className="col-lg-7 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-user mr-2"></i>
              <span>
                {this.state.username}
              </span>
            </div>

            <div className="card-body">
              <div className="row mb-2">

                <div className="col-6" style={{'whiteSpace':'nowrap'}}>
                  <div className="float-left">
                    <i className="fas fa-fw fa-trophy mr-1 fa-lg"></i>
                    <b>
                      {acc.format(this.state.rank)}
                    </b>
                  </div>
                </div>
  
                <div className="col-6" style={{'whiteSpace':'nowrap'}}>
                  <div className="float-right">
                    <i className="fas fa-fw fa-coins mr-1 fa-lg"></i>
                    <b>
                      {acc.format(this.state.coin)}
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
              <hr></hr>

              <div className="row">
                <div className="col-12">

                  <Link to='/rank'>
                      <button className='btn btn-secondary float-left'>
                        <i className="fas fa-trophy"></i>
                      </button>
                  </Link>

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
