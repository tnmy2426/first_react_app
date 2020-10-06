import React from 'react'

const ButtonComp = ({text, increament}) => {
    console.log(`Rendering ${text}`)
    return (
        <div>
            <button onClick={()=>increament()}>Increament {text}</button>
        </div>
    )
}

export default React.memo(ButtonComp) 
