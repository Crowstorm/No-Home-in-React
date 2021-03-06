const levelDefaultState = {
    level: "second",
    sublevel: "Prison Entrance"
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
        default:
            return state;
    }

}

export default levelReducer;