//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Ad           from './ad/layout.js';
import Reward       from './reward/layout.js';
import React        from 'react';
import { Link }     from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//

class Component extends React.Component {

    constructor(props){
        
        super(props);

        // Set counter for how many seconds until showing treasure chest.

        this.counter = 5;
        
        this.clock = this.clock.bind(this);
        this.clickedHome = this.clickedHome.bind(this);
        this.state = {
            showReward: false,
            counter:    this.counter
        };
    }

    clickedHome(){
        if(this.timer){
            window.clearInterval(this.timer);
        }
    }

    clock() {
        let counter = this.counter--;
        if(counter < 2){
            window.clearInterval(this.timer);
            this.setState({
                showReward: true
            });
        }
        this.setState({
            counter: counter
        });
    }

    getView(){
        if(this.state.showReward){
            return(
                <div id="loot-container">
                    <Reward {...this.props}/>
                    <span className="d-block">
                        Click Me
                    </span>
                </div>
            );
        }
        else{
            return(<Ad/>);
        }
    }

    componentDidMount(){
        if(!this.props.state.gameCompleted){
            this.timer = window.setInterval(this.clock, 1000);
        }
    }

    render () {

        // If user tries to back space from summary, redirect them to home.

        if(this.props.state.gameCompleted){
            return (
                <Redirect to="/"/>
            );
        }

        return (
            <div className="adsense-fullview-container">
                <div className="adsense-fullview">
                    <Link to='/summary'>
                        <button className="d-block float-right" onClick={this.clickedHome} >
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </Link>
                    <span id="loot-timer">
                        Loot Reward in 
                        <span id="loot-timer-number">
                            {this.counter}
                        </span>
                    </span>
                    {this.getView()}
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