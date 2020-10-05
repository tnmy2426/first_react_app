import React, {useState, useEffect} from 'react'

const HookCounterTwo = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    })
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick= {() => setcount(count + 1)}>Increament</button>
        </div>
    )
}

export default HookCounterTwo
