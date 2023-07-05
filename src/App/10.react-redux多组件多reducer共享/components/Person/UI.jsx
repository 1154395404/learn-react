import {useRef} from "react";
import {nanoid} from "nanoid";

const UI = (props) => {
    console.log(props)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const add = () => {
        const name = ref1.current.value
        const age = ref2.current.value
        if (!age || !name) return

        props.addPerson({
            id: nanoid(),
            name,
            age
        })


    }
    return <div>
        <h1>Person 组件</h1>
        <div>
            <input type="text" ref={ref1} placeholder={'name'}/>
            <span>---</span>
            <input type="number" ref={ref2} placeholder={'ages'}/>
            <span>---</span>
            <button onClick={add}>add</button>
        </div>
        <div>
            {
                props.person.map((person)=>  <p key={person.id}>name:{person.name}---age:{person.age}</p>)
            }

        </div>
    </div>
}

export default UI
