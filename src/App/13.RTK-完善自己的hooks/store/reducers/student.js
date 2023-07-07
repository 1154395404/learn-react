import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: '张军',
        age: 18,
        gander: 1
    }
]
const studentSlice = createSlice(
    {
        name: 'student',
        initialState,
        reducers: {
            addStudent: (state, action) => {
                state.push(action.payload)
            },
            removeStudent: (state, action) => {
                const {id}=action.payload
                const index=state.findIndex((student)=>student.id===id)
                state.splice(index,1)
            }
        },
    }
)


export const {actions:studentActions} = studentSlice

export default studentSlice
