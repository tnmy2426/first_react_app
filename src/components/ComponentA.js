import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
        this.increament = this.increament.bind(this)
    }

    // static getDerivedStateFromProps(props, state){

    // }

    increament(){
        this.setState({
            value : this.state.value + 1
        })
    }


    render() {
        return (
            <div>
                <h1>Value: {this.state.value}</h1>
                <button onClick={this.increament} >Increament</button>
                <ComponentB data={this.state.value} />
            </div>
        )
    }
}

export default ComponentA
