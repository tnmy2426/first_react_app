import React, { Component } from 'react'

class CarTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             messages: "This is state constructor"
        }
    }
    

    render() {

        const {brand, color} = this.props
        const { messages } = this.state

        return (
            <div>
                <h1>Car Two component</h1>
                <h2>Brand: {brand}, Color: {color}</h2>
                <h3> {messages} </h3>
            </div>
        )
    }
}

export default CarTwo
