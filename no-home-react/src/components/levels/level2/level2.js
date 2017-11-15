import React from 'react';
import PrisonEntrance from './subscreens/entrance'
import LockedDoors from './subscreens/lockedDoors'

import { connect } from 'react-redux'

import {setSublevel} from '../../../actions/levels'

class LevelTwo extends React.Component{

    changeSublevel(name){ 
        this.props.dispatch(setSublevel(name));   
        //console.log('zmiana', this.props.level.sublevel);
    }

    renderSublevel(){
        let currentSublevel = null;
        if (this.props.level.sublevel === "Prison Entrance") {
            currentSublevel = <PrisonEntrance changeSublevel={this.changeSublevel.bind(this)}/>
        } else if (this.props.level.sublevel === "Locked Doors"){
            currentSublevel = <LockedDoors />
        } else {
            currentSublevel = 'No level'
        }

        return currentSublevel;
    }

    render(){

        let sublevelRenderer = this.renderSublevel();
        return(
            <div className='levels'>
                {/* <PrisonEntrance changeSublevel={this.changeSublevel.bind(this)}/> */}
                {sublevelRenderer}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(LevelTwo);