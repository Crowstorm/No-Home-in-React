import React from 'react';

import './tortureRoom.css'

export default class TortureRoom extends React.Component {
    render() {
        const changeSublevel = this.props.changeSublevel
        
        return (
            <div id='tortureRoom'>
                <div id='tortureChair' />
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Corridor')} alt="" />
            </div>
        )
    }
}