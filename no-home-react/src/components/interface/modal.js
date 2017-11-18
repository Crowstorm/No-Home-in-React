//import ReactModal from 'react-modal';
import React from 'react';

import { connect } from 'react-redux'


import {setModal} from '../../actions/levels'

class Modal extends React.Component{
    handleCloseModal(){
        this.props.dispatch(setModal(false));
    }
    render(){
        return(
            <div className='Modal'>test
            <button onClick={this.handleCloseModal.bind(this)}> close </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(Modal);