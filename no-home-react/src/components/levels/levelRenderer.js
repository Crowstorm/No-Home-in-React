import React from 'react';

//levels
import LevelTwo from './level2/level2'

class LevelRenderer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            level: "LevelTwo",
            sublevel: "PrisonEntrance"
        }
    }
    render(){
        return(
            <LevelTwo level={this.state.level}/>
        )
    }
}

export default LevelRenderer;