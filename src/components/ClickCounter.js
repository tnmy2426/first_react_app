import React, { Component } from 'react'
import WithCounter from './HOC/WithCounter'

class ClickCounter extends Component {

    
    render() {
        return (
            <div>
                <h2>Name : {this.props.name} </h2>
                <h1>Count: {this.props.value}</h1>
                <button onClick={ ()=> this.props.increament()}>Click</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter) 
