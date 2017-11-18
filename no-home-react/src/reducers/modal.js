const modalDefaultState = {
    modal: false,
    content: null
}

const modalReducer = (state = modalDefaultState, action) => {
    switch (action.type) {
        case 'SET_MODAL_CONTENT':
            return {
                ...state,
                content: action.content
            }
        case 'SET_MODAL_STATE':
            return{
                ...state,
                modal: action.modalState
            }
        default:
            return state;
    }

}

export default modalReducer;