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

  }

  render() {

    return (
      <div>

        <div className="row">
          <div className="col-12">
            <p type="text" id="game-question" > 
              50 X 50 = {this.state.viewType}
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

}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
