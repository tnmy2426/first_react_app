import React, { Component } from 'react'

class Error extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(`Error ${error}`)
        console.log(`Info ${info}`)
    }

    render() {
        return (
            <div>
                { this.state.hasError ? <h1>Something went wrong</h1> : this.props.children }
            </div>
        )
    }
}

export default Error
