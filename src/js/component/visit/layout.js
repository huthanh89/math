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
      monsters: null
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
    let view  = this;
    this.state.monsters.forEach(function(monster){
      items.push(<Item {...view.props} monster={monster} key={monster.monsterID} sellItem={view.sellItem} />);
    });
    return items;
  }

  getPool(){
    if(this.state.monsters === null){
      return(<div></div>);
    }
    else if(this.state.monsters.length)
    {
      return(
        <div id="store-list">
          <table className="table table-striped table-sm table-hover">
            <thead>
              <tr>
                <th>
                  Creature
                </th>
                <th>
                  Lv
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
      );
    }
    else{
      return(
      <div className="text-center mt-2">
        This player's pool is empty.
      </div>);
    }
  }

  render() {

    return (
      <div className="row" id="visit-container">

        <div className="col-lg-7 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-home mr-2"></i>
              <span>
                Visiting
              </span>
            </div>

            <div className="card-body">
              <div className="row mb-2">

                <div className="col-6" style={{'whiteSpace':'nowrap'}}>
                  <div className="float-left">
                    <i className="fas fa-fw fa-user mr-1 fa-lg"></i>
                    <b>
                      {this.state.username}
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
                  {this.getPool()}
                </div>
              </div>

              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <Link to='/rank'>
                      <button className='btn btn-info float-left'>
                        <i className="fas fa-arrow-left mr-1"></i>
                        <span>Back</span>
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
