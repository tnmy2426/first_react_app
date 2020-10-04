import React, { Component } from 'react'
import WithCounter from './HOC/WithCounter'

class ClickCounterTwo extends Component {
    render() {
        return (
            <div>
                <h1>This is click counter two</h1>
                <h2>Name : {this.props.name} </h2>
                <h3>Count: { this.props.value }</h3>
                <button onClick={ ()=> this.props.increament()}>Increament</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounterTwo)
