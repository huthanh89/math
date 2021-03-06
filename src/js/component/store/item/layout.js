//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc        from 'accounting';
import React      from 'react';
import GameConfig from 'lib/gameconfig.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.clickedBuy = this.clickedBuy.bind(this);
  }

  clickedBuy(){
    this.props.buyItem(this.props.creature);
  }

  isLocked(){
    return this.props.creature.price > this.props.state.coin;
  }

  getActionItem(){
    if(this.isLocked()){
      return (
        <i className="fas fa-fw fa-lock store-item "></i>
      );
    }
    else{

      if(this.props.state.storeCoin < this.props.creature.price ||
          this.props.state.monsters.length >= GameConfig.maxPool
        ){
        return(
          <button className="btn btn-sm btn-secondary store-item disabled">
            Buy
          </button>
        );
      }
      else{
        return(
          <button className="btn btn-sm btn-primary store-item" onClick={this.clickedBuy}>
            Buy
          </button>
        );
      }

    }
  }

  getItemClass(){
    if(this.isLocked()){
      return "store-avatar-image-lock";
    }
    else{
      return "store-avatar-image";
    }
  }

  getItemBonus(){
    if(this.isLocked()){
      return '-';
    }
    else{
      return this.props.creature.bonus;
    }
  }

  render() {

    let creature = this.props.creature;

    return (
      <tr>
        <td>
          <img className={this.getItemClass()} src={`asset/${creature.src}`} alt="avatar"/>
        </td>
        <td>
          <span className="store-item">
            {this.getItemBonus()}
          </span>
        </td>
        <td>
          <span className="store-item">
            {acc.format(creature.price)}
          </span>
        </td>
        <td>
          {this.getActionItem()}
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
