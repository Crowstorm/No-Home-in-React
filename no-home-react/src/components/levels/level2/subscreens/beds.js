import React from 'react';
import './beds.css'

import {connect} from 'react-redux';

import { pickUp } from '../../../../actions/inventory';

class Beds extends React.Component{
    handlePickup(item, bool){
        console.log('pickuop');
        this.props.dispatch(pickUp(item, bool));
        console.log(this.props.inventory)
    }

    render(){
        const changeSublevel = this.props.changeSublevel
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;

        return(
            <div id='beds'>
                <div id='leftBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='rightBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='boltcutters' onClick={() => this.handlePickup('boltcutters', true) }/>
                
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