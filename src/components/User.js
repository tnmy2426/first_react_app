import React, { Component, Fragment } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 0
        }
        this.increament = this.increament.bind(this)
    }

    increament(){
        this.setState((prevState) => ({
            value: prevState.value +1
        }))
    }
    
    
    render() {
        return (
            <div>
                <Fragment>{ this.props.render(this.state.value, this.increament)}</Fragment>
            </div>
        )
    }
}

export default User
