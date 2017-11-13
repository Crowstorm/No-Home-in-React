import React from 'react';
import './prisonEntrance.css';

export default class PrisonEntrance extends React.Component{
    render(){
        const changeSublevel = this.props.changeSublevel
        return(
            <div id="prisonEntrance">
                <img className="down" src={require("../../../../assets/down.png")} onClick={()=>changeSublevel('dol')} alt=""/>
            </div>

        )
    }
}