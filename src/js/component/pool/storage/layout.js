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
      <div>

        <ToastContainer/>

        <div className="row mb-2">

          <div className="col-6 store-head-text">
            {this.getPoolCount()}
          </div>

        </div>


        <div className="row">
            <div className="col-12">
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
            </div>
        </div>
        <hr></hr>

        <div className="row">
          <div className="col-12">
            <Link to='/store'>
                <button className='btn btn-secondary float-left'>
                  <i className="fas fa-store"></i>
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
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
