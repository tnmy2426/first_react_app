import React, { Component } from 'react'
import { ProfileContext, UserContext } from '../App'
import ComponentZ from './ComponentZ'

class ComponentY extends Component {
    render() {
        return (
            <div>
                <ComponentZ />
                <UserContext.Consumer>
                    {
                        name => {
                            return (
                                <ProfileContext.Consumer>
                                    {
                                        profile => {
                                            return (
                                                <div>
                                                    <h1>Name:{name}</h1>
                                                    <h3>Profile: {profile}</h3>
                                                </div>
                                            )
                                        }
                                    }
                                </ProfileContext.Consumer>
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentY
