import React from 'react';
import './beds.css'

export default class Beds extends React.Component{
    render(){
        const changeSublevel = this.props.changeSublevel
        return(
            <div id='beds'>
                <div id='leftBed' />
                <div id='rightBed' />
                <div id='boltcutters' />
                
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Corridor')} alt="" />
            </div>
        )
    }
}