import React from 'react';

//connect do redux
import { connect } from 'react-redux'

//levels
import LevelTwo from './level2/level2'

class LevelRenderer extends React.Component {

    renderek(){
        let levelik = null;
        if (this.props.level === "second") {
            levelik = <LevelTwo level={this.props.level} />
        } else {
            levelik = 'xD'
        }

        return levelik;
    }

    render() {
        console.log('store', this.props.level)
  

        const renderowanie = (this.props.level) ? this.renderek() : notRendered()

        function notRendered() {
            return 'Not rendered yet'
        }




        return (
            <div>
                {renderowanie}
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