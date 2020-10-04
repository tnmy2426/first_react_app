import React, { Component } from 'react'
import WithCounter from './HOC/WithCounter'

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h2>Name : {this.props.name} </h2>
                <h1>Count: {this.props.value}</h1>
                <button onMouseOver={ ()=> this.props.increament()}>Hover Here</button>
            </div>
        )
    }
}

export default WithCounter(HoverCounter) 
