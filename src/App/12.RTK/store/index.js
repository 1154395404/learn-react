
import {configureStore} from "@reduxjs/toolkit";
import student from "./reducers/student";
import school from "./reducers/school";

export default configureStore({
    reducer:{
        student,
        school
    }
})
