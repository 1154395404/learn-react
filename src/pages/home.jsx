import Layout from '../components/Layout'
import { Routes, Route } from 'react-router'
function Message() {
  return <h1>Message</h1>
}

function News() {
  return <h1>News</h1>
}

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/message" element={<Message />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default Home
