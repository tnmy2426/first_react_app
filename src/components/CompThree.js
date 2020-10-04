import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompThree extends Component {
    render() {
        return (
            <UserConsumer>
                { (value) => {
                    return (
                        <div>
                            <h1>Value came using context: {value}</h1>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default CompThree
