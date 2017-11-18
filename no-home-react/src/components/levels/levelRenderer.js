import React from 'react';

//connect do redux
import { connect } from 'react-redux'

//levels
import LevelTwo from './level2/level2'

import Modal from '../interface/modal'

import {setModalState, setModalContent} from '../../actions/modal'

class LevelRenderer extends React.Component {

    handleOpenModal(){
        this.props.dispatch(setModalState(true));
    }

    setModalContent(content){
        this.props.dispatch(setModalContent(content));
    }

    renderLevel(){
        let currentLevel = null;
        if (this.props.level.level === "second") {
            currentLevel = <LevelTwo level={this.props.level} handleOpenModal={this.handleOpenModal.bind(this)} setModalContent={this.setModalContent.bind(this)}/>
        } else {
            currentLevel = 'No level'
        }

        return currentLevel;
    }

    renderModal(){
        let modalOpen = null;
        if(this.props.modal.modal === true){
            modalOpen = <Modal />
        }

        return modalOpen;
    }

    render() {
        console.log('store', this.props.level)
        let renderLevelConst = (this.props.level) ? this.renderLevel() : notRendered()

        function notRendered() {
            return 'Not rendered yet'
        }

        let renderModal = this.renderModal();

        return (
            <div>
                {renderModal}
                {renderLevelConst}
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

export default connect(mapStateToProps)(LevelRenderer);