const initState={
    count:1,
}
const reducer=(preState,action)=>{
    const newState={...preState}
    const {type}=action
    switch (type){
        case 'add' :newState.count++ ;return newState
        case 'sub' :newState.count-- ;return newState
    }
    return preState

}

export {
    initState,
    reducer
}
