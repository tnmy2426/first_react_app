import React from 'react'

const Car = ({ car }) => {
    if (car === 'Nokia') {
        throw new Error('Nokia is not a car!!') ;
    }
    return (
        <div>
            <h1>Car: {car}</h1>
        </div>
    )
}

export default Car
