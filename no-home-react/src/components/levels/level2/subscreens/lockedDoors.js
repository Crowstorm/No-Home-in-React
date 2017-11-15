import React from 'react';
import './lockedDoors.css'

export default class LockedDoors extends React.Component {
    render() {
        const changeSublevel = this.props.changeSublevel;
        return (
            <div>
                <div id="lockedDoors">test</div>
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Prison Entrance')} alt="" />
            </div>
        )
    }
}