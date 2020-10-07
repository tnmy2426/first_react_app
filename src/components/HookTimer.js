import React, {useEffect, useRef, useState} from 'react'

const HookTimer = () => {
    const [timer, settimer] = useState(0)

    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            settimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            <h3>Timer: {timer} </h3>
            <button onClick={() => clearInterval(intervalRef.current)}>Pause Timer</button>
        </div>
    )
}

export default HookTimer
