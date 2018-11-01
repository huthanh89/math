//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc        from 'accounting';
import   React      from 'react';
import   Item       from './item/layout.js';
import { Link }     from 'react-router-dom';
import   Creatures  from 'lib/creature.js';
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
    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(creature){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/store', {
      userID:       this.props.state.userID,
      monsterID:    creature.id,
      monsterPrice: creature.price
    })
    .then(function(response){
      view.props.actionAddMonster(creature.id);
      view.props.actionSetStoreCoin(response.data.storeCoin);
      showToast(`Purchased ${creature.name}`);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

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
      items.push(<Item {...view.props} creature={creature} key={creature.id} buyItem={view.buyItem} />);
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
              <i className="fas fa-fw fa-store mr-2"></i>
              <span>
                Store
              </span>
            </div>

            <div className="card-body">
              <div className="row mb-2">

                <div className="col-md-4 col-3 store-head-text">
                  <i className="fas fa-fw fa-unlock mr-1 fa-lg"></i>
                  <b>
                    {this.unlockedCount()} / {Creatures.length}
                  </b>
                </div>

                <div className="col-md-4 col-3 store-head-text">
                  <i className="fas fa-fw fa-fish mr-1 fa-lg"></i>
                  {this.getPoolCount()}
                </div>

                <div className="col-md-4 col-6" style={{'whiteSpace':'nowrap'}}>
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
