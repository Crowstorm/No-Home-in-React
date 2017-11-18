import React from 'react';
import ReactModal from 'react-modal';

import './corridor.css';


export default class Entrance extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
        console.log('clicked')
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const changeSublevel = this.props.changeSublevel;

        const test = <p> shit </p>;

        return (
            <div id='corridor'>
                <div id='jammedCorridor' onClick={this.handleOpenModal}></div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        shouldCloseOnOverlayClick={true}
                    >
                        {/* <p>The lock's jammed</p> */}
                        {test}
                        <button onClick={this.handleCloseModal}>Close</button>
                    </ReactModal>
                

                <div id='budgeCorridor' />
                <div id='evilCorridor' />
                <div id='toBeds' onClick={() => changeSublevel('Beds')} />
                <div id='tortureRoomDiv' onClick={() => changeSublevel('Torture Room')} />
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Prison Entrance')} alt="" />
            </div>
        )
    }
}

