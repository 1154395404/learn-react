
const initState={
    count:1,
}
const reducer=(preState=initState,action)=>{

    console.log(preState,action)
    const newState={...preState}
    const {type}=action
    switch (type){
        case 'add' :newState.count++ ;return newState
        case 'sub' :newState.count-- ;return newState
        default:return preState
    }
}
export default reducer
