import React, {useState} from 'react'

const HookCounter = () => {

    const [state, setstate] = useState(0)
    const increamentTen = () => {
        for (let i = 0; i < 10; i++) {
            setstate(prevState => prevState+1)
            
        }
    }
    return (
        <div>
            <h1> Value: {state} </h1>
            <button onClick={() => increamentTen()}>Increament</button>
        </div>
    )
}

export default HookCounter
