import React, { Component } from 'react'

class ClickCounterThree extends Component {
    render() {
        return (
            <div>
                <h1>Value: { this.props.value }</h1>
                <button onClick={this.props.increament}>Count</button>
            </div>
        )
    }
}

export default ClickCounterThree
