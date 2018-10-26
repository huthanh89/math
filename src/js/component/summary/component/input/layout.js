//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  
  constructor(props) {
    super(props);
    this.clickedRestart = this.clickedRestart.bind(this);
  }

  clickedRestart(){
    let mode       = this.props.state.mode;
    let difficulty = this.props.state.difficulty;
    this.props.actionRestart(mode, difficulty);
    this.props.history.push(`/game/${mode}`);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="row">
              <div className="col-6">
                <Link to='/'>
                  <button className="btn btn-outline-light btn-lg summary-button btn-block">
                    <i className="fas fa-home fa-lg mb-2"></i>
                    <span>Home</span>
                  </button>
                </Link>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-light btn-lg summary-button btn-block" onClick={this.clickedRestart}>
                  <i className="fas fa-sync-alt fa-lg"></i>
                  <span>Restart</span>
                </button>
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
