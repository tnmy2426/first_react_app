import React, { useState } from 'react'

const HookUseStateWithObject = () => {

    const [info, setinfo] = useState({
        name: "",
        id: null
    })
    return (
        <div>
            <form>
                <input value={info.name} onChange={(event) => setinfo({...info, name: event.target.value })} />
                <input value={info.id} onChange={(event) => setinfo({...info, id: event.target.value })} />
            </form>
            <h3>Name: {info.name}</h3>
            <h3>ID: {info.id}</h3>
        </div>
    )
}

export default HookUseStateWithObject
