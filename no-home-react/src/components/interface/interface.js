import React from 'react';

//connect do redux
import { connect } from 'react-redux'

import {activate} from '../../actions/inventory'

class Interface extends React.Component{


    // chainMechanics(){
    //     //console.log(this.props.inventory);
    //    // if(this.props.inventory.activeItem.boltcutters===true){
    //         //this.test2();
            
    //         //sproboj refem
    //         window.onclick = ((e)=>{
    //             let clickedElement;
    //             let count=0;
    //             clickedElement = e.target;
    //             // console.log(clickedElement, 'klikniety')
    //             if(this.props.inventory.activeItem.boltcutters===true){
    //                 count++;
                    
    //                 console.log(clickedElement.id);
    //                 if(clickedElement.id === 'chainChainedDoor'){
    //                     alert('you got it');
    //                     this.props.dispatch(activate('boltcutters', false))
                        
    //                 } else if (clickedElement.id !== 'chainChainedDoor' && count ===1)  {
    //                     count = 0;
    //                     console.log(count)
    //                     this.props.dispatch(activate('boltcutters', false));
    //                     alert('try again')
    //                     console.log(this.props.inventory.activeItem.boltcutters);
                        
    //                 }
    //             }    
    //         })
    // }

    chainMechanics(){
        let clickedElement;
        window.onclick = ((e)=>{
            console.log(clickedElement, 'clickedelement', this.props.inventory.activeItem.boltcutters)
            if(this.props.inventory.activeItem.boltcutters===true){
                clickedElement = e.target;
                if(clickedElement.id === 'chainChainedDoor'){
                    alert('you got it');
                    this.props.dispatch(activate('boltcutters', false))
                } else if(clickedElement.id === 'test'){
                    console.log('Why wont you cooperate')
                } else {
                    this.props.dispatch(activate('boltcutters', false));
                    alert('try again')
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
            inventoryItem = <a className="ghost-button items" href="#" id='test'onClick={() => this.handleBoltcuttersClicked()}>Boltcutters</a>
        }
        return inventoryItem;

        // let tits = null;
        // let inventoryItem = Object.keys(this.props.inventory.items).map((item) =>{
        //     console.log(this.props.inventory.items[item].toString())
        //     if(this.props.inventory.items[item] === true){
                
        //         tits.push({item}.toString())
        //         //<a className="ghost-button items" href="#" >{item}</a>
        //     }
        // })
        // return tits;
       
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