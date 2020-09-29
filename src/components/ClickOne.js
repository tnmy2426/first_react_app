import React from 'react'

const ClickOne = () => {

    const clickHandler = () => {
        console.log('clicked');
    }
    return (
        <div>
            <h1>This is functional component</h1>
            <button onClick={clickHandler} >Click Here</button>
        </div>
    )
}

export default ClickOne
