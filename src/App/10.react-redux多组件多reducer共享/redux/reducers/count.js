import {DECREMENT, INCREMENT} from "../constant";

const initState={
    count:1,
}
const reducer=(preState=initState,action)=>{

    console.log(preState,action)
    const newState={...preState}
    const {type,data}=action
    switch (type){
        case INCREMENT : newState.count+=data; return newState;
        case DECREMENT : newState.count-=data; return newState;
        default:return preState
    }
}
export default reducer
