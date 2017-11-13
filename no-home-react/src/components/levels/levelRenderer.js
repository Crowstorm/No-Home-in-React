import React from 'react';

//connect do redux
import { connect } from 'react-redux'

//levels
import LevelTwo from './level2/level2'

class LevelRenderer extends React.Component {

    renderLevel(){
        let currentLevel = null;
        if (this.props.level.level === "second") {
            currentLevel = <LevelTwo level={this.props.level} />
        } else {
            currentLevel = 'No level'
        }

        return currentLevel;
    }

    render() {
        console.log('store', this.props.level)
        let renderLevelConst = (this.props.level) ? this.renderLevel() : notRendered()

        function notRendered() {
            return 'Not rendered yet'
        }

        return (
            <div>
                {renderLevelConst}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(LevelRenderer);