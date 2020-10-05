import React, {useState} from 'react'

const HookCounter = () => {

    const [state, setstate] = useState(0)
    return (
        <div>
            <h1> Value: {state} </h1>
            <button onClick={() => setstate(state +1)}>Increament</button>
        </div>
    )
}

export default HookCounter
