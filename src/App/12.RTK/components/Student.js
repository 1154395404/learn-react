
import React, {useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {studentActions} from "../store/reducers/student";
import {nanoid} from "nanoid";

const Student = () => {
  const inputRef=useRef(null)
  const students=useSelector(state =>state.student)
  const dispatch=useDispatch()

  const add = () => {
    const {value}=inputRef.current
    if (!value)return

    dispatch(studentActions.addStudent({
      id: nanoid(),
      name: value,
      age: 18,
      gander: 1
    }))
  }

  const del = (student) => {

    dispatch(studentActions.removeStudent(student))
  }
  return <div>
    <h1>学生信息</h1>
    <div>
      <input ref={inputRef} type="text"/>
      <button style={{marginLeft:20}} onClick={add}>添加学生</button>
    </div>

    {
      students.map(student=><div key={student.id} style={{display:'flex',alignItems:'center'}}>
        <pre>
            {JSON.stringify(student,null,2)}
        </pre>
        <button style={{marginLeft:20}} onClick={()=>del(student)}>删除</button>
      </div>)
    }
  </div>
}

export default Student


