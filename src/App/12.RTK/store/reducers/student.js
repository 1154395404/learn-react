import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: '张军',
        age: 18,
        gander: 1
    }
]
const schoolSlice = createSlice(
    {
        name: 'student',
        initialState,
        reducers: {
            addStudent: (state, action) => {
                state.push(action.payload)
            },
            removeStudent: (state, action) => {
                const {id}=action.payload
                state=state.filter((student)=>student.id!==id)
            }
        },
    }
)


export const {actions} = schoolSlice
export default schoolSlice.reducer
