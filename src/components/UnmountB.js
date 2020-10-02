import React, { Component } from 'react'

class UnmountB extends Component {
componentWillUnmount(){
    console.log('Child component unmount!!')
}

    render() {
        return (
            <div>
                <h3>Child</h3>
            </div>
        )
    }
}

export default UnmountB
