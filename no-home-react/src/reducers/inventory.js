const inventoryDefaultState = {
    items: {
        boltcutters: false,
        vhs: false
    },
    activeItem: {
        boltcutters: false
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
        case 'ACTIVE':
            console.log(action)
            return {
                ...state,
                activeItem: {
                    ...state.activeItem,
                    [action.item]: action.isActive
                }
            }
        default:
            return state;
    }
}

export default inventoryReducer;