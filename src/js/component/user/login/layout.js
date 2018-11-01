//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $      from 'jquery';
import   axios  from 'axios';
import   React  from 'react';
import { css }  from 'glamor';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

//-----------------------------------------------------------------------------//

function showToast(message, props){
  toast.success(message, {
    toastId: 1,
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
    props.history.push('/');
    toast.dismiss(1);
  }, 2000);

}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit .bind(this);
    this.state = {
      fetching: false,
      error:    null
    };

    this.email    = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit (event){
    event.preventDefault();
    if(!this.state.fetching){
      this.save();
    }
  }

  save(){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/login', {
      email:    this.email.current.value,
      password: this.password.current.value
    })
    .then(function(){
      view.setState({
        error: null
      });
      view.props.actionSetUserName(view.username.current.value);
      showToast("Settings Updated!", view.props);
    })
    .catch(function (error) {
      view.setState({
        fetching: false,
        error:    error.response.data
      });
    });
  }

  saveButton(){
    if(this.state.fetching){
      return(
        <button className='btn btn-primary float-right disabled'>
          <i className="fas fa-spinner fa-spin mr-1"></i>                    
          <span> Login </span>
        </button>
      );
    }
    else{
      return(
        <input className='btn btn-primary float-right' type="submit" value="Login"/>
      );
    }
  }

  shouldCheck(difficulty){
    return this.state.gameDifficulty === difficulty;
  }

  closeError(){
    $('#usersetting-alert').hide();
  }

  alertMessage(){
    if(this.state.error){
      $('#usersetting-alert').show();
      return(
        <div className="alert alert-danger alert-dismissible fade show" id="usersetting-alert" role="alert">
          <strong>Failed:</strong> 
          <span> {this.state.error}</span>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.closeError}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }else{
      return(<div/>);
    }
  }

  render() {

    return (
      <div>

          {this.alertMessage()}

          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="setting-email">Email</label>
              <input type="email" ref={this.email} className="form-control form-control-sm" id="setting-email" minLength="5" maxLength="30" required/>
            </div>
            
            <div className="form-group">
              <label htmlFor="setting-password">Password</label>
              <input type="password" ref={this.password} className="form-control form-control-sm" id="setting-password" minLength="4" maxLength="15" required/>
            </div>
            
            <hr></hr>

            <div className="row">
              <div className="col-12">
                {this.saveButton()}
                <Link to='/'>
                  <button className='btn btn-secondary mr-2 float-right'>
                    <span> Cancel </span>
                  </button>
                </Link>
              </div>
            </div>

          </form>
        
        <ToastContainer/>

      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
