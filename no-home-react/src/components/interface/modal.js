//import ReactModal from 'react-modal';
import React from 'react';

import { connect } from 'react-redux'


import {setModalState} from '../../actions/modal'

class Modal extends React.Component{
    handleCloseModal(){
        this.props.dispatch(setModalState(false));
    }

    renderModalText() {
        let currentModal = null;
        switch (this.props.modal.content) {
            case "Jammed":
                currentModal = "The lock's jammed";
                break;
            case "Budge":
                currentModal = "It won't budge";
                break;
            case "Evil":
                currentModal = "There is no way I'm going there. I can feel something wicked lurking in the shadows";
                break;
            default:
                console.log("No modal");
                break;
        }
        return currentModal;
    }
    render(){
        let modalTextRenderer = this.renderModalText();
        return(
            <div className='Modal'>
                <p>{modalTextRenderer}</p>
                <button onClick={this.handleCloseModal.bind(this)}> close </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        modal: state.modal
    }
}

export default connect(mapStateToProps)(Modal);