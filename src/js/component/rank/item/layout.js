//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   acc    from 'accounting';
import   React  from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(){
    super();
    this.selectItem = this.selectItem.bind(this);
  }
  
  selectItem(){
    let id = this.props.user._id;
    this.props.history.push(`/visit/${id}`);
  }

  render() {

    let user     = this.props.user;
    let rowClass = '';
    let username = this.props.state.username;

    if(user.username === username){
      rowClass = 'bg-success';
    }

    return(
      <tr key={user._id} className={rowClass} onClick={this.selectItem}>
        <td>
          {this.props.index + 1}
        </td>
        <td>
          {user.username}
        </td>
        <td>
          {acc.format(user.coin)}
        </td>
      </tr>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
