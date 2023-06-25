import store from "../../redux/3.计数器-异步action版/store";
import {useEffect, useState} from "react";
import {
    createDecrementAction,
    createDecrementAsyncAction,
    createIncrementAction
} from "../../redux/3.计数器-异步action版/count.action";


function Son() {
    const add = () => {
        store.dispatch(createIncrementAction(1))
    }
    return (
        <>
        <i>
            {store.getState().count}
        </i>
            <button onClick={add}>加</button>
        </>
    )
}

function App() {

    const [state,setState]=useState(0)
    useEffect(()=>{
      const unsubscribe= store.subscribe(()=>{
            setState(state+1)
            console.log('render')
        })
        return ()=>{
            unsubscribe()
        }
    },[state])
    console.log('app')
    const add = () => {
        store.dispatch(createIncrementAction(1))
    }
    const sub = () => {
        store.dispatch(createDecrementAction(1))
    }
    const oddAdd = () => {
        const {count}=store.getState()
        if (count%2)
        {
            store.dispatch(createIncrementAction(1))
        }

    }
    const asyncAdd = () => {
        store.dispatch(createDecrementAsyncAction(1,1000))
    }
    return (
        <div>
            <h1>
                {store.getState().count}
            </h1>
            <div>
                <button onClick={add}>加</button>
                <button onClick={sub}>减</button>
                <button onClick={oddAdd}>基数加</button>
                <button onClick={asyncAdd}>异步加</button>
            </div>

            <hr/>
            <p>
                son组件
            </p>
            <Son/>
        </div>
    );

}

export default App;
