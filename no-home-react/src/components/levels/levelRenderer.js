import React from 'react';

//levels
import LevelTwo from './level2/level2'

class LevelRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "second",
            sublevel: "PrisonEntrance"
        }
    }
    render() {
        let levelik = null;
        if (this.state.level === "second") {
            levelik = <LevelTwo level={this.state.level} />
        } else {
            levelik = 'xD'
        }
        return (
            <div>
                {levelik}
            </div>
        )
    }
}

export default LevelRenderer;