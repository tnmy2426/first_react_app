import React, { useContext } from 'react'
import { ProfileContext, UserContext } from '../App'
import ComponentZ from './ComponentZ'

const ComponentY = () => {

    const name = useContext(UserContext)
    const profile = useContext(ProfileContext)
    return (
        <div>
            <ComponentZ />
            <h1>Name:{name}</h1>
            <h3>Profile:{profile}</h3>
        </div>
    )
}

export default ComponentY
