//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import acc    from 'accounting';
import Swal   from 'sweetalert';
import Chance from 'chance';
import React  from 'react';

//-----------------------------------------------------------------------------//

var chance = new Chance();

//-----------------------------------------------------------------------------//

class Component extends React.Component {

    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this);
        this.opened = false;
    }

    calcLoot(){
        let reward = 100;
        this.props.state.levels.forEach(function(level){
            if(level.correct){
                reward += level.reward;
            }
        });

        let min = Math.floor(reward / 2);
        let max = reward * 2;

        return chance.integer({ min: min, max: max });
    }

    clicked(){

        let view = this;

        if(!this.opened){
            this.opened = true;
            let loot    = this.calcLoot();
            this.props.actionSetLoot(loot);
            Swal({
                title:  `You've gained an extra ${acc.format(loot)} coins!`,
                icon:   "success",
                button: "Collect",
            }).then(function () {
                view.props.history.push('/summary');
            });
        }
    }

    render () {
        let treasure = 'treasure.png';
        return (
            <div>
                <img className="loot-treasure-image" onClick={this.clicked} src={`asset/${treasure}`} alt="treasure"/>
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//