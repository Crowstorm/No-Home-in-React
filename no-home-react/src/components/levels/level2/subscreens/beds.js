import React from 'react';
import './beds.css'

import {connect} from 'react-redux';

class Beds extends React.Component{

    render(){
        const changeSublevel = this.props.changeSublevel
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        const handlePickup = this.props.handlePickup;

        return(
            <div id='beds'>
                <div id='leftBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='rightBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='boltcutters' onClick={() => handlePickup('boltcutters', true) }/>
                
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Corridor')} alt="" />
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

export default connect(mapStateToProps)(Beds);