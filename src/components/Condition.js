import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUser: true
        }
    }
    
    render() {
        // if (this.state.isUser) {
        //     return (
        //         <div>
        //             <h1>This is class component in Heading One</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h3>This is class component in Heading Three</h3>
        //         </div>
        //     )
        // }

        let msg;
        if (this.state.isUser) {
            msg = <h1>This is class component in Heading One</h1>
        } else {
            msg = <h3>This is class component in Heading Three</h3>
        }

        return(
            <div>
                {msg}
            </div>
        )
    }
}

export default Condition
