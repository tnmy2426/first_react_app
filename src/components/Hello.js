import React from 'react'

const Hello = (props) => {
    return (
        <div>
            <h1> My name is : {props.name} and Age is: {props.age} </h1>
            <p> {props.children} </p>
        </div>
    )
}

export default Hello