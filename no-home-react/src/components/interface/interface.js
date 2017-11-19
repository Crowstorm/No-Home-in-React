import React from 'react';

//connect do redux
import { connect } from 'react-redux'

class Interface extends React.Component{

    inventoryItemRender(){
        let inventoryItem = null;
        if(this.props.inventory.items.boltcutters){
            inventoryItem = <a className="ghost-button items" href="#">Boltcutters</a>
        }
        return inventoryItem;
    }

    render(){
        let inventoryItemRenderer = this.inventoryItemRender();

        return(
            <div className='interface'>
                <div className='levelName'>
                    Level Name
                    <p>{this.props.level.sublevel}</p>
                </div>

                <div className='inventory'>
                    Inventory
                    {/* <p>{this.props.inventory.items.boltcutters.toString()}</p> */}
                    {inventoryItemRenderer}
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