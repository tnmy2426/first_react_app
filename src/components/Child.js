import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={() =>props.greeting('Data Tnmy')} >Greetings</button>
        </div>
    )
}
export default Child
