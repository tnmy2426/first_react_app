import React, { Component } from 'react'
import ComponentY from './ComponentY'

class ComponentX extends Component {
    render() {
        return (
            <div>
                <ComponentY />
            </div>
        )
    }
}

export default ComponentX
