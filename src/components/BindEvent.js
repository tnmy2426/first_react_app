import React, { Component } from 'react'

class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: 'Button Clicked'
        })
    }
    
    render() {
        const { message } = this.state
        return (
            <div>
                <h1>This is Class component</h1>
                <p> {message} </p>
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default BindEvent
