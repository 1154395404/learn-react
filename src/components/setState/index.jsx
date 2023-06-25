import { useState } from 'react'

function SetState(params) {
  const [count, setCount] = useState(0)
  const sub = () => {
    if (count === 0) return
    setCount(count - 1)
  }
  const add = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={sub}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={add}>+</button>
    </div>
  )
}

export default SetState
