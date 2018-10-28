//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $      from 'jquery';
import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.radio = this.radio.bind(this);
    this.state = {
      difficulty: this.props.state.difficulty
    };
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
    $(`#setting-radio${this.state.difficulty}`).prop('checked', true);
  }

  render() {

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

              <h4>
                Difficulty
              </h4>

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

              <hr></hr>
              
              <div className="row">
                <div className="col-12">
                  <Link to='/adfullview'>
                    <button className="btn btn-info mt-2 float-right">
                      <i className="fas fa-arrow-left"></i>
                      <span> Back </span>
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
