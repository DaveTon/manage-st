import { constants } from "./constants";

const defaultState = {
    list: ['Dave', 'Tang'],
    focused: true
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case constants.CHANGE_NAME:
            newState.focused = false;
            return newState;

        default:
            return newState;
    }
}