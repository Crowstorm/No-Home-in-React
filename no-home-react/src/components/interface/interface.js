import React from 'react';

//connect do redux
import { connect } from 'react-redux'

class Interface extends React.Component{
    render(){
        
        return(
            <div className='interface'>
                <div className='levelName'>
                    Level Name
                    <p>{this.props.level.sublevel}</p>
                </div>

                <div className='inventory'>
                    Inventory
                    <p>{this.props.inventory.items.boltcutters.toString()}</p>
                </div>
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        inventory: state.inventory
    }
}


export default connect(mapStateToProps)(Interface);