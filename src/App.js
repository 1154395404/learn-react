
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Layout, {ThemeContext} from './components/Layout'
import Count from './pages/count'
import { useStore } from './stores'
import { observer } from 'mobx-react-lite'
import {useContext} from "react";
function Message () {
  const context=useContext(ThemeContext)
  return <div>
    <h1>Message</h1>
    <h1>current theme is {context.theme}</h1>
    <button onClick={context.toggleTheme}>toggle</button>
  </div>
}

function News () {
  return <h1>News</h1>
}

function App () {
  const isAuthenticated = true // Change this to your authentication logic
  const store = useStore()
  console.log(store)
  return (
    <div>
      {store.counterStore.count}
      <BrowserRouter>
        <Routes>




          <Route path='/' element={<Layout />} >
            <Route index element={<Message />} />
            <Route path="news" element={<News />} />


          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/count' element={<Count />} />
          {/* <Route path='*' element={!isAuthenticated ? <Navigate to='/login' /> : <Home />} /> */}


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default observer(App)
