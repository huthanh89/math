//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom'

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
            <p type="text" id="menu-title" > 
              Select a level to play
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            <Link to='/game'>
              <button className="btn btn-primary btn-lg menu-button">
                <span>Add</span>
                <i className="fas fa-plus fa-lg"></i>
              </button>
            </Link>

          
          
          
          </div>
          <div className="col-12">
            <button className="btn btn-primary btn-lg menu-button">
              <span>Subtract</span>
              <i className="fas fa-minus fa-lg"></i>
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary btn-lg menu-button">
              <span>Multiply</span>
              <i className="fas fa-times fa-lg"></i>
            </button>
          </div>
          <div className="col-12">
            <button className="btn btn-primary btn-lg menu-button">
              <span>Divide</span>
              <i className="fas fa-divide fa-lg"></i>
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
