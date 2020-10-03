import React from 'react'

const ForwardRefB = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref = {ref} />
        </div>
    )
})

export default ForwardRefB
