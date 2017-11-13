import React from 'react';
import PrisonEntrance from './subscreens/entrance'

import { connect } from 'react-redux'

import {setSublevel} from '../../../actions/levels'

class LevelTwo extends React.Component{

    changeSublevel(name){ 
        this.props.dispatch(setSublevel(name));   
        //console.log('zmiana', this.props.level.sublevel);
    }

    render(){
        // console.log(this.props);
        // console.log(this.props.level);
        return(
            <div className='levels'>
                <PrisonEntrance changeSublevel={this.changeSublevel.bind(this)}/>
                <button onClick={()=>this.changeSublevel('xD')}> click change level </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(LevelTwo);