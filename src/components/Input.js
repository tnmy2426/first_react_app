import React, {useState, useRef, useEffect} from 'react'

const Input = () => {
    const [name, setname] = useState("")
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" onChange={()=> setname(inputRef.current.value)} ref={inputRef} />
            <h3>Name is: {name} </h3>
        </div>
    )
}

export default Input
