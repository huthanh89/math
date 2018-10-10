//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewIndex: 0
    };

    this.itemClickedPortfolio = this.itemClickedPortfolio.bind(this);
    this.itemClickedResume    = this.itemClickedResume.bind(this);
    this.itemClickedContact   = this.itemClickedContact.bind(this);
  }

  render() {

    return (
      <div>
        
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
