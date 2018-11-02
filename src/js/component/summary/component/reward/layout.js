//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _     from 'lodash';
import acc   from 'accounting';
import React from 'react';

//-----------------------------------------------------------------------------//

const Difficulty = {
  0: 'Easy',
  1: 'Medium',
  2: 'Hard'
};

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  getMonsterReward(){
    let reward = 0;
    this.props.state.monsters.forEach(function(monster){
      reward += monster.reward;
    });
    return reward;
  }

  getReward(){
    let reward = 0;
    this.props.state.levels.forEach(function(level){
      if(level.correct){
        reward += level.reward;
      }
    });
    return reward;
  }

  getTotalCoin(){
    let reward = this.getReward();
    let loot   = this.props.state.loot;
    return reward + loot + this.getMonsterReward();
  }

  render() {

    return (
      <div id="summary-reward-container">

        <div className="row">
            <div className="col-6">
              <div className="review-reward">
                <b className="d-block">
                  Difficulty:
                </b>
                <span className="review-reward-number">
                  {Difficulty[this.props.state.difficulty]} 
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="review-reward">
                <b className="d-block">
                  Total Reward:
                </b>
                <div>
                  <span className="review-reward-number ">
                    {acc.format(this.getTotalCoin())}
                  </span>
                  <i className="fas fa-coins fa-lg"></i>
                </div>
              </div>
            </div>
        </div>

        <div id="review-container">
          <table className="table table-hover table-sm table-dark table-striped">
            <thead>
              <tr>
                <th>Reward</th>
                <th>Collected</th>
              </tr>
            </thead>
              <tbody>
                <tr className="bg-info">
                  <td>
                    Gameplay
                  </td>
                  <td>
                    {acc.format(this.getReward())}
                  </td>
                </tr>
                <tr className="bg-info">
                  <td>
                    Monster Reward
                  </td>
                  <td>
                    {acc.format(this.getMonsterReward())}
                  </td>
                </tr>
                <tr className="bg-info">
                  <td>
                    Treasure Loot
                  </td>
                  <td>
                    {acc.format(this.props.state.loot)}
                  </td>
                </tr>
              </tbody>
          </table>

        </div>

      </div>
    );
  }

}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
