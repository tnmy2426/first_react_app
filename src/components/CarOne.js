import React from 'react'

const CarOne = ({ brand, color}) => {
    return (
        <div>
            <h1>Car One component</h1>
            <h2>Car color: {color} and Brand: {brand}</h2>
        </div>
    )
}

export default CarOne
