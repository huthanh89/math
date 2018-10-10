//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React from 'react';
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

    var viewIndex = this.state.viewIndex;

    function isActive(itemIndex){
      return itemIndex == viewIndex? true:false;
    }

    function classAttribute (active){
      if(active){
        return "nav-item nav-link active"
      }else{
        return "nav-item nav-link"
      }
    }

    function styleAttribute (active){
      if(active){
        return {
          ':hover': {
            'background': 'yellow'
          },
          'fontWeight':  '500',
          'cursor':      'pointer'
        }
      }else{
        return {
          'fontWeight':  'normal',
          'cursor':      'pointer'
        }
      }
    }

    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <form className="form-inline">
              <Link to='/'>
                <button className="btn btn-outline-success" type="button">
                  <i className="fas fa-home fa-lg"></i>
                </button>
              </Link>
            </form>
          </ul>
        </div>
      </nav>
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
