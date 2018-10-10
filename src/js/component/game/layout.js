//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import Star  from './component/star/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewIndex: 0
    };

    console.log(props);

    this.itemClickedPortfolio = this.itemClickedPortfolio.bind(this);
    this.itemClickedResume    = this.itemClickedResume.bind(this);
    this.itemClickedContact   = this.itemClickedContact.bind(this);
  }

  render() {

    return (
      <div id="game-container">

        <Star/>

        <div className="row">
          <div className="col-12">
            <p type="text" id="game-timer" > 
              <span>Time: </span>
              <span></span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p type="text" id="game-question" > 
              50 X 50 = ?
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button">
              <span>Answer 1</span>
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button">
              <span>Answer 2</span>
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button">
              <span>Answer 3</span>
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-lg game-button">
              <span>Answer 4</span>
            </button>
          </div>
        </div>
        

      </div>

    );
  }

  itemClickedPortfolio() {
    this.setState({
      viewIndex: 0
    });
    this.props.updateView(0);
  }

  itemClickedResume() {
    this.setState({
      viewIndex: 1
    });
    this.props.updateView(1);
  }

  itemClickedContact() {
    this.setState({
      viewIndex: 2
    });
    this.props.updateView(2);
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
