import React from 'react';
import PrisonEntrance from './subscreens/entrance'

import { connect } from 'react-redux'

import {setLevel} from '../../../actions/levels'

class LevelTwo extends React.Component{

    changeLevel(){ 
        this.props.dispatch(setLevel('xD'));   
        console.log('zmiana', this.props.level)    
    }

    render(){
        // console.log(this.props);
        // console.log(this.props.level);
        return(
            <div className='levels'>
                <PrisonEntrance />
                <button onClick={()=>this.changeLevel()}> click change level </button>
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