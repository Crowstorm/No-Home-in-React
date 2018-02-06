import {activate} from '../../../actions/inventory'
import { setModalContent, setModalState } from '../../../actions/modal';

export function chainMechanics(props){
    let clickedElement;
    window.onclick = ((e)=>{
        console.log(props);
        //console.log(clickedElement, 'clickedelement', props.inventory.activeItem.boltcutters)
        if(props.inventory.activeItem.boltcutters===true){
            e.stopPropagation()
            console.log('wciaz true');
            clickedElement = e.target;
            if(clickedElement.id === 'chainChainedDoor'){
                props.activate('boltcutters', false);
                props.setModalContent('Chain_Broken');
                props.setModalState(true);
               props.inventory.activeItem.boltcutters = false; 
            } else if(clickedElement.id === 'boltcuttersId'){
                console.log('Why wont you cooperate')
            } else  {
                props.activate('boltcutters', false);
                props.setModalContent('Cant_Use');
                props.setModalState(true);
                console.log("props.inventory.activeItem.boltcutters", props.inventory.activeItem.boltcutters); 
                props.inventory.activeItem.boltcutters = false; 
            }
        }
    })
}

