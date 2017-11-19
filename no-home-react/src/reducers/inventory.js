const inventoryDefaultState = {
    items: {
        boltcutters: false
    }
}

const inventoryReducer = (state = inventoryDefaultState, action) => {
    switch (action.type) {
        case 'PICK_UP_BOLTCUTTERS':
            return {
                ...state,
                items: {
                    // ...state.items,
                    boltcutters: action.IsPickedUp
                }
            }
        default:
            return state;
    }
}

export default inventoryReducer;