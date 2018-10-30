//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $      from 'jquery';
import   axios  from 'axios';
import   React  from 'react';
import { Link } from 'react-router-dom';
import { css }  from 'glamor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//-----------------------------------------------------------------------------//

function showToast(message){
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
    toast.dismiss(1);
  }, 2000);

}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.save  = this.save.bind(this);
    this.radio = this.radio.bind(this);
    this.changedName = this.changedName.bind(this);
  }

  changedName(){
    this.props.actionSetUserName($('#setting-username').val());
  }

  save(){
    axios.put('/api/setting', {
      userID:     this.props.state.userID,
      username:   this.props.state.username,
      difficulty: this.props.state.difficulty
    })
    .then(function(){
      showToast("Settings Updated!");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  radio(){
    if($('#setting-radio0').is(':checked')){
      this.props.actionDifficulty(0);
    }
    if($('#setting-radio1').is(':checked')){
      this.props.actionDifficulty(1);
    }
    if($('#setting-radio2').is(':checked')){
      this.props.actionDifficulty(2);
    }
  }

  componentDidMount(){
    $(`#setting-radio${this.props.state.difficulty}`).prop('checked', true);
  }

  render() {

    let state    =  this.props.state;
    let username = '';
    if(state.username){
      username = state.username;
    }

    return (
      <div className="row" id="setting-container">
        <div className="col-lg-4 col-center">
          <div className="card bg-dark border-color border-light" id="contact-container">
            
            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-cogs mr-2"></i>
              <span>
                Settings
              </span>
            </div>

            <div className="card-body">

              <div className="form-group">
                <label htmlFor="setting-username">Username</label>
                <input type="text" value={username} onChange={this.changedName} className="form-control form-control-sm" id="setting-username"  maxLength="15"/>
              </div>

              <div className="form-group">
                <label htmlFor="setting-difficulty">Difficulty</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio" id="setting-radio0" value="0" onChange={this.radio}/>
                  <label className="form-check-label" htmlFor="radio0">
                    Easy
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio" id="setting-radio1" value="1" onChange={this.radio}/>
                  <label className="form-check-label" htmlFor="radio1">
                    Medium
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="radio" id="setting-radio2" value="2" onChange={this.radio}/>
                  <label className="form-check-label" htmlFor="radio2">
                    Hard
                  </label>
                </div>
              </div>


              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <button className="btn btn-primary ml-2 float-right" onClick={this.save}>
                    <span> Update </span>
                  </button>
                  <Link to='/'>
                    <button className="btn btn-info float-right">
                      <i className="fas fa-arrow-left"></i>
                      <span> Back </span>
                    </button>
                  </Link>
                </div>
              </div>
            
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
