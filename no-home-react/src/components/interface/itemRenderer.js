import React from 'react';
import { connect } from 'react-redux'

import {activate} from '../../actions/inventory'
import { setModalContent, setModalState } from '../../actions/modal';


class ItemRenderer extends React.Component{

    chainMechanics(){
        let clickedElement;
        window.onclick = ((e)=>{
            console.log(clickedElement, 'clickedelement', this.props.inventory.activeItem.boltcutters)
            if(this.props.inventory.activeItem.boltcutters===true){
                clickedElement = e.target;
                if(clickedElement.id === 'chainChainedDoor'){
                    this.props.dispatch(activate('boltcutters', false))
                    this.props.dispatch(setModalContent('Chain_Broken'));
                    this.props.dispatch(setModalState(true));
                } else if(clickedElement.id === 'boltcuttersId'){
                    console.log('Why wont you cooperate')
                } else {
                    this.props.dispatch(activate('boltcutters', false));
                    this.props.dispatch(setModalContent('Cant_Use'));
                    this.props.dispatch(setModalState(true));
                    console.log(this.props.inventory.activeItem.boltcutters); 
                }
            }
        })
    }

    handleBoltcuttersClicked(){
        this.props.dispatch(activate('boltcutters', true));
        console.log('klik');
        setTimeout(() => this.chainMechanics(), 100)
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


export default connect(mapStateToProps)(ItemRenderer);
