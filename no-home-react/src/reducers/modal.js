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
        default:
            return state;
    }

}

export default modalReducer;