import React, { Component } from 'react'
import MemoB from './MemoB'

class MemoA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: 0
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                id: this.state.id +1
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                <MemoB id = {this.state.id} />
            </div>
        )
    }
}

export default MemoA
