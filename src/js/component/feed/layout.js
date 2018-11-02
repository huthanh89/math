//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React      from 'react';
import   Info       from './info/layout.js';
import   Table      from './table/layout.js';
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
      fetching: false,
    };
    this.feedItem = this.feedItem.bind(this);
  }

  feedItem(monster){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/feed', {
      userID:   this.props.state.userID,
      targetID: this.props.match.params.id,
      feedID:   monster.monsterID
    })
    .then(function(response){
      view.props.actionUpdateMonsters(response.data);
      //showToast(`Fed ${creature.name}`);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

  render() {

    return (
      <div className="row" id="feed-container">

        <ToastContainer/>
  
        <div className="col-lg-7 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-utensils mr-2"></i>
              <span>
                Feed
              </span>
            </div>

            <div className="card-body">

              <Info  {...this.props}/>
              
              <hr></hr>

              <Table {...this.props} feedItem={this.feedItem}/>

              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <Link to='/pool'>
                    <button className="btn btn-secondary float-left">
                      <i className="fas fa-arrow-left"></i>
                      <span> Back </span>
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
