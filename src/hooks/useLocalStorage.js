import { useEffect, useState } from "react"

export function useLocalStorage (key, defaultValue = null) {

  const [data, setData] = useState(defaultValue)
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data, key])


  return [data, setData]

}