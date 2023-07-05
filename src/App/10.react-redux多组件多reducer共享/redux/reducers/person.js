import {ADD_PERSON} from "../constant";

const init = []

const reducer = (preState = init, action) => {
    const {type, data} = action
    let newState = [...preState]
    switch (type) {
        case ADD_PERSON:
            newState = [...newState, data];
            return newState
        default:
            return newState
    }
}
export default reducer
