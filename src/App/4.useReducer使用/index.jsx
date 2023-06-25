import MyContext from "./myContext";
import {useContext, useReducer, useState} from "react";
import Login from "../../pages/login";
import {initState, reducer} from "./reducer";


function GrandSon(props) {
    const {state,dispatch}=useContext(MyContext)
    return (
        <div style={{background:'#fc4'}}>
            <h1 style={{color:'red'}}>
                GrandSon:
                {state.count}
            </h1>
        </div>
    );
}

function Son(props) {

    return (
        <div>
            <GrandSon/>
        </div>
    );
}

function Son2(props) {
    const {state,dispatch}=useContext(MyContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:'add'})}}> +</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>-</button>
        </div>
    );
}
function Index(props) {

const [state,dispatch]=useReducer(reducer,initState)
//     con
    return (
        <MyContext.Provider value={{state,dispatch}}>
        <div>
            <h1>
                {state.count}
            </h1>
            <div>
                <button onClick={()=>{dispatch({type:'sub'})}}>sub</button>
                <span>(    )</span>
                <button onClick={()=>dispatch({type:'add'})}>add</button>
            </div>
            <p>---------------------------</p>
            <Son/>
            <Son2/>
        </div>
        </MyContext.Provider>
    );
}

export default Index;
