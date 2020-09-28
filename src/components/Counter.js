import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increamentPerClick() {
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }

    increamentFivePerClick() {
        this.increamentPerClick()
        this.increamentPerClick()
        this.increamentPerClick()
        this.increamentPerClick()
        this.increamentPerClick()
    }

    render() {
        return (
            <div>
                <h2>Count is: {this.state.count}</h2>
                <button onClick={() => { this.increamentPerClick() }} >Clik Here</button>
                <div>
                    <button onClick={() => { this.increamentFivePerClick() }}>Five Time Clicked</button>
                </div>
            </div>
        )
    }
}

export default Counter
