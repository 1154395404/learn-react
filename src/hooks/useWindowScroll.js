import { useEffect, useState } from "react"

export function useWindowScroll (params) {

  const [y, setY] = useState(document.documentElement.scrollTop)
  useEffect(() => {
    console.log('render')
    document.addEventListener('scroll', (e) => {
      setY(document.documentElement.scrollTop)
      // console.log(document.documentElement.scrollTop)
    })
  }, [])

  return [y]

}