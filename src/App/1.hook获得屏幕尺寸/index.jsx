import {useWindowResize} from "../../hooks/useWindowResize";
import {useEffect} from "react";

function Sub1() {
    const {position,setPosition}=useWindowResize()

    useEffect(()=>{
        setTimeout(()=>{
            setPosition({
                x:7777,
                y:8888
            })
        },3000)
    },[])

    return (
        <>
            {
                <button disabled>
                    {
                        'x:'+position.x+'y'+position.y
                    }
                </button>
            }
        </>
    )
}
function Sub2() {
    const {position,setPosition}=useWindowResize()
    return (
        <>
            <h1>
                { 'x:'+position.x+'y'+position.y}
            </h1>
        </>
    )
}
export default function () {

    return (
        <div>
            <Sub1/>
            <Sub2/>
        </div>
    )

}
