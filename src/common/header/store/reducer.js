import * as constants from "./constants";

const defaultState = {
    list: ['Dave', 'Tang'],
    focused: true,
    inputValue: 'Hello World'
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case constants.CHANGE_NAME:
            newState.inputValue = false;
            return newState;
        case constants.CHANGE_ITEM:
            newState.inputValue = action.value;
            return newState;

        default:
            return newState;
    }
}