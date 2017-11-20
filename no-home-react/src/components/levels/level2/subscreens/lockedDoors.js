import React from 'react';
import './lockedDoors.css'

import {connect} from 'react-redux';


class LockedDoors extends React.Component {
    render() {
        const changeSublevel = this.props.changeSublevel;
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        
        let ifBoltcutters = this.props.inventory.items.boltcutters;
        
        return (
            
            <div id="lockedDoors">
                <div id='chainedDoor' onClick={() => {setModalContent("Locked"); handleOpenModal()}}/>
                <div id='chainChainedDoor' onClick={() => { setModalContent(ifBoltcutters ? "Boltcutters_True" : "Boltcutters_False"); handleOpenModal()}}/>
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Prison Entrance')} alt="" />
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        inventory: state.inventory
    }
}

export default connect(mapStateToProps)(LockedDoors);