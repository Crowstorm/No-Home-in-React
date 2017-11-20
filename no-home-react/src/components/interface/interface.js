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
                    <p>{this.props.inventory.items.boltcutters.toString()}</p> 
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