//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React    from 'react';
import Storage  from './storage/layout.js';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {


  getView(){
    if(this.props.state.monsters.length){
      return(
        <Storage {...this.props}/>
      );
    }else{
      return(
        <div>
          You currently own no monsters in the pool. Go purchase some at the store.
          <hr></hr>
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
      );
    }
  }

  render() {

    return (
      <div className="row" id="pool-container">

        <div className="col-lg-7 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-fish mr-2"></i>
              <span>
                Pool
              </span>
            </div>

            <div className="card-body">
              {this.getView()}
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
