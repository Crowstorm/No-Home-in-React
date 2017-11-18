import React from 'react';
import { connect } from 'react-redux'

import {setModal} from '../../../../actions/levels'


import './corridor.css';


class Corridor extends React.Component {

    handleOpenModal(){
        console.log(this.props.level);
        this.props.dispatch(setModal(!this.props.level.modal));
    }

    render() {
        const changeSublevel = this.props.changeSublevel;


        return (
            <div id='corridor'>
                <div id='jammedCorridor' onClick={this.handleOpenModal.bind(this)}></div>
                <div id='budgeCorridor' />
                <div id='evilCorridor' />
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