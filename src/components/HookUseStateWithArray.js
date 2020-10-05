import React, { useState } from 'react'

const HookUseStateWithArray = () => {
    const [lists, setlists] = useState([])

    const generateList = () => {
        setlists([...lists, {
            id: lists.length,
            value: Math.floor(Math.random() * 10)
        }])
    }
    return (
        <div>
            <button onClick={generateList} >Generate List</button>
            <ul>
                {
                    lists.map(list => {
                        return <li key={list.id}> {list.value} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default HookUseStateWithArray
