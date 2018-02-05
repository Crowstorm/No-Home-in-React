import React from 'react';

//connect do redux
import { connect } from 'react-redux'

//actions
import {activate} from '../../actions/inventory'
import { setModalContent, setModalState } from '../../actions/modal';

//inventory components
import ItemRenderer from './itemRenderer';

class Interface extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render(){

        return(
            <div className='interface'>
                <div className='levelName'>
                    Level Name
                    <p>{this.props.level.sublevel}</p>
                </div>

                <div className='inventory'>
                    Inventory
                    {/* <p>{this.props.inventory.items.boltcutters.toString()}</p>  */}
                    <ItemRenderer />
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