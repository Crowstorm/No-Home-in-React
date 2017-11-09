import React from 'react';

//connect do redux
import { connect } from 'react-redux'

//levels
import LevelTwo from './level2/level2'

class LevelRenderer extends React.Component {
    
    render() {
        console.log('store', this.props)
        let levelik = null;
        if (this.props.level === "second") {
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

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(LevelRenderer);