import React, { Component } from 'react'

class ClassCounterTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        document.title = `Count ${this.state.count}`
    }

    componentDidUpdate(){
        document.title = `Count ${this.state.count}`
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick= {() => {this.setState({count:this.state.count +1})}}>Increament</button>
            </div>
        )
    }
}

export default ClassCounterTwo
