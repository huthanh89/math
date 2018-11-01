//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import SignUp from './signup/layout';
import Login  from './login/layout';
import React  from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
    this.login  = this.login .bind(this);
    this.state = {
      signup: true
    };
  }

  signup(){
    this.setState({signup: true});
  }

  login(){
    this.setState({signup: false});
  }

  getView(){
    if(this.state.signup){
      return(
        <div className="card-body">
          <nav className="nav nav-pills nav-justified usersetting-nav">
            <a className="nav-item nav-link active" href="#" onClick={this.signup}>Sign Up</a>
            <a className="nav-item nav-link text-white" href="#" onClick={this.login}>Log In</a>
          </nav>
          <SignUp {...this.props}/>
        </div>
      );
    }
    else{
      return(
        <div className="card-body">
          <nav className="nav nav-pills nav-justified usersetting-nav">
            <a className="nav-item nav-link text-white" href="#" onClick={this.signup}>Sign Up</a>
            <a className="nav-item nav-link active" href="#" onClick={this.login}>Log In</a>
          </nav>
          <Login {...this.props}/>
        </div>
      );
    }
  }

  navClass(){
    if(this.state.signup){
      return(<SignUp {...this.props}/>);
    }
    else{
      return(<Login {...this.props}/>);
    }
  }

  render() {

    return (
      <div className="row">

        <div className="col-lg-5 col-md-8 col-center">

          <div className="card bg-dark border-color border-light" id="contact-container">
            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-user-cog mr-2"></i>
              <span>
                User Account
              </span>
            </div>
              {this.getView()}
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
