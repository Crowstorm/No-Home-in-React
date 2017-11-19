const inventoryDefaultState = {
    items: {
        boltcutters: false
    }
}

const inventoryReducer = (state = inventoryDefaultState, action) => {
    switch (action.type) {
        case 'PICK_UP_BOLTCUTTERS':
        console.log(action)
            return {
                ...state,
                items: {
                    ...state.items,
                    boltcutters: action.isPickedUp
                }
            }
        default:
            return state;
    }
}

export default inventoryReducer;