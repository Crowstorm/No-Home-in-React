import React from 'react';
import { connect } from 'react-redux'

//import {setModal} from '../../../../actions/levels'


import './corridor.css';


class Corridor extends React.Component {

    // handleOpenModal(){
    //     console.log(this.props.level);
    //     this.props.dispatch(setModal(true));
    // }

    render() {
        console.log(this.props);
        const changeSublevel = this.props.changeSublevel;
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;

        return (
            <div id='corridor'>
                <div id='jammedCorridor' onClick={() => {setModalContent("Jammed"); handleOpenModal()}}></div>
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