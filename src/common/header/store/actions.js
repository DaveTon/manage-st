import * as constants from './constants';
export const changeName = () => ({
    type: constants.CHANGE_NAME
})

export const changeItem = (value) => ({
    type: constants.CHANGE_ITEM,
    value
})