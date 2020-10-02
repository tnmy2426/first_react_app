import React, { Component } from 'react'
import UnmountB from './UnmountB'

class UnmountA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isOpen : false
        }
    }
    
    render() {
        return (
            <div>
                <h1>Parrent</h1>
                
                <button onClick={()=>{this.setState({isOpen: !this.state.isOpen})} }>Show Child</button>
                {this.state.isOpen && <UnmountB />}
            </div>
        )
    }
}

export default UnmountA
