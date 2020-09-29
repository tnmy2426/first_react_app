import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'User'
        }
        this.greetingsHandler = this.greetingsHandler.bind(this)
    }

    greetingsHandler(data){
        alert(`Hello ${this.state.message} Data comes from child component ${data}`)
    }
    
    render() {
        return (
            <div>
                <Child greeting= {this.greetingsHandler} />
            </div>
        )
    }
}

export default Parent
