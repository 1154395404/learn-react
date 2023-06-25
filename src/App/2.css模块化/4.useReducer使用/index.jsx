import MyContext from "./myContext";
import {useContext, useState} from "react";
import Login from "../../pages/login";


function GrandSon(props) {
    console.log('GrandSon--render')
    const context=useContext(MyContext)
    console.log(context)
    const setTitle = () => {
      // context.tittle='青栀🎉'
        context.set({title:'青栀🎉'})
    }
    return (
        <div style={{background:'#fc4'}}>


            <button onClick={setTitle}>setTitle</button>
            <h1>
                {JSON.stringify(context)}
            </h1>
        </div>
    );
}

function Son(props) {
    console.log('Son--render')
    return (
        <div>
            <GrandSon/>
        </div>
    );
}

function Son2(props) {
    console.log('Son2--render')
    const context=useContext(MyContext)
    console.log(context)
    return (
        <div>
            <button>{JSON.stringify(context)}</button>
        </div>
    );
}
function Index(props) {

    console.log('Index--render')
    const [myData,setMyData]=useState({ title: 'Hello', description: 'This is some context data' })
    const set = (newVal) => {
        setMyData({...myData,...newVal})
    }
    return (
        <MyContext.Provider value={{val:myData,set}}>
        <div>
            <Son/>
            <Son2/>
        </div>
        </MyContext.Provider>
    );
}

export default Index;
