import React from 'react';
import './beds.css'

import {changeBackground} from '../../../../actions/styles'

import {connect} from 'react-redux';

class Beds extends React.Component{
    changeBackground(locationName, newBackground){
        this.props.dispatch(changeBackground(locationName, newBackground))
    }
    render(){
        // background chwilowy  https://i.imgur.com/4dEp3PM.jpg     //   https://i.imgur.com/I9yz7lT.jpg
        const changeSublevel = this.props.changeSublevel
        const handleOpenModal = this.props.handleOpenModal;
        const setModalContent = this.props.setModalContent;
        const handlePickup = this.props.handlePickup;

        //For background change via store
        let bedsBackgroundImage = `url(${this.props.styles.background.beds})`
        
        let bedsStyle = {
            backgroundImage: bedsBackgroundImage
        }
     

        return(
            <div id='beds'  style={bedsStyle}>
                <div id='leftBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='rightBed' onClick={() => {setModalContent("Empty"); handleOpenModal()}}/>
                <div id='boltcutters' onClick={() => {handlePickup('boltcutters', true); this.changeBackground('beds', 'https://i.imgur.com/I9yz7lT.jpg') }}/>
                
                <img className="down" src={require("../../../../assets/down.png")} onClick={() => changeSublevel('Corridor')} alt="" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level,
        inventory: state.inventory,
        styles: state.styles
    }
}

export default connect(mapStateToProps)(Beds);