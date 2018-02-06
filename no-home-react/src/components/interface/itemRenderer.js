import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {activate} from '../../actions/inventory'
import { setModalContent, setModalState } from '../../actions/modal';
import inventoryReducer from '../../reducers/inventory';

//funkcje
import {chainMechanics} from './itemMechanics/chainMechanics';


class ItemRenderer extends React.Component{
    // componentWillReceiveProps(next) {
    //     console.log(next);
    //     this.inventoryItemRender(next);
    // }
    
    // inventoryItemRender(nextInventory){
    //         const inventory1 = nextInventory ? nextInventory : this.props.inventory;
    //         console.log('invento', inventory1)
    //         let inventoryItem = null;
    //         if(inventory1.items.boltcutters){
    //             inventoryItem = <a className={inventory1.activeItem.boltcutters ? "ghost-button items active " : "ghost-button items"} href="#" id='boltcuttersId' onClick={(nextInventory) => this.handleBoltcuttersClicked(nextInventory)}>Boltcutters</a>
    //         }
    //         return inventoryItem;
    // }
    
    handleBoltcuttersClicked(){
            this.props.activate('boltcutters', true);
            setTimeout(() => chainMechanics(this.props), 100)
        }

    inventoryItemRender(){
        let inventoryItem = null;
        if(this.props.inventory.items.boltcutters){
            inventoryItem = <a className={this.props.inventory.activeItem.boltcutters ? "ghost-button items active " : "ghost-button items"} href="#" id='boltcuttersId' onClick={() => this.handleBoltcuttersClicked()}>Boltcutters</a>
        }
        return inventoryItem;
    }

    render(){
        let renderItems = this.inventoryItemRender();
        console.log('Nowe propsy: ', this.props)
        return(
            <div>
                {renderItems}
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

function mapDispatchToProps(dispatch) {
    //dispatch w propsach
    return(
        bindActionCreators({activate: activate, setModalState: setModalState, setModalContent: setModalContent }, dispatch)
    ) 
  }

export default connect(mapStateToProps, mapDispatchToProps)(ItemRenderer);
