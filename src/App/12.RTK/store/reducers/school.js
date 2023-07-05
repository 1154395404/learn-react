import {createSlice} from "@reduxjs/toolkit";
const initialState={
    name:'唐山吃饭🍚学院',
    master:'sb',
    age:99,
    studentNumber:3000
}
const schoolSlice = createSlice(
    {
        name: 'school',
        initialState,
        reducers:{
            setName:(state, action)=>{
                state.name=action.payload
            },
            setStudentNumber:(state, action)=>{
                state.studentNumber=action.payload
            },
        },
    }
)


export const {actions}=schoolSlice
export default schoolSlice.reducer
