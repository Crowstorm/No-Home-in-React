import React from 'react';
import './corridor.css';


export default class Entrance extends React.Component {
    render() {
        const changeSublevel = this.props.changeSublevel
        return (
            <div id='corridor'>
                <div id='toBeds' onClick={() => changeSublevel('Beds')} />
                <div id='tortureRoomDiv' onClick={() => changeSublevel('Torture Room')}/>
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Prison Entrance')} alt="" />
            </div>
        )
    }
}