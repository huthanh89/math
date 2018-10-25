//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//

const Difficulty = {
  0: 'Easy',
  1: 'Medium',
  2: 'Hard',
  3: 'Insane'
};

function iconClass(inGame) {
  if(inGame){
    return classNames('btn', 'btn-outline-light');
  }
  else {
    return classNames('btn', 'btn-outline-light', 'd-none');
  }
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.clickedRestart = this.clickedRestart.bind(this);
    this.clickedHome    = this.clickedHome.bind(this);
  }

  clickedRestart(){
    this.props.actionRestart(this.props.state.mode);
  }

  clickedHome(){
    this.props.actionUpdateInGame(false);
  }

  render() {

    let state      = this.props.state;
    let inGame     = state.inGame;
    let title      = _.toUpper(state.mode);
    let difficulty = _.toUpper(Difficulty[state.difficulty]);

    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline">
              <button className={iconClass(inGame)} type="button" onClick={this.clickedRestart}>
                <i className="fas fa-sync-alt fa-lg"></i>
              </button>
            </form>
          </ul>
          <ul className="navbar-nav m-auto">
              <span className="d-block nav-mode">{title}</span>
              <span className="d-block nav-mode">{difficulty}</span>
          </ul>
          <ul className="navbar-nav ml-auto">
            <form className="form-inline">
              <Link to='/'>
                <button className={iconClass(inGame)} type="button" onClick={this.clickedHome}>
                  <i className="fas fa-home fa-lg"></i>
                </button>
              </Link>
            </form>
          </ul>
        </div>
      </nav>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
