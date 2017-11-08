const levelDefaultState = {
    level: "first",
    sublevel: "1.splash"
}

const levelReducer = (state = levelDefaultState, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            return [
                ...state,
                //action.placeholder
            ]
        default:
            return state;
    }

}