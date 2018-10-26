//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc        from 'accounting';
import React      from 'react';
import localStore from 'store';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      coin: this.getCoinCount()
    };
  }

  // Get coins from local storage.

  getCoinCount (){

    let coin = localStore.get('coin');

    if(coin === undefined){
      localStore.set('coin', 0);
      coin = 0;
    }

    return coin;
  
  }


  render() {

    return (
      <div>
        
        <div className="row text-white mb-2">
          <div className="col-12">

            <div className="float-right">
              <i className="fas fa-coins mr-2 fa-lg"></i>
              <b id="menu-coin" >
                {acc.format(this.state.coin)}
              </b>
            </div>

            <div>
              <i className="fas fa-trophy mr-2 fa-lg"></i>
              <b id="menu-place" >
                1
              </b>
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
