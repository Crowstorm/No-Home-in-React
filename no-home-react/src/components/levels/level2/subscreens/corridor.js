import React from 'react';
import { connect } from 'react-redux'

import './corridor.css';

import jammed from './assets/jammed.mp3'


class Corridor extends React.Component {

    // handleOpenModal(){
    //     console.log(this.props.level);
    //     this.props.dispatch(setModal(true));
    // }
    playSound(){
        const jammed = document.getElementById('jammed');
        console.log(jammed)
        jammed.play();
    }

    render() {
        const changeSublevel = this.props.changeSublevel;
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        
        

        return (
            <div id='corridor'>
            	<audio id="jammed" src={jammed} type="audio/mpeg"></audio>
	            <audio id="budge" src="./assets/budge.mp3"></audio>
                <div id='jammedCorridor' onClick={() => {setModalContent("Jammed"); handleOpenModal(); this.playSound()}}></div>
                <div id='budgeCorridor' onClick={() => {setModalContent("Budge"); handleOpenModal()}}/>
                <div id='evilCorridor' onClick={() => {setModalContent("Evil"); handleOpenModal()}} />
                <div id='toBeds' onClick={() => changeSublevel('Beds')} />
                <div id='tortureRoomDiv' onClick={() => changeSublevel('Torture Room')} />
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Prison Entrance')} alt="" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(Corridor);