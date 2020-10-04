import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        return (
            <div>
                <h1>Value: { this.props.value }</h1>
                <button onMouseOver={this.props.increament}>Count</button>
            </div>
        )
    }
}

export default HoverCounterTwo
