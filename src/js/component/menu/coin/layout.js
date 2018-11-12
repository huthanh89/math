//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc       from 'accounting';
import React     from 'react';
import PropTypes from 'prop-types';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div>
        <div className="float-right">
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-medal mr-2 fa-lg"></i>
              <b>
                {acc.format(this.props.coin)}
              </b>
            </div>
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-coins mr-2 fa-lg"></i>
              <b>
                {acc.format(this.props.storeCoin)}
              </b>
            </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  coin:      PropTypes.number.isRequired,
  storeCoin: PropTypes.number.isRequired
};

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
