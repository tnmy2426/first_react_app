import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>Render Props: { this.props.render(false, this.state.value)}</h1>
            </div>
        )
    }
}

export default User
