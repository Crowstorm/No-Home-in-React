import React from 'react';
import PrisonEntrance from './subscreens/entrance'

class LevelTwo extends React.Component{

    render(){
        // console.log(this.props);
        // console.log(this.props.level);
        return(
            <div className='levels'>
                <PrisonEntrance />
                <button> click change level </button>
            </div>
        )
    }
}

export default LevelTwo;