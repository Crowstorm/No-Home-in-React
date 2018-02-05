import React from 'react';

//connect do redux
import { connect } from 'react-redux'

import {activate} from '../../actions/inventory'
import { setModalContent, setModalState } from '../../actions/modal';

class Interface extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

        
    }

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
        let inventoryItemRenderer = this.inventoryItemRender();

        return(
            <div className='interface'>
                <div className='levelName'>
                    Level Name
                    <p>{this.props.level.sublevel}</p>
                </div>

                <div className='inventory'>
                    Inventory
                    {/* <p>{this.props.inventory.items.boltcutters.toString()}</p>  */}
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