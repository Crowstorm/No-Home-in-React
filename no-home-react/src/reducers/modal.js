const modalDefaultState = {
    modalVisibility: false,
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
                modalVisibility: action.modalVisibility
            }
        default:
            return state;
    }

}

export default modalReducer;