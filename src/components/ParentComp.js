import React, {useCallback, useState} from 'react'
import ButtonComp from './ButtonComp'

const ParentComp = () => {
    const [id, setid] = useState(0)
    const [count, setcount] = useState(0)

    const increamentId = useCallback(() =>{
        setid(id+1)
    },[id])

    const increamentCounter = useCallback(() =>{
        setcount(count+1)
    },[count])
    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>Counter: {count}</h3>
            <ButtonComp increament={increamentId} text="ID" />
            <ButtonComp increament={increamentCounter} text="Count"/>
        </div>
    )
}

export default ParentComp
