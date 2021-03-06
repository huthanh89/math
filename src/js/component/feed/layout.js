//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React     from 'react';
import   Info      from './info/layout.js';
import   Table     from './table/layout.js';
import   PropTypes from 'prop-types';
import { Link }    from 'react-router-dom';
import   axios     from 'axios';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: false,
    };
    this.feedItem = this.feedItem.bind(this);
  }

  feedItem(monster){

    this.setState({fetching: true});

    let view = this;

    axios.put('/api/feed', {
      userID:   this.props.userID,
      targetID: this.props.match.params.id,
      feedID:   monster.monsterID
    })
    .then(function(response){
      view.props.actionUpdateMonsters(response.data);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

  render() {

    return (
      <div className="row" id="feed-container">

        <div className="col-lg-7 col-center">
          <div className="card border-light">

            <div className="card-header border-light text-center">
              <i className="fas fa-fw fa-utensils mr-2"></i>
              <span>
                Feed
              </span>
            </div>

            <div className="card-body">

              <Info  {...this.props}/>
              
              <hr></hr>

              <Table {...this.props} feedItem={this.feedItem}/>

              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <Link to='/pool'>
                    <button className="btn btn-info float-left">
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

Component.propTypes = {
  userID: PropTypes.string,
};

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
