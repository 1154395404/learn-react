
import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {useDispatch} from "../store/reducers/school";
import {Button, Space} from "antd";

const School = () => {
const changeStateMap=  useDispatch()
  const state=useSelector(state=>state.school)


  const changeName = () => {
    changeStateMap.setName('新名字'+Date.now())
  }
  const changeNumber = () => {
    changeStateMap.setStudentNumber(Date.now())
  }
  return <div>
    <h1>学校信息</h1>
    <div>
      <Space>
        <Button onClick={changeName}>修改学校名称</Button>
        <Button onClick={changeNumber}>修改学生数量</Button>
      </Space>
    </div>
    <pre>
      {JSON.stringify(state,null,2)}
    </pre>
  </div>
}

export default School


