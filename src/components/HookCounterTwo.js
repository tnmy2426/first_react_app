import React, {useState, useEffect} from 'react'

const HookCounterTwo = () => {
    const [count, setcount] = useState(0)
    const [name, setname] = useState("")

    useEffect(() => {
        console.log("Use effect runs")
        document.title = `Count ${count}`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange= {e => setname(e.target.value) } />
            <h3>Name: {name}</h3>
            <h1>Count: {count}</h1>
            <button onClick= {() => setcount(count + 1)}>Increament</button>
        </div>
    )
}

export default HookCounterTwo
