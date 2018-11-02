//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc        from 'accounting';
import   React      from 'react';
import   Item       from './item/layout.js';
import { Link }     from 'react-router-dom';
import   GameConfig from 'lib/gameconfig.js';
import   axios      from 'axios';
import { css }      from 'glamor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//-----------------------------------------------------------------------------//

function showToast(message){

  let toastID = Date.now();

  toast.success(message, {
    toastId:  toastID,
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2500,
    className: css({
      opacity: '0.85'
    }),
    bodyClassName: css({
      fontSize:  '21px',
      textAlign: 'center'
    })
  });

  setTimeout(function(){
    toast.dismiss(toastID);
  }, 2000);

}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: false
    };
    this.sellItem = this.sellItem.bind(this);
  }

  sellItem(creature){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/pool', {
      userID:       this.props.state.userID,
      monsterID:    creature.id,
      monsterPrice: creature.price
    })
    .then(function(response){
      view.props.actionRemoveMonster(creature.id);
      showToast(`Sold ${creature.name}`);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

  items(){
    let items = [];
    let view = this;

    console.log(this.props.state);

    this.props.state.monsters.forEach(function(monster){
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
      <div className="row" id="store-container">

        <ToastContainer/>
  
        <div className="col-lg-7 col-center">
          <div className="card bg-dark border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-fish mr-2"></i>
              <span>
                Pool
              </span>
            </div>

            <div className="card-body">
              <div className="row mb-2">

                <div className="col-6 store-head-text">
                  {this.getPoolCount()}
                </div>

                <div className="col-6" style={{'whiteSpace':'nowrap'}}>
                  <div className="float-right">
                    <i className="fas fa-fw fa-coins mr-1 fa-lg"></i>
                    <b>
                      {acc.format(this.props.state.storeCoin)}
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
              <hr></hr>

              <div className="row">
                <div className="col-12">
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
