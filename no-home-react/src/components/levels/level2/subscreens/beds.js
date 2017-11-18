import React from 'react';
import './beds.css'

export default class Beds extends React.Component{
    render(){
        const changeSublevel = this.props.changeSublevel
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        
        return(
            <div id='beds'>
                <div id='leftBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='rightBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='boltcutters' />
                
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Corridor')} alt="" />
            </div>
        )
    }
}