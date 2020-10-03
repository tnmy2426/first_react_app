import React from 'react'

const MemoB = ({ id }) => {
    console.log("Rendering Component B")
    return (
        <div>
            <h1>ID: {id} </h1>
        </div>
    )
}

export default React.memo(MemoB) 
