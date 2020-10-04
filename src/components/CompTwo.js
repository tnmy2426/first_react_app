import React, { Component } from 'react'
import CompThree from './CompThree'
import { UserConsumer } from './UserContext'

class CompTwo extends Component {
    render() {
        return (
            <UserConsumer>
                {(value) => {
                    return (
                        <div>
                            <CompThree />
                            <h3>This data also sent using context data: {value}</h3>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default CompTwo
