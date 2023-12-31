import {createSlice} from "@reduxjs/toolkit";
import {useDispatch as useOriginDispatch} from "react-redux";

const initialState = {
    name: '唐山吃饭🍚学院',
    master: '👩🏻‍🎓',
    age: 99,
    studentNumber: 3000,
    specifyData: {
        '计算机科学系': 1000,
        '美术系': 200,
        '文学院': 333
    }
}
const schoolSlice = createSlice(
    {
        name: 'school',
        initialState,
        reducers: {
            setName: (state, action) => {
                state.name = action.payload
            },
            setStudentNumber: (state, action) => {
                state.studentNumber = action.payload
            },
        },
    }
)


export const {actions: schoolActions} = schoolSlice
export default schoolSlice.reducer

//todo  hooks 自己封装的 省去了引入 useDispatch 与 action 最主要不必引入action
export const useDispatch = () => {
    const dispatch = useOriginDispatch()
    const changeStateMap = {}
    for (const actionKey in schoolActions) {
        const action = schoolActions[actionKey]
        changeStateMap[actionKey] = (payload) => dispatch(action(payload))
    }
    return changeStateMap
}
