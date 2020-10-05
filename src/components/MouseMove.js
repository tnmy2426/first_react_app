import React,{useState, useEffect} from 'react'

const MouseMove = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const LogMouseMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("userEffect running")
        window.addEventListener('mousemove', LogMouseMove)
        return () => {
            window.removeEventListener('mousemove', LogMouseMove)
        }
    }, [])

    return (
        <div>
            <h3>X: {x} , Y: {y}</h3>
        </div>
    )
}

export default MouseMove
