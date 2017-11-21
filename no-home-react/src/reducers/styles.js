const stylesDefaultState = {
    background:{
        beds: 'https://i.imgur.com/4dEp3PM.jpg'
        // './assets/bedsA.jpg' 
    }
}

const stylesReducer = (state = stylesDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            console.log(action)
            return {
                ...state,
                background: {
                    ...state.background,
                    [action.locationName]: action.newBackground
                }
            }
        default:
            return state;
    }
}

export default stylesReducer;