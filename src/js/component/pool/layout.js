//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React      from 'react';
import   Storage    from './storage/layout.js';
import   Feed       from './feed/layout.js';
import { Link }     from 'react-router-dom';
import   GameConfig from 'lib/gameconfig.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      feedID: null
    };
  }

  getView(){
    if(this.state.feedID){
      return(<feedID {...this.props} feedID={this.state.feedID}/>);
    }else{
      return(<Storage {...this.props}/>);
    }
  }

  render() {

    return (
      <div className="row" id="store-container">

        <div className="col-lg-7 col-center">
          <div className="card bg-dark border-light">

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
