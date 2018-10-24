//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    return (
      <footer className="footer container">
        <div className="row">
          <div className="text-muted">
            <Link to='/contact'>
              <div className="text-muted">
                <span>2018</span> 
                <i className="far fa-copyright fa-fw"></i> 
                <span>TTH</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>        
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
