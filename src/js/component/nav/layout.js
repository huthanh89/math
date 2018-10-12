//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React      from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'

//-----------------------------------------------------------------------------//

function iconClass(isHome) {

  if(isHome){
    return classNames('btn', 'btn-outline-success', 'd-none');
  }
  else {
    return classNames('btn', 'btn-outline-success');
  }
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props)
    this.clickedHome = this.clickedHome.bind(this);
  }

  clickedHome(){
    this.props.actionUpdateHome(true);
  }

  render() {

    let isHome = this.props.appReducer.home;

    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline">
              <Link to='/'>
                <button className={iconClass(isHome)} type="button">
                  <i className="fas fa-sync-alt fa-lg"></i>
                </button>
              </Link>
            </form>
          </ul>
          <ul className="navbar-nav ml-auto">
            <form className="form-inline">
              <Link to='/'>
                <button className="btn btn-outline-success" type="button" onClick={this.clickedHome}>
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
