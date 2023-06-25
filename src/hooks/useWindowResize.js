import {useEffect, useState} from "react";

export function useWindowResize() {
    const [position,setPosition]=useState({
        x:0,
        y:0
    })
    useEffect(()=>{

        const getPoint =(e)=>{
            const {clientWidth,clientHeight}=document.documentElement
            setPosition({
                x:clientWidth,
                y:clientHeight
            })
        }

        window.addEventListener('resize',getPoint)
        getPoint()
        return ()=>{
            window.removeEventListener('resize',getPoint)
        }
    },[])

    return {
        position,
        setPosition
    }
}
