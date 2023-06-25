import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import App from './App/1.hook获得屏幕尺寸/index'
// import App from './App/2.css模块化/index'
// import App from './App/3.useContext使用/index'
// import App from './App/4.useReducer使用/index'
// import App from './App/5.redux使用完成一个计数器/index'
// import App from './App/6.redux使用完成一个计数器-完整版/index'
// import App from './App/7.测试ref'
import App from './App/8.redux使用完成一个计数器-异步action版'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <App />

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
