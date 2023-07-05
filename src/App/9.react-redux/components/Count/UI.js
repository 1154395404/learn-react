// Count的ui组件

import {useEffect, useState} from "react";
import store from "../../../../redux/4.react-redux/store";
const UI = (props) => {
    const [state,setState]=useState(0)

    // 不需要订阅事件了
    // useEffect(()=>{
    //     const unsubscribe= store.subscribe(()=>{
    //         setState(state+1)
    //     })
    //     return ()=>{
    //         unsubscribe()
    //     }
    // },[state])
    const oddAdd = () => {
        const {count}=store.getState()
        if (count%2)
            props.increment(1)

    }
    return (
        <div>
            <h1>
                {props.count}
            </h1>
            <div>
                <button onClick={()=>props.increment(1)}>加</button>
                <button onClick={()=>props.decrement(1)}>减</button>
                <button onClick={oddAdd}>基数加</button>
                <button onClick={()=>props.incrementAsync(1,1000)}>异步加</button>
            </div>
            <hr/>
        </div>
    );
}
export default UI
