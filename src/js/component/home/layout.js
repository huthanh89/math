//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import React      from 'react';
import classNames from 'classnames';
import Expense    from './component/expense';
import Entry      from './component/entry';
import Budget     from './component/budget';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = _.assignIn(this.state, {
      viewIndex: 0
    });

    this.itemClicked = this.itemClicked.bind(this);

  }

  itemClicked(index){
    this.setState({
      viewIndex: index
    });
  }
  
  itemClasses(index) {
    return classNames('nav-link', {
      active: this.state.viewIndex==index
    });
  }

  render() {

    return (

      <div>
        <div className="row">

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-calculator fa-fw"></i>
                  <span>
                    Calculator
                  </span>
                </h5>
                <h6 className="card-subtitle mb-2">Add an entry to the list.</h6>
                <Expense {...this.props}/>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Entry {...this.props}/>
              </div>
            </div>
          </div>

        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-search-plus fa-fw"></i>
              <span>
                Budget Review
              </span>
            </h5>
            <Budget {...this.props}/>
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
