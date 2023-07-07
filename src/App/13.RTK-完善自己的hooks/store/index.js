
import {configureStore} from "@reduxjs/toolkit";
// import student from "./reducers/student";
// import school from "./reducers/school";
import {useEffect, useState} from "react";
import {useDispatch as useOriginDispatch} from "react-redux/es/hooks/useDispatch";
import {schoolActions} from "./reducers/school";
const reducerSlicesContexts = require.context('./reducers/', true, /\.js$/)
const reducerSlices=reducerSlicesContexts.keys().map((path)=>reducerSlicesContexts(path).default)
const reducers=reducerSlices.reduce((preReducers,curReducer)=>({...preReducers,[curReducer.name]:curReducer.reducer}),{})
const allActions=reducerSlices.reduce((preReducers,curReducer)=>({...preReducers,[curReducer.name]:curReducer.actions}),{})

export default configureStore({
    reducer:reducers
})

// todo 感觉挺好用的
export const useDispatchSelector = (selector) => {
    const dispatch = useOriginDispatch()
    const [dispatchMap, setDispatchMap] = useState({});
    useEffect(() => {
        const changeStateMap = {}
        for (const [actionKey,actions] of Object.entries(allActions)) {
            const currentChangeStateMap = {}
            for (const [actionKey,action] of Object.entries(actions)) {
                currentChangeStateMap[actionKey] = (payload) => dispatch(action(payload))
            }
            changeStateMap[actionKey]=currentChangeStateMap
        }
       const selectorDispatch= selector?selector(changeStateMap)||changeStateMap:changeStateMap
        setDispatchMap(selectorDispatch)
    }, []);
    return dispatchMap
}

