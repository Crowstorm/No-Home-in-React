export const pickUp = (item, isPickedUp) => ({
    type: 'PICK_UP',
    item,
    isPickedUp
})

export const activate = (item, isActive) => ({
    type: 'ACTIVE',
    item,
    isActive
})