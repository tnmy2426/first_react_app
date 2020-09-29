import React, { Component } from 'react'

class ClickTwo extends Component {
    
    clickHandler = () => {
        console.log('Clicked')
    }

    render() {
        return (
            <div>
                <h1>This is class component</h1>
                <button onClick={this.clickHandler} >Click here</button>
            </div>
        )
    }
}

export default ClickTwo
