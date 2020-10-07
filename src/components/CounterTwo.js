import React, { useMemo, useState } from 'react'

const CounterTwo = () => {

    const [idOne, setidOne] = useState(0)
    const [idTwo, setidTwo] = useState(0)

    const increamentIdOne = () => {
        setidOne(idOne + 1)
    }
    const increamentIdTwo = () => {
        setidTwo(idTwo + 1)
    }
    const isEven = useMemo(()=>{
        let n = 0;
        while (n < 2000000000) n++; {
            return idOne % 2 === 0
        }
    },[idOne])

    return (
        <div>
            <div>
                <button onClick={increamentIdOne}>Increament ID One - {idOne}</button>
                <span> {isEven ? "Even": "Odd"} </span>
            </div>
            <div>
                <button onClick={increamentIdTwo}>Increament ID Two - {idTwo}</button>
            </div>
        </div>
    )
}

export default CounterTwo
