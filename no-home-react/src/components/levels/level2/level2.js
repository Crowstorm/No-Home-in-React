import React from 'react';

//subelevels
import PrisonEntrance from './subscreens/entrance'
import LockedDoors from './subscreens/lockedDoors'
import Corridor from './subscreens/corridor'
import TortureRoom from './subscreens/tortureRoom'
import Beds from './subscreens/beds'

import { connect } from 'react-redux'

import { setSublevel } from '../../../actions/levels'

class LevelTwo extends React.Component {

    changeSublevel(name) {
        this.props.dispatch(setSublevel(name));
    }


    renderSublevel() {
        let currentSublevel = null;
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;

        switch (this.props.level.sublevel) {
            case "Prison Entrance":
                currentSublevel = <PrisonEntrance changeSublevel={this.changeSublevel.bind(this)} />;
                break;
            case "Locked Doors":
                currentSublevel = <LockedDoors changeSublevel={this.changeSublevel.bind(this)} />
                break;
            case "Corridor":
                currentSublevel = <Corridor changeSublevel={this.changeSublevel.bind(this)} handleOpenModal={handleOpenModal} setModalContent={setModalContent}/>
                break;
            case 'Torture Room':
                currentSublevel = <TortureRoom changeSublevel={this.changeSublevel.bind(this)} />;
                break;
            case 'Beds':
                currentSublevel = <Beds changeSublevel={this.changeSublevel.bind(this)} />;
                break;
            default:
                console.log("No sublevel rendered");
                break;
        }
        return currentSublevel;
    }

    render() {

       

        let sublevelRenderer = this.renderSublevel();
        return (
            <div className='levels'>
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