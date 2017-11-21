import React from 'react';
import { connect } from 'react-redux'

import './corridor.css';

import jammedSoundPath from './assets/jammed.mp3'
import budgeSoundPath from './assets/budge.mp3'


class Corridor extends React.Component {

    // handleOpenModal(){
    //     console.log(this.props.level);
    //     this.props.dispatch(setModal(true));
    // }
    playSound(soundName){
        this.refs[soundName].play();
    }

    render() {
        const changeSublevel = this.props.changeSublevel;
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        
        

        return (
            <div id='corridor'>
            	<audio ref="jammed" src={jammedSoundPath} type="audio/mpeg"></audio>
	            <audio ref="budge" src={budgeSoundPath}></audio>
                <div id='jammedCorridor' onClick={() => {setModalContent("Jammed"); handleOpenModal(); this.playSound('jammed')}}></div>
                <div id='budgeCorridor' onClick={() => {setModalContent("Budge"); handleOpenModal(); this.playSound('budge')}}/>
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