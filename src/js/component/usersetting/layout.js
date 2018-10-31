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
    this.radioChange  = this.radioChange.bind(this);
    this.state = {
      fetching:       false,
      gameDifficulty: 0
    };

    this.username = React.createRef();
    this.email    = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit (event){
    event.preventDefault();
    console.log('submit', this.username.current.value);
    console.log('submit', this.email.current.value);
    if(!this.state.fetching){
      //this.save();
    }
  }

  save(){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/setting', {
      userID:         this.props.state.userID,
      username:       this.props.state.username,
      gameDifficulty: this.props.state.gameDifficulty
    })
    .then(function(){
      props.actionGameDifficulty(view.state.gameDifficulty);
      props.actionSetUserName($('#setting-username').val());
      showToast("Settings Updated!", view.props);
    })
    .catch(function (error) {
      console.log(error);
      props.history.push('/');
    });
  }

  radioChange(){
    if($('#setting-radio0').is(':checked')){
      this.setState({gameDifficulty: 0});
    }
    if($('#setting-radio1').is(':checked')){
      this.setState({gameDifficulty: 1});
    }
    if($('#setting-radio2').is(':checked')){
      this.setState({gameDifficulty: 2});
    }
  }

  saveButton(){
    if(this.state.fetching){
      return(
        <button className='btn btn-primary float-right disabled'>
          <i className="fas fa-spinner fa-spin mr-1"></i>                    
          <span> Save </span>
        </button>
      );
    }
    else{
      return(
        <input className='btn btn-primary float-right' type="submit"  value="Save"/>
      );
    }
  }

  shouldCheck(difficulty){
    return this.state.gameDifficulty === difficulty;
  }

  render() {

    let state    =  this.props.state;
    let username = '';
    if(state.username){
      username = state.username;
    }

    return (
      <div className="row" id="setting-container">
        <div className="col-lg-5 col-md-8 col-center">
          <div className="card bg-dark border-color border-light" id="contact-container">
            
            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-cogs mr-2"></i>
              <span>
                Settings
              </span>
            </div>

            <div className="card-body">

              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label htmlFor="setting-username">Username</label>
                  <input type="text" ref={this.username} defaultValue={username} className="form-control form-control-sm" id="setting-username"  maxLength="15"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="setting-email">Email</label>
                  <input type="email" ref={this.email} className="form-control form-control-sm" id="setting-email" maxLength="30" required/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="setting-password">Password</label>
                  <input type="password" ref={this.password} className="form-control form-control-sm" id="setting-password" maxLength="15" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="setting-difficulty">Difficulty</label>
                  <div className="form-check">
                    <input checked={this.shouldCheck(0)} className="form-check-input" type="radio" name="radio" id="setting-radio0" value="0" onChange={this.radioChange}/>
                    <label className="form-check-label" htmlFor="radio0">
                      Easy
                    </label>
                  </div>
                  <div className="form-check">
                    <input checked={this.shouldCheck(1)}  className="form-check-input" type="radio" name="radio" id="setting-radio1" value="1" onChange={this.radioChange}/>
                    <label className="form-check-label" htmlFor="radio1">
                      Medium
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <input checked={this.shouldCheck(2)} className="form-check-input" type="radio" name="radio" id="setting-radio2" value="2" onChange={this.radioChange}/>
                    <label className="form-check-label" htmlFor="radio2">
                      Hard
                    </label>
                  </div>
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
            
            </div>
          </div>
        </div>

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
