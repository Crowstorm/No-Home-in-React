const levelDefaultState = {
    level: "second",
    sublevel: "Prison Entrance",
    modal: false
}

const levelReducer = (state = levelDefaultState, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            return {
                ...state,
                level: action.levelName
            }
        case 'SET_SUBLEVEL':
            return{
                ...state,
                sublevel: action.sublevelName
            }
        case 'MODAL':
            return{
                ...state,
                modal: action.modalState
            }
        default:
            return state;
    }

}

export default levelReducer;