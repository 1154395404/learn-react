import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

function UseEffect(params) {
  const [count, setCount] = useLocalStorage('count', 0)
  const sub = () => {
    if (count === 0) return
    setCount(count - 1)
  }
  const add = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    // console.log(count)
  })
  return (
    <div>
      <button onClick={sub}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={add}>+</button>
    </div>
  )
}

export default UseEffect
