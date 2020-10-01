import React, { Component } from 'react'

class ComponentB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newValue: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            newValue: props.data * 5
        }
    }

    render() {
        return (
            <div>
                <h1>Component B</h1>
                <h3>New Value: {this.state.newValue}</h3>
            </div>
        )
    }
}

export default ComponentB
