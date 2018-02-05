import {activate} from '../../../actions/inventory'
import { setModalContent, setModalState } from '../../../actions/modal';

export function chainMechanics(props){
    let clickedElement;
    window.onclick = ((e)=>{
        console.log(clickedElement, 'clickedelement', props.inventory.activeItem.boltcutters)
        if(props.inventory.activeItem.boltcutters===true){
            clickedElement = e.target;
            if(clickedElement.id === 'chainChainedDoor'){
                props.dispatch(activate('boltcutters', false))
                props.dispatch(setModalContent('Chain_Broken'));
                props.dispatch(setModalState(true));
            } else if(clickedElement.id === 'boltcuttersId'){
                console.log('Why wont you cooperate')
            } else  {
                console.log('false kurwa')
                props.dispatch(activate('boltcutters', false));
                props.dispatch(setModalContent('Cant_Use'));
                props.dispatch(setModalState(true));
                console.log(props.inventory.activeItem.boltcutters); 
            }
        }
    })
}