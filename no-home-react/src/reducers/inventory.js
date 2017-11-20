const inventoryDefaultState = {
    items: {
        boltcutters: false,
        vhs: true
    }
}

const inventoryReducer = (state = inventoryDefaultState, action) => {
    switch (action.type) {
        case 'PICK_UP':
        console.log(action)
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.item]: action.isPickedUp
                }
            }
        default:
            return state;
    }
}

export default inventoryReducer;