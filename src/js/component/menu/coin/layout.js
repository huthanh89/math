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

        <div className="float-right">
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-coins mr-2 fa-lg"></i>
              <b>
                {acc.format(this.state.coin)}
              </b>
            </div>
            <div className="d-block mb-2">
              <i className="fas fa-fw fa-store mr-2 fa-lg"></i>
              <b>
                {acc.format(this.state.coin)}
              </b>
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
